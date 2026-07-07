import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { BusLine } from "@/types/transportation";

interface LiveBusMapProps {
  line: BusLine;
  progress: number;
}

function interpolatePosition(line: BusLine, progress: number): [number, number] {
  const stops = line.stops;
  if (stops.length < 2) {
    const only = stops[0];
    return [only?.lat ?? 0, only?.lng ?? 0];
  }
  const segments = stops.length - 1;
  const scaled = progress * segments;
  const segmentIndex = Math.min(Math.floor(scaled), segments - 1);
  const localT = scaled - segmentIndex;
  const from = stops[segmentIndex];
  const to = stops[segmentIndex + 1];
  return [from.lat + (to.lat - from.lat) * localT, from.lng + (to.lng - from.lng) * localT];
}

const busIcon = L.divIcon({
  className: "",
  html: '<div class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#00355f] text-white shadow-lg"><span class="material-symbols-outlined text-[18px]">directions_bus</span></div>',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

export function LiveBusMap({ line, progress }: LiveBusMapProps) {
  const busPosition = useMemo(() => interpolatePosition(line, progress), [line, progress]);
  const routePositions = useMemo<[number, number][]>(() => line.stops.map((stop) => [stop.lat, stop.lng]), [line]);
  const center = routePositions[Math.floor(routePositions.length / 2)] ?? routePositions[0];

  return (
    <div className="relative isolate h-[280px] w-full overflow-hidden border-y border-outline-variant/20">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        attributionControl={false}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={routePositions} pathOptions={{ color: "#0F4C81", weight: 4 }} />
        {line.stops.map((stop) => (
          <CircleMarker
            key={stop.id}
            center={[stop.lat, stop.lng]}
            radius={6}
            pathOptions={{ color: "#0F4C81", fillColor: "#FFFFFF", fillOpacity: 1, weight: 3 }}
          >
            <Tooltip permanent direction="top" offset={[0, -8]} className="!rounded-md !border-none !bg-surface !px-2 !py-1 !font-label-sm !text-label-sm !text-on-surface !shadow-sm">
              {stop.name}
            </Tooltip>
          </CircleMarker>
        ))}
        <Marker position={busPosition} icon={busIcon} />
      </MapContainer>
    </div>
  );
}

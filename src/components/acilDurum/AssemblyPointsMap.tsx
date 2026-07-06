import { useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "@/components/common/Icon";
import type { AssemblyPoint } from "@/types/acilDurum";

interface AssemblyPointsMapProps {
  points: AssemblyPoint[];
  filterChips: string[];
}

export function AssemblyPointsMap({ points, filterChips }: AssemblyPointsMapProps) {
  const [activeChip, setActiveChip] = useState(filterChips[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const center = useMemo<[number, number]>(() => [points[0]?.lat ?? 40.8378, points[0]?.lng ?? 31.1611], [points]);
  const filteredPoints = points.filter((point) => point.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-0">
        <MapContainer
          center={center}
          zoom={14}
          scrollWheelZoom={false}
          attributionControl={false}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filteredPoints.map((point) => (
            <CircleMarker
              key={point.id}
              center={[point.lat, point.lng]}
              radius={9}
              pathOptions={{ color: "#0F4C81", fillColor: "#0f4c81", fillOpacity: 1, weight: 3 }}
            >
              <Tooltip
                direction="top"
                offset={[0, -10]}
                className="!rounded-md !border-none !bg-surface !px-2 !py-1 !font-label-sm !text-label-sm !text-on-surface !shadow-sm"
              >
                {point.name}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="absolute left-container-margin right-container-margin top-4 z-20">
        <div className="flex items-center gap-3 rounded-2xl border border-outline-variant/20 bg-surface/90 p-2 shadow-sm backdrop-blur-md">
          <Icon name="search" className="ml-2 text-outline" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Toplanma alanı veya mahalle ara..."
            className="font-body-md text-body-md flex-1 border-none bg-transparent p-0 text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-0"
          />
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {filterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveChip(chip)}
              className={`scale-98 whitespace-nowrap rounded-full px-4 py-1.5 font-label-sm text-label-sm shadow-sm transition-transform ${
                activeChip === chip
                  ? "border border-primary-container/20 bg-primary-container text-on-primary-container"
                  : "border border-outline-variant/30 bg-surface/90 text-on-surface backdrop-blur-md"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import type { District, InfrastructureCategory, InfrastructureLocation } from "@/types/cityGuide";

interface InfrastructureDirectoryProps {
  locations: InfrastructureLocation[];
}

const DISTRICTS: District[] = [
  "Merkez",
  "Akçakoca",
  "Gölyaka",
  "Cumayeri",
  "Çilimli",
  "Gümüşova",
  "Kaynaşlı",
  "Yığılca",
];

const CATEGORY_META: Record<InfrastructureCategory, { label: string; icon: string }> = {
  hastane: { label: "Hastaneler", icon: "local_hospital" },
  taksi: { label: "Taksi Durakları", icon: "local_taxi" },
  otopark: { label: "Otoparklar", icon: "local_parking" },
  muhtarlik: { label: "Muhtarlıklar", icon: "badge" },
};

type DistrictFilter = District | "all";

export function InfrastructureDirectory({ locations }: InfrastructureDirectoryProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictFilter>("all");

  const filteredLocations =
    selectedDistrict === "all" ? locations : locations.filter((location) => location.district === selectedDistrict);

  return (
    <div className="flex flex-col gap-stack-md">
      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">İlçe Seçin</label>
        <div className="relative">
          <select
            value={selectedDistrict}
            onChange={(event) => setSelectedDistrict(event.target.value as DistrictFilter)}
            className="w-full appearance-none rounded-xl border border-outline-variant/50 bg-background-subtle px-4 py-3 font-body-md text-body-md text-on-surface transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">Tümü</option>
            {DISTRICTS.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
          />
        </div>
      </div>

      {(Object.keys(CATEGORY_META) as InfrastructureCategory[]).map((category) => {
        const categoryLocations = filteredLocations.filter((location) => location.category === category);
        if (categoryLocations.length === 0) {
          return null;
        }

        return (
          <section key={category} className="flex flex-col gap-stack-sm">
            <div className="flex items-center gap-2">
              <Icon name={CATEGORY_META[category].icon} filled className="text-primary" />
              <h3 className="font-headline-md text-headline-md text-on-surface">{CATEGORY_META[category].label}</h3>
            </div>

            {categoryLocations.map((location) => (
              <div key={location.id} className="rounded-2xl bg-surface p-4 shadow-sm">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h4 className="font-label-lg text-label-lg text-on-surface">{location.name}</h4>
                  <span className="font-label-sm text-label-sm shrink-0 rounded-full bg-surface-container-low px-2 py-1 text-on-surface-variant">
                    {location.openingHours}
                  </span>
                </div>
                <p className="font-body-md text-body-md mb-3 text-on-surface-variant">{location.address}</p>
                <div className="flex gap-2">
                  <a
                    href={`tel:${location.phone}`}
                    className="scale-98 flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2 font-label-sm text-label-sm text-on-primary transition-transform"
                  >
                    <Icon name="call" className="text-[16px]" />
                    Ara
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="scale-98 flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary py-2 font-label-sm text-label-sm text-primary transition-transform hover:bg-primary-fixed/30"
                  >
                    <Icon name="directions" className="text-[16px]" />
                    Yol Tarifi
                  </a>
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}

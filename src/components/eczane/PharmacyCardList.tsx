import { Icon } from "@/components/common/Icon";
import { formatDistanceKm } from "@/utils/formatters";
import type { Pharmacy } from "@/types/eczane";

interface PharmacyCardListProps {
  pharmacies: Pharmacy[];
}

export function PharmacyCardList({ pharmacies }: PharmacyCardListProps) {
  if (pharmacies.length === 0) {
    return (
      <p className="font-body-md text-body-md px-container-margin text-on-surface-variant">
        Aramanızla eşleşen eczane bulunamadı.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-stack-sm px-container-margin pb-stack-lg">
      {pharmacies.map((pharmacy) => (
        <div key={pharmacy.id} className="rounded-2xl bg-surface p-4 shadow-sm">
          <div className="mb-2 flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-error-container/40 text-error">
                <Icon name="local_pharmacy" filled />
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg text-on-surface">{pharmacy.name}</h3>
                <span className="font-label-sm text-label-sm text-primary">Nöbetçi</span>
              </div>
            </div>
            <span className="font-label-sm text-label-sm shrink-0 rounded-full bg-surface-container-low px-2 py-1 text-on-surface-variant">
              {formatDistanceKm(pharmacy.distanceKm)}
            </span>
          </div>

          <p className="font-body-md text-body-md mb-3 text-on-surface-variant">{pharmacy.address}</p>

          <div className="flex gap-2">
            <a
              href={`tel:${pharmacy.phone}`}
              className="scale-98 flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2 font-label-sm text-label-sm text-on-primary transition-transform"
            >
              <Icon name="call" className="text-[16px]" />
              Ara
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${pharmacy.lat},${pharmacy.lng}`}
              target="_blank"
              rel="noreferrer"
              className="scale-98 flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline-variant/40 py-2 font-label-sm text-label-sm text-on-surface transition-transform hover:bg-surface-container-low"
            >
              <Icon name="directions" className="text-[16px]" />
              Yol Tarifi
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

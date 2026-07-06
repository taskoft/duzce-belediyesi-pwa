import { Icon } from "@/components/common/Icon";
import type { TaxiStand } from "@/types/transportation";

interface TaksiListProps {
  stands: TaxiStand[];
}

export function TaksiList({ stands }: TaksiListProps) {
  return (
    <div className="rounded-2xl border border-outline-variant/30 bg-surface p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-high">
          <Icon name="local_taxi" className="text-primary" />
        </div>
        <div>
          <h3 className="font-label-lg text-label-lg text-on-surface">Taksi Durakları</h3>
          <p className="font-label-sm text-label-sm text-outline">En yakın durağı ara</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {stands.map((stand) => (
          <a
            key={stand.id}
            href={`tel:${stand.phone}`}
            className="scale-98 flex items-center justify-between rounded-lg bg-background-subtle p-2 transition-transform"
          >
            <div>
              <p className="font-label-sm text-label-sm text-on-surface">{stand.name}</p>
              <p className="font-label-sm text-[10px] text-outline">{stand.distance}</p>
            </div>
            <Icon name="call" className="text-primary" />
          </a>
        ))}
      </div>
    </div>
  );
}

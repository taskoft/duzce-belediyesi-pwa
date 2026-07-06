import { Icon } from "@/components/common/Icon";
import type { LostItem } from "@/types/transportation";

interface LostItemsListProps {
  items: LostItem[];
}

export function LostItemsList({ items }: LostItemsListProps) {
  return (
    <div className="rounded-2xl border border-outline-variant/30 bg-surface p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="find_in_page" className="text-tertiary" />
          <h3 className="font-label-lg text-label-lg text-on-surface">Kayıp Eşyalar</h3>
        </div>
        <button type="button" className="font-label-sm text-label-sm text-primary">
          Tümü
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-lg bg-background-subtle p-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-surface-variant">
                <Icon name={item.icon} className="text-[16px] text-on-surface-variant" />
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface">{item.name}</p>
                <p className="text-[10px] text-outline">
                  {item.location} - {item.date}
                </p>
              </div>
            </div>
            <span className="font-label-sm rounded-full bg-surface-container-low px-2 py-1 text-[10px] text-primary-container">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

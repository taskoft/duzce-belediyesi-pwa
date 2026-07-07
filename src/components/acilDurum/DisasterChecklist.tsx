import { Icon } from "@/components/common/Icon";
import { useDisasterChecklist } from "@/hooks/useDisasterChecklist";
import type { ChecklistItem } from "@/types/acilDurum";

interface DisasterChecklistProps {
  items: ChecklistItem[];
  onClose: () => void;
}

export function DisasterChecklist({ items, onClose }: DisasterChecklistProps) {
  const { checkedIds, isChecked, toggleItem } = useDisasterChecklist();

  return (
    <div className="w-full text-left">
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
            Afet Hazırlık Kontrol Listesi
          </h2>
          <p className="font-label-sm text-label-sm mt-1 text-primary">
            {checkedIds.length}/{items.length} tamamlandı
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="flex max-h-[360px] flex-col gap-1 overflow-y-auto">
        {items.map((item) => {
          const checked = isChecked(item.id);
          return (
            <label
              key={item.id}
              className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-surface-container-low"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleItem(item.id)}
                className="h-5 w-5 rounded border-2 border-outline text-primary-container focus:ring-primary-container"
              />
              <span
                className={`font-body-md text-body-md ${
                  checked ? "text-on-surface-variant line-through" : "text-on-surface"
                }`}
              >
                {item.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

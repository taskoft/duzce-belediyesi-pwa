import { Icon } from "@/components/common/Icon";
import type { TransportationTab } from "@/types/transportation";

interface TransitTabsProps {
  activeTab: TransportationTab;
  onTabChange: (tab: TransportationTab) => void;
}

const TABS: { id: TransportationTab; label: string; icon: string }[] = [
  { id: "bus", label: "Hat Takibi", icon: "directions_bus" },
  { id: "card", label: "Kart Yükleme", icon: "credit_card" },
];

export function TransitTabs({ activeTab, onTabChange }: TransitTabsProps) {
  return (
    <div className="relative flex rounded-xl border border-outline-variant/20 bg-surface-container-low p-1 shadow-sm">
      <div
        className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-lg bg-surface shadow-sm transition-transform duration-300 ${
          activeTab === "card" ? "translate-x-[calc(100%+4px)]" : "translate-x-0"
        }`}
      />
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-lg py-2 font-label-lg text-label-lg transition-colors ${
            activeTab === tab.id ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          <Icon name={tab.icon} filled={activeTab === tab.id} className="text-[20px]" />
          {tab.label}
        </button>
      ))}
    </div>
  );
}

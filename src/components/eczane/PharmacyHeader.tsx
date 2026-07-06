import { Icon } from "@/components/common/Icon";

interface PharmacyHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
}

export function PharmacyHeader({ searchTerm, onSearchChange, resultCount }: PharmacyHeaderProps) {
  return (
    <div className="flex flex-col gap-stack-sm px-container-margin py-stack-md">
      <div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Nöbetçi Eczaneler</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Bugün açık olan eczaneleri görüntüleyin</p>
      </div>

      <div className="relative">
        <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Eczane adı veya mahalle ara..."
          className="font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle pl-10 pr-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <p className="font-label-sm text-label-sm text-on-surface-variant">{resultCount} eczane bulundu</p>
    </div>
  );
}

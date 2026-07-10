import { Icon } from "@/components/common/Icon";
import { IconBadge } from "@/components/common/IconBadge";
import { useToast } from "@/hooks/useToast";
import type { Pharmacy } from "@/types/cityGuide";

interface PharmacyWidgetProps {
  pharmacies: Pharmacy[];
}

export function PharmacyWidget({ pharmacies }: PharmacyWidgetProps) {
  const { show: showToast } = useToast();

  const copyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      showToast("Adres kopyalandı.", "success");
    } catch {
      showToast("Adres kopyalanamadı.", "error");
    }
  };

  return (
    <div className="flex flex-col gap-stack-sm">
      <div className="flex items-center gap-2 rounded-xl bg-error-container p-3 text-on-error-container">
        <IconBadge name="local_pharmacy" tone="red" size="sm" />
        <p className="font-label-lg text-label-lg">Bugünün Nöbetçi Eczaneleri</p>
      </div>

      {pharmacies.map((pharmacy) => (
        <div key={pharmacy.id} className="rounded-2xl bg-surface p-4 shadow-sm">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="font-label-lg text-label-lg text-on-surface">{pharmacy.name}</h3>
            <span className="font-label-sm text-label-sm shrink-0 rounded-full bg-surface-container-low px-2 py-1 text-on-surface-variant">
              {pharmacy.distance}
            </span>
          </div>
          <p className="font-body-md text-body-md mb-3 text-on-surface-variant">{pharmacy.address}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => copyAddress(pharmacy.address)}
              className="scale-98 flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline-variant/40 py-2 font-label-sm text-label-sm text-on-surface transition-transform hover:bg-surface-container-low"
            >
              <Icon name="content_copy" className="text-[16px]" />
              Adresi Kopyala
            </button>
            <a
              href="tel:112"
              className="scale-98 flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2 font-label-sm text-label-sm text-on-primary transition-transform"
            >
              <Icon name="call" className="text-[16px]" />
              Ara
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

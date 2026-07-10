import { Icon } from "@/components/common/Icon";
import { IconBadge, type IconTone } from "@/components/common/IconBadge";
import { Button } from "@/components/common/Button";
import { Spinner } from "@/components/common/Spinner";
import type { AskidaFaturaInvoice } from "@/types/socialServices";

const INVOICE_TONES: Record<string, IconTone> = {
  water_drop: "sky",
  bolt: "amber",
  local_fire_department: "orange",
};

interface AskidaFaturaDashboardProps {
  invoices: AskidaFaturaInvoice[];
  pendingCount: number;
  paidThisMonth: number;
  registryIds: Set<string>;
  onToggle: (id: string) => void;
  registryTotal: number;
  isSettling: boolean;
  onSettle: () => void;
}

export function AskidaFaturaDashboard({
  invoices,
  pendingCount,
  paidThisMonth,
  registryIds,
  onToggle,
  registryTotal,
  isSettling,
  onSettle,
}: AskidaFaturaDashboardProps) {
  return (
    <section className="flex flex-col gap-stack-md">
      <div className="flex items-center justify-between">
        <h3 className="font-label-lg text-label-lg text-on-surface">Askıda Fatura Var</h3>
        <span className="font-label-sm text-label-sm rounded-full bg-surface-container-low px-2 py-1 text-primary">
          Dayanışma
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 rounded-2xl bg-surface p-4 shadow-sm">
          <IconBadge name="receipt_long" tone="rose" size="sm" />
          <div>
            <p className="font-display-lg text-display-lg text-on-surface">{pendingCount}</p>
            <p className="font-label-sm text-label-sm text-outline">Bekleyen Fatura</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-2xl bg-surface p-4 shadow-sm">
          <IconBadge name="water_drop" tone="sky" size="sm" />
          <div>
            <p className="font-display-lg text-display-lg text-on-surface">{paidThisMonth}</p>
            <p className="font-label-sm text-label-sm text-outline">Ödenen (Bu Ay)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-2xl bg-surface shadow-sm">
        <div className="flex items-center justify-between border-b border-outline-variant/30 bg-surface-bright p-4">
          <span className="font-label-lg text-label-lg text-on-surface">Öncelikli Faturalar</span>
        </div>
        {invoices.length === 0 && (
          <p className="font-body-md text-body-md p-4 text-on-surface-variant">Bekleyen askıda fatura kalmadı.</p>
        )}
        {invoices.map((invoice, index) => {
          const isSelected = registryIds.has(invoice.id);
          return (
            <label
              key={invoice.id}
              className={`flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-background ${
                index < invoices.length - 1 ? "border-b border-outline-variant/20" : ""
              } ${isSelected ? "bg-primary-fixed/10" : ""}`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggle(invoice.id)}
                  className="h-5 w-5 rounded border-2 border-outline text-primary-container focus:ring-primary-container"
                />
                <IconBadge name={invoice.icon} tone={INVOICE_TONES[invoice.icon] ?? "blue"} />
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-on-surface">{invoice.type}</span>
                  <span className="font-body-md text-body-md text-outline">{invoice.neighborhood}</span>
                </div>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface">{invoice.amount} ₺</span>
            </label>
          );
        })}
      </div>

      {registryIds.size > 0 && (
        <div className="flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-sm">
          <div className="flex-1">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Seçili Toplam</p>
            <p className="font-headline-md text-headline-md text-primary">{registryTotal} ₺</p>
          </div>
          <Button variant="primary" onClick={onSettle} disabled={isSettling}>
            {isSettling ? <Spinner className="h-5 w-5" /> : <Icon name="volunteer_activism" />}
            {isSettling ? "Gönderiliyor..." : "Faturaları Öde"}
          </Button>
        </div>
      )}
    </section>
  );
}

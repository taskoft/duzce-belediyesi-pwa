import { Icon } from "@/components/common/Icon";
import type { MunicipalInvoice } from "@/types/ebelediye";

interface InvoiceListProps {
  invoices: MunicipalInvoice[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  hasQueried: boolean;
  isQuerying: boolean;
}

export function InvoiceList({ invoices, selectedIds, onToggle, hasQueried, isQuerying }: InvoiceListProps) {
  if (!hasQueried) {
    return null;
  }

  return (
    <section className="flex flex-col gap-stack-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-md text-headline-md text-on-surface">Ödenmemiş Borçlar</h2>
        {invoices.length > 0 && (
          <span className="font-label-sm rounded-full bg-error-vibrant px-2 py-1 text-[10px] text-on-error">
            {invoices.length} Adet
          </span>
        )}
      </div>

      {isQuerying && <p className="font-body-md text-body-md text-on-surface-variant">Sorgulanıyor...</p>}

      {!isQuerying && invoices.length === 0 && (
        <p className="font-body-md text-body-md text-on-surface-variant">Ödenmemiş borç bulunmamaktadır.</p>
      )}

      {invoices.map((invoice) => (
        <label
          key={invoice.id}
          className="group relative flex cursor-pointer items-start gap-4 overflow-hidden rounded-2xl border border-primary/20 bg-surface p-4 shadow-sm transition-colors hover:bg-surface-container-low"
        >
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-primary-container" />
          <div className="pt-1">
            <input
              type="checkbox"
              checked={selectedIds.has(invoice.id)}
              onChange={() => onToggle(invoice.id)}
              className="h-5 w-5 cursor-pointer rounded-full border-2 border-outline text-primary-container transition-all focus:ring-primary-container focus:ring-offset-0"
            />
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-start justify-between">
              <h3 className="font-label-lg text-label-lg text-on-surface">{invoice.title}</h3>
              <span className="font-headline-md text-headline-md text-primary-container">{invoice.amount} TL</span>
            </div>
            <p className="font-body-md text-body-md mb-2 text-on-surface-variant">{invoice.description}</p>
            <p
              className={`font-body-md text-body-md flex items-center gap-1 ${
                invoice.isOverdue ? "text-error-vibrant" : "text-on-surface-variant"
              }`}
            >
              <Icon name={invoice.isOverdue ? "warning" : "calendar_today"} className="text-[16px]" />
              Son Ödeme: {invoice.dueDate}
            </p>
          </div>
        </label>
      ))}
    </section>
  );
}

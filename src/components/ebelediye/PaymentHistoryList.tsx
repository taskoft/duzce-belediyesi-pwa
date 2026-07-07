import type { PaymentHistoryEntry } from "@/types/ebelediye";

interface PaymentHistoryListProps {
  entries: PaymentHistoryEntry[];
}

export function PaymentHistoryList({ entries }: PaymentHistoryListProps) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface">Ödeme Geçmişi</h3>
      <div className="flex flex-col rounded-2xl border border-outline-variant/20 bg-surface shadow-sm">
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className={`flex items-center justify-between p-4 ${
              index < entries.length - 1 ? "border-b border-outline-variant/20" : ""
            }`}
          >
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">{entry.title}</p>
              <p className="font-label-sm text-label-sm text-outline">{entry.date}</p>
            </div>
            <span className="font-label-lg text-label-lg text-primary">{entry.amount} TL</span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Icon } from "@/components/common/Icon";

interface PaymentCardVisualProps {
  cardName: string;
  cardNumberFormatted: string;
  expiryDate: string;
}

export function PaymentCardVisual({ cardName, cardNumberFormatted, expiryDate }: PaymentCardVisualProps) {
  return (
    <div
      className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl p-6 text-white shadow-lg"
      style={{ background: "linear-gradient(135deg, #0F4C81 0%, #0a365c 100%)" }}
    >
      <div className="relative z-10 mb-8 flex items-start justify-between">
        <Icon name="contactless" filled className="text-4xl opacity-80" />
      </div>
      <div className="font-headline-md relative z-10 mb-4 tracking-widest opacity-90">
        {cardNumberFormatted || "•••• •••• •••• ••••"}
      </div>
      <div className="relative z-10 flex items-end justify-between">
        <div>
          <div className="mb-1 text-[10px] uppercase tracking-wider opacity-60">Kart Sahibi</div>
          <div className="font-label-sm w-32 truncate uppercase">{cardName || "AD SOYAD"}</div>
        </div>
        <div>
          <div className="mb-1 text-[10px] uppercase tracking-wider opacity-60">SKT</div>
          <div className="font-label-sm">{expiryDate || "AA/YY"}</div>
        </div>
      </div>
    </div>
  );
}

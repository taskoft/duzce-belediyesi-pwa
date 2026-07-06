import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { Spinner } from "@/components/common/Spinner";

const INPUT_CLASSES =
  "font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container";

interface PaymentCardFormProps {
  cardName: string;
  onCardNameChange: (value: string) => void;
  cardNumberFormatted: string;
  onCardNumberChange: (value: string) => void;
  expiryDate: string;
  onExpiryDateChange: (value: string) => void;
  cvv: string;
  onCvvChange: (value: string) => void;
  total: number;
  isProcessing: boolean;
  onSubmit: () => void;
}

export function PaymentCardForm({
  cardName,
  onCardNameChange,
  cardNumberFormatted,
  onCardNumberChange,
  expiryDate,
  onExpiryDateChange,
  cvv,
  onCvvChange,
  total,
  isProcessing,
  onSubmit,
}: PaymentCardFormProps) {
  return (
    <div className="relative space-y-stack-md">
      {isProcessing && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl bg-surface/90">
          <Spinner className="text-primary-container" />
          <p className="font-label-lg text-label-lg text-on-surface">3D Secure doğrulanıyor...</p>
        </div>
      )}

      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">
          Kart Üzerindeki İsim
        </label>
        <input
          type="text"
          value={cardName}
          onChange={(event) => onCardNameChange(event.target.value)}
          placeholder="Örn. Ahmet Yılmaz"
          disabled={isProcessing}
          className={INPUT_CLASSES}
        />
      </div>

      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Kart Numarası</label>
        <div className="relative">
          <input
            type="tel"
            inputMode="numeric"
            maxLength={19}
            value={cardNumberFormatted}
            onChange={(event) => onCardNumberChange(event.target.value)}
            placeholder="0000 0000 0000 0000"
            disabled={isProcessing}
            className={INPUT_CLASSES}
          />
          <Icon name="credit_card" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant" />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Son Kullanma</label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={expiryDate}
            onChange={(event) => onExpiryDateChange(event.target.value)}
            placeholder="AA/YY"
            disabled={isProcessing}
            className={`${INPUT_CLASSES} text-center`}
          />
        </div>
        <div className="flex-1">
          <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">CVV</label>
          <input
            type="password"
            inputMode="numeric"
            maxLength={3}
            value={cvv}
            onChange={(event) => onCvvChange(event.target.value)}
            placeholder="•••"
            disabled={isProcessing}
            className={`${INPUT_CLASSES} text-center`}
          />
        </div>
      </div>

      <div className="mt-6 border-t border-outline-variant/20 pt-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-body-lg text-body-lg text-on-surface-variant">Ödenecek Tutar</span>
          <span className="font-headline-lg text-headline-lg-mobile text-primary-container">{total} TL</span>
        </div>
        <Button variant="primary" fullWidth onClick={onSubmit} disabled={isProcessing}>
          Ödemeyi Tamamla
          <Icon name="arrow_forward" className="text-[18px]" />
        </Button>
      </div>
    </div>
  );
}

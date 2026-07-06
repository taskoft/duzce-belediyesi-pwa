import { Icon } from "@/components/common/Icon";
import { PaymentCardVisual } from "@/components/ebelediye/PaymentCardVisual";
import { PaymentCardForm } from "@/components/ebelediye/PaymentCardForm";
import type { PaymentStatus } from "@/types/ebelediye";

interface PaymentGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  cardName: string;
  onCardNameChange: (value: string) => void;
  cardNumberFormatted: string;
  onCardNumberChange: (value: string) => void;
  expiryDate: string;
  onExpiryDateChange: (value: string) => void;
  cvv: string;
  onCvvChange: (value: string) => void;
  total: number;
  paymentStatus: PaymentStatus;
  onSubmit: () => void;
}

export function PaymentGateway({
  isOpen,
  onClose,
  total,
  paymentStatus,
  onSubmit,
  ...cardFieldProps
}: PaymentGatewayProps) {
  const isProcessing = paymentStatus === "processing";
  const isSuccess = paymentStatus === "success";
  const dismiss = isProcessing ? undefined : onClose;

  return (
    <>
      <div
        onClick={dismiss}
        className={`absolute inset-0 z-[60] bg-ink-base/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`absolute bottom-0 z-[70] flex max-h-[90%] w-full flex-col overflow-hidden rounded-t-[32px] bg-surface shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button type="button" onClick={dismiss} className="flex w-full justify-center pb-2 pt-4" aria-label="Kapat">
          <span className="h-1.5 w-12 rounded-full bg-outline-variant" />
        </button>

        <div className="overflow-y-auto px-container-margin pb-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              Kredi Kartı ile Ödeme
            </h2>
            <div className="flex items-center gap-1 rounded-md border border-primary-container/20 bg-surface-container-low px-2 py-1 text-primary-container">
              <Icon name="verified_user" className="text-[14px]" />
              <span className="font-label-sm text-[10px] font-bold">3D SECURE</span>
            </div>
          </div>

          <PaymentCardVisual
            cardName={cardFieldProps.cardName}
            cardNumberFormatted={cardFieldProps.cardNumberFormatted}
            expiryDate={cardFieldProps.expiryDate}
          />

          {isSuccess ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <Icon name="check_circle" filled className="text-[56px] text-primary-container" />
              <p className="font-headline-md text-headline-md text-on-surface">Ödeme Başarılı</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ödemeniz başarıyla gerçekleştirilmiştir.
              </p>
            </div>
          ) : (
            <PaymentCardForm {...cardFieldProps} total={total} isProcessing={isProcessing} onSubmit={onSubmit} />
          )}
        </div>
      </div>
    </>
  );
}

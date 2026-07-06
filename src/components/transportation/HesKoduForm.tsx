import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { useToast } from "@/hooks/useToast";
import { sanitizeAlphanumericInput, sanitizeNumericInput, formatCardNumber } from "@/utils/formatters";

const HES_CODE_LENGTH = 8;
const CARD_NUMBER_DIGIT_LENGTH = 16;

interface HesKoduFormProps {
  onClose: () => void;
}

export function HesKoduForm({ onClose }: HesKoduFormProps) {
  const { show: showToast } = useToast();
  const [hesCode, setHesCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = () => {
    if (hesCode.length !== HES_CODE_LENGTH || cardNumber.length !== CARD_NUMBER_DIGIT_LENGTH) {
      showToast("Lütfen HES kodu ve kart numarasını eksiksiz girin.", "error");
      return;
    }
    showToast("Ulaşım kartınız başarıyla eşleştirildi.", "success");
    onClose();
  };

  return (
    <div className="w-full text-left">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Kart Tanımlama</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="mb-3">
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">HES Kodu</label>
        <input
          type="text"
          value={hesCode}
          onChange={(event) => setHesCode(sanitizeAlphanumericInput(event.target.value, HES_CODE_LENGTH))}
          placeholder="Örn. A1B2C3D4"
          className="font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-4 uppercase tracking-widest text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="mb-4">
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Kart Numarası</label>
        <input
          type="tel"
          inputMode="numeric"
          maxLength={19}
          value={formatCardNumber(cardNumber)}
          onChange={(event) => setCardNumber(sanitizeNumericInput(event.target.value, CARD_NUMBER_DIGIT_LENGTH))}
          placeholder="0000 0000 0000 0000"
          className="font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <Button variant="primary" fullWidth onClick={handleSubmit}>
        <Icon name="qr_code_scanner" className="text-[18px]" />
        Kartı Eşleştir
      </Button>
    </div>
  );
}

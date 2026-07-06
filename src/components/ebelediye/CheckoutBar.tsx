import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";

interface CheckoutBarProps {
  total: number;
  isVisible: boolean;
  onCheckout: () => void;
}

export function CheckoutBar({ total, isVisible, onCheckout }: CheckoutBarProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute bottom-0 z-40 w-full rounded-t-3xl border-t border-outline-variant/20 bg-surface px-container-margin pb-8 pt-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-body-lg text-body-lg text-on-surface-variant">Seçili Toplam</span>
        <span className="font-display-lg text-display-lg text-primary-container">{total} TL</span>
      </div>
      <Button variant="primary" fullWidth onClick={onCheckout}>
        <Icon name="lock" />
        Güvenli Ödeme Yap
      </Button>
    </div>
  );
}

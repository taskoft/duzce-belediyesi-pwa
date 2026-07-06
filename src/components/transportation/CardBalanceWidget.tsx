import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";

interface CardBalanceWidgetProps {
  balance: number;
  quickTopUpAmounts: number[];
  selectedAmount: number;
  onSelectAmount: (amount: number) => void;
  cardNumberFormatted: string;
  onCardNumberChange: (value: string) => void;
  onTopUp: () => void;
}

export function CardBalanceWidget({
  balance,
  quickTopUpAmounts,
  selectedAmount,
  onSelectAmount,
  cardNumberFormatted,
  onCardNumberChange,
  onTopUp,
}: CardBalanceWidgetProps) {
  return (
    <div className="flex flex-col gap-stack-lg px-container-margin pb-stack-lg">
      <div
        className="relative flex aspect-[1.586] w-full flex-col justify-between overflow-hidden rounded-xl p-6 shadow-md"
        style={{ background: "linear-gradient(135deg, #0F4C81 0%, #00355f 100%)" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md tracking-wider text-on-primary">DÜZCE KART</h3>
            <p className="font-label-sm text-label-sm text-on-primary/80">Belediye Ulaşım Kartı</p>
          </div>
          <Icon name="contactless" filled className="text-[32px] text-on-primary opacity-80" />
        </div>
        <div>
          <p className="font-body-md text-body-md mb-1 text-on-primary/70">Mevcut Bakiye</p>
          <div className="flex items-end gap-2">
            <span className="font-display-lg text-display-lg text-on-primary">{balance.toFixed(2)}</span>
            <span className="font-body-lg text-body-lg mb-1 text-on-primary">TL</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-outline-variant/20 bg-surface p-4 shadow-sm">
        <h4 className="font-label-lg text-label-lg mb-3 text-on-surface">Hızlı Bakiye Yükle</h4>
        <div className="mb-4 grid grid-cols-3 gap-3">
          {quickTopUpAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => onSelectAmount(amount)}
              className={`scale-98 rounded-lg py-3 font-label-lg text-label-lg transition-all ${
                selectedAmount === amount
                  ? "border-2 border-primary bg-primary-container font-bold text-on-primary-container shadow-sm"
                  : "border border-outline-variant/30 bg-surface-container-low text-on-surface hover:border-primary hover:bg-primary-container hover:text-on-primary-container"
              }`}
            >
              {amount} TL
            </button>
          ))}
        </div>

        <div className="mb-4">
          <label className="font-label-sm text-label-sm mb-1 block text-on-surface-variant">Kart Numarası</label>
          <div className="relative">
            <Icon name="credit_card" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="tel"
              inputMode="numeric"
              maxLength={19}
              value={cardNumberFormatted}
              onChange={(event) => onCardNumberChange(event.target.value)}
              placeholder="Kart numarası girin"
              className="font-body-md text-body-md w-full rounded-lg border border-outline-variant/50 bg-background-subtle py-3 pl-10 pr-4 outline-none transition-shadow focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <Button variant="primary" fullWidth onClick={onTopUp}>
          <Icon name="payments" />
          {selectedAmount} TL Yükle
        </Button>
      </div>

      <p className="font-label-sm text-label-sm flex items-center justify-center gap-1 text-center text-on-surface-variant">
        <Icon name="lock" className="text-[14px]" />
        İşlemleriniz 3D Secure ile korunmaktadır.
      </p>
    </div>
  );
}

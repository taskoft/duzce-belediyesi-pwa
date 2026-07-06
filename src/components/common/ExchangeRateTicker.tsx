import { Icon } from "@/components/common/Icon";
import { useExchangeRates } from "@/hooks/useExchangeRates";

export function ExchangeRateTicker() {
  const { rates, isLoading } = useExchangeRates();

  return (
    <div className="flex flex-col gap-2 border-t border-outline-variant/20 px-3 py-3">
      <div className="flex items-center gap-2">
        <Icon name="currency_exchange" className="text-primary" />
        <span className="font-label-sm text-label-sm text-on-surface-variant">Döviz Kurları</span>
      </div>
      {isLoading ? (
        <p className="font-label-sm text-label-sm text-outline">Yükleniyor...</p>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-surface-container-low px-2 py-1.5 text-center">
            <p className="font-label-sm text-[10px] text-on-surface-variant">USD</p>
            <p className="font-label-lg text-label-sm text-on-surface">{rates.usdToTry.toFixed(2)} ₺</p>
          </div>
          <div className="rounded-lg bg-surface-container-low px-2 py-1.5 text-center">
            <p className="font-label-sm text-[10px] text-on-surface-variant">EUR</p>
            <p className="font-label-lg text-label-sm text-on-surface">{rates.eurToTry.toFixed(2)} ₺</p>
          </div>
        </div>
      )}
    </div>
  );
}

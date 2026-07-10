import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { IconBadge } from "@/components/common/IconBadge";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { TransitTabs } from "@/components/transportation/TransitTabs";
import { BusLineSelector } from "@/components/transportation/BusLineSelector";
import { LiveBusMap } from "@/components/transportation/LiveBusMap";
import { CardBalanceWidget } from "@/components/transportation/CardBalanceWidget";
import { RoutePlanner } from "@/components/transportation/RoutePlanner";
import { TaksiList } from "@/components/transportation/TaksiList";
import { HesKoduForm } from "@/components/transportation/HesKoduForm";
import { LostItemsList } from "@/components/transportation/LostItemsList";
import { useTransportation } from "@/hooks/useTransportation";
import { useModal } from "@/hooks/useModal";

export function Transportation() {
  const transportation = useTransportation();
  const { open, close } = useModal();

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto pb-[76px] pt-[56px]">
        <div className="px-container-margin py-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-1 text-on-surface">Akıllı Ulaşım</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Otobüs takibi ve kart işlemleri</p>
        </div>

        <div className="px-container-margin pb-stack-md">
          <TransitTabs activeTab={transportation.activeTab} onTabChange={transportation.setActiveTab} />
        </div>

        {transportation.isLoading ? (
          <PageLoader />
        ) : (
          <>
            {transportation.activeTab === "bus" && transportation.activeLine ? (
              <>
                <BusLineSelector
                  lines={transportation.busLines}
                  activeLineId={transportation.activeLineId}
                  onSelect={transportation.setActiveLineId}
                />
                <LiveBusMap line={transportation.activeLine} progress={transportation.routeProgress} />
                <div className="px-container-margin py-stack-md">
                  <div className="flex items-center gap-2 rounded-xl border border-outline-variant/20 bg-surface-container-low p-3">
                    <span className="font-label-lg text-label-lg rounded-md bg-primary-container px-2 py-1 text-on-primary-container">
                      {transportation.activeLine.lineNumber}
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface">
                      {transportation.activeLine.name}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <CardBalanceWidget
                balance={transportation.balance}
                quickTopUpAmounts={transportation.quickTopUpAmounts}
                selectedAmount={transportation.selectedAmount}
                onSelectAmount={transportation.setSelectedAmount}
                cardNumberFormatted={transportation.cardNumberFormatted}
                onCardNumberChange={transportation.setCardNumber}
                onTopUp={transportation.topUpBalance}
              />
            )}

            <div className="flex flex-col gap-stack-md px-container-margin pb-stack-lg pt-stack-lg">
              <h3 className="font-headline-md text-headline-md text-on-surface">Diğer Ulaşım Hizmetleri</h3>
              <RoutePlanner
                defaultOrigin={transportation.defaultOrigin}
                destinationSuggestions={transportation.destinationSuggestions}
              />
              <div className="grid grid-cols-2 gap-4">
                <TaksiList stands={transportation.taxiStands} />
                <button
                  type="button"
                  onClick={() => open(<HesKoduForm onClose={close} />)}
                  className="scale-98 flex flex-col justify-between rounded-2xl border border-outline-variant/30 bg-surface p-4 text-left shadow-sm transition-transform"
                >
                  <IconBadge name="qr_code_scanner" tone="rose" className="mb-3" />
                  <div>
                    <h3 className="font-label-lg text-label-lg mb-1 text-on-surface">Kart Tanımlama</h3>
                    <p className="font-label-sm text-label-sm text-outline">Ulaşım kartı eşleştir</p>
                  </div>
                </button>
              </div>
              <LostItemsList items={transportation.lostItems} />
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </>
  );
}

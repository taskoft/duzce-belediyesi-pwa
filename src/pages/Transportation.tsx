import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { TransitTabs } from "@/components/transportation/TransitTabs";
import { LiveBusMap } from "@/components/transportation/LiveBusMap";
import { CardBalanceWidget } from "@/components/transportation/CardBalanceWidget";
import { useTransportation } from "@/hooks/useTransportation";

export function Transportation() {
  const transportation = useTransportation();

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

        {transportation.activeTab === "bus" && transportation.activeLine ? (
          <>
            <LiveBusMap line={transportation.activeLine} progress={transportation.routeProgress} />
            <div className="px-container-margin py-stack-md">
              <div className="flex items-center gap-2 rounded-xl border border-outline-variant/20 bg-surface-container-low p-3">
                <span className="font-label-lg text-label-lg rounded-md bg-primary-container px-2 py-1 text-on-primary-container">
                  {transportation.activeLine.lineNumber}
                </span>
                <span className="font-label-lg text-label-lg text-on-surface">{transportation.activeLine.name}</span>
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
      </main>

      <BottomNav />
    </>
  );
}

import { useState } from "react";
import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { DirectoryList } from "@/components/kentRehberi/DirectoryList";
import { PharmacyWidget } from "@/components/kentRehberi/PharmacyWidget";
import { TourismGrid } from "@/components/kentRehberi/TourismGrid";
import { useAsyncData } from "@/hooks/useAsyncData";
import cityGuideDataFallback from "@/data/cityGuideData.json";
import type { CityGuideData, KentRehberiTab } from "@/types/cityGuide";

const TABS: { id: KentRehberiTab; label: string }[] = [
  { id: "corporate", label: "Kurumsal Rehber" },
  { id: "tourism", label: "Gezilecek Yerler" },
];

export function KentRehberi() {
  const [activeTab, setActiveTab] = useState<KentRehberiTab>("corporate");
  const { data: cityGuideData, isLoading } = useAsyncData<CityGuideData>(
    "/api/city-guide",
    cityGuideDataFallback as CityGuideData,
  );

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto pb-[76px] pt-[56px]">
        <div className="sticky top-0 z-10 bg-background-subtle/90 px-container-margin py-stack-md backdrop-blur-md">
          <div className="relative flex rounded-xl bg-surface-container-low p-1">
            <div
              className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-lg bg-surface shadow-sm transition-transform duration-300 ${
                activeTab === "tourism" ? "translate-x-[calc(100%+4px)]" : "translate-x-0"
              }`}
            />
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 flex-1 rounded-lg py-2 text-center font-label-lg text-label-lg transition-colors ${
                  activeTab === tab.id ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <PageLoader />
        ) : (
          <div className="flex flex-col gap-stack-md px-container-margin pb-stack-lg">
            {activeTab === "corporate" ? (
              <>
                <DirectoryList emergencyNumbers={cityGuideData.emergencyNumbers} entries={cityGuideData.directory} />
                <PharmacyWidget pharmacies={cityGuideData.pharmacies} />
              </>
            ) : (
              <TourismGrid destinations={cityGuideData.destinations} bungalows={cityGuideData.bungalows} />
            )}
          </div>
        )}
      </main>

      <BottomNav />
    </>
  );
}

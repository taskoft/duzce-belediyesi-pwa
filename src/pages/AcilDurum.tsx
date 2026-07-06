import { Header } from "@/components/common/Header";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { AssemblyPointsMap } from "@/components/acilDurum/AssemblyPointsMap";
import { EmergencyHotlines } from "@/components/acilDurum/EmergencyHotlines";
import { useToast } from "@/hooks/useToast";
import { useAsyncData } from "@/hooks/useAsyncData";
import acilDurumDataFallback from "@/data/acilDurumData.json";
import type { AcilDurumData } from "@/types/acilDurum";

export function AcilDurum() {
  const { show: showToast } = useToast();
  const { data: acilDurumData, isLoading } = useAsyncData<AcilDurumData>("/api/acil-durum", acilDurumDataFallback);
  const nearestPoint = acilDurumData.assemblyPoints.find(
    (point) => point.id === acilDurumData.nearestAssemblyPointId,
  );

  return (
    <>
      <Header
        trailing={
          <Button
            variant="icon"
            className="-mr-2"
            aria-label="Bildirimler"
            onClick={() => showToast("Bildirimler yakında aktif olacaktır.", "info")}
          >
            <Icon name="notifications" />
          </Button>
        }
      />

      <main className="absolute inset-0 overflow-hidden pb-[76px] pt-[56px]">
        <div className="relative h-full w-full">
          {isLoading ? (
            <PageLoader />
          ) : (
            <>
              <AssemblyPointsMap points={acilDurumData.assemblyPoints} filterChips={acilDurumData.filterChips} />
              <EmergencyHotlines hotlines={acilDurumData.hotlines} nearestPoint={nearestPoint} />
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </>
  );
}

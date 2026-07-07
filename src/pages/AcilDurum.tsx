import { Header } from "@/components/common/Header";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { AssemblyPointsMap } from "@/components/acilDurum/AssemblyPointsMap";
import { EmergencyHotlines } from "@/components/acilDurum/EmergencyHotlines";
import { DisasterChecklist } from "@/components/acilDurum/DisasterChecklist";
import { useToast } from "@/hooks/useToast";
import { useModal } from "@/hooks/useModal";
import { useAsyncData } from "@/hooks/useAsyncData";
import acilDurumDataFallback from "@/data/acilDurumData.json";
import disasterChecklistData from "@/data/disasterChecklistData.json";
import type { AcilDurumData } from "@/types/acilDurum";

export function AcilDurum() {
  const { show: showToast } = useToast();
  const { open, close } = useModal();
  const { data: acilDurumData, isLoading } = useAsyncData<AcilDurumData>("/api/acil-durum", acilDurumDataFallback);
  const nearestPoint = acilDurumData.assemblyPoints.find(
    (point) => point.id === acilDurumData.nearestAssemblyPointId,
  );

  const openChecklist = () => {
    open(<DisasterChecklist items={disasterChecklistData} onClose={close} />);
  };

  return (
    <>
      <Header
        trailing={
          <div className="flex items-center">
            <Button variant="icon" aria-label="Afet Hazırlık Kontrol Listesi" onClick={openChecklist}>
              <Icon name="checklist" />
            </Button>
            <Button
              variant="icon"
              className="-mr-2"
              aria-label="Bildirimler"
              onClick={() => showToast("Bildirimler yakında aktif olacaktır.", "info")}
            >
              <Icon name="notifications" />
            </Button>
          </div>
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

import { useNavigate } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { Icon } from "@/components/common/Icon";
import { PageLoader } from "@/components/common/PageLoader";
import { BaskanWidget } from "@/components/belediye/BaskanWidget";
import { CenazeList } from "@/components/belediye/CenazeList";
import { IhaleTable } from "@/components/belediye/IhaleTable";
import { EGazeteViewer } from "@/components/belediye/EGazeteViewer";
import { useBelediye } from "@/hooks/useBelediye";
import { useAsyncData } from "@/hooks/useAsyncData";
import belediyeDataFallback from "@/data/belediyeData.json";
import type { BelediyeData } from "@/types/belediye";

export function Belediye() {
  const navigate = useNavigate();
  const { isMessageExpanded, toggleMessageExpanded, submitMayorMessage } = useBelediye();
  const { data: belediyeData, isLoading } = useAsyncData<BelediyeData>("/api/belediye", belediyeDataFallback);

  return (
    <>
      <Header
        leading={
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Geri"
            className="scale-98 -ml-2 flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-transform hover:bg-surface-container-low"
          >
            <Icon name="arrow_back" />
          </button>
        }
        title="Belediye"
        trailing={<div className="h-10 w-10" />}
      />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-stack-lg pt-[76px]">
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            <BaskanWidget
              mayor={belediyeData.mayor}
              corporateStructure={belediyeData.corporateStructure}
              isMessageExpanded={isMessageExpanded}
              onToggleMessage={toggleMessageExpanded}
              onSubmitMayorMessage={submitMayorMessage}
            />
            <CenazeList notices={belediyeData.vefatEdenler} />
            <IhaleTable notices={belediyeData.ihaleIlanlari} />
            <EGazeteViewer issues={belediyeData.eGazete} />
          </>
        )}
      </main>
    </>
  );
}

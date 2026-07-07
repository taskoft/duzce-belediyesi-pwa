import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { ComplaintForm } from "@/components/beyazMasa/ComplaintForm";
import { ComplaintTracker } from "@/components/beyazMasa/ComplaintTracker";
import { useBeyazMasaForm } from "@/hooks/useBeyazMasaForm";

export function BeyazMasa() {
  const form = useBeyazMasaForm();

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px]">
        <div className="pt-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-1 text-on-surface">Beyaz Masa</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Talep, öneri ve şikayetlerinizi doğrudan ilgili birime iletin; başvurunuzu takip numarasıyla adım adım izleyin.
          </p>
        </div>

        {form.isLoading ? (
          <PageLoader />
        ) : (
          <>
            <ComplaintForm
              categories={form.categories}
              categoryId={form.categoryId}
              onCategoryChange={form.setCategoryId}
              details={form.details}
              onDetailsChange={form.setDetails}
              attachment={form.attachment}
              onFileSelect={form.attachFile}
              status={form.status}
              submittedCode={form.submittedCode}
              onSubmit={form.submitComplaint}
              onReset={form.resetForm}
            />

            <ComplaintTracker
              trackingCode={form.trackingCode}
              onTrackingCodeChange={form.setTrackingCode}
              trackedResult={form.trackedResult}
              onTrack={form.trackComplaint}
            />
          </>
        )}

        <div className="h-2" />
      </main>

      <BottomNav />
    </>
  );
}

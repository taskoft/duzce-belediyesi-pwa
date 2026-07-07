import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { VolunteeringHub } from "@/components/sosyalHizmetler/VolunteeringHub";
import { SuggestionForm } from "@/components/sosyalHizmetler/SuggestionForm";
import { AskidaFaturaDashboard } from "@/components/sosyalHizmetler/AskidaFaturaDashboard";
import { PatiDestekForm } from "@/components/sosyalHizmetler/PatiDestekForm";
import { useSocialVolunteering } from "@/hooks/useSocialVolunteering";
import { useAskidaFatura } from "@/hooks/useAskidaFatura";

export function SosyalHizmetler() {
  const social = useSocialVolunteering();
  const askidaFatura = useAskidaFatura();
  const isLoading = social.isLoading || askidaFatura.isLoading;

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px]">
        <div className="pt-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-1 text-on-surface">Sosyal Hizmetler</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Gönüllülük fırsatlarına katılın, Askıda Fatura dayanışmasına destek olun; birlikte güçlenen bir şehir inşa edelim.
          </p>
        </div>

        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            <AskidaFaturaDashboard
              invoices={askidaFatura.invoices}
              pendingCount={askidaFatura.pendingCount}
              paidThisMonth={askidaFatura.paidThisMonth}
              registryIds={askidaFatura.registryIds}
              onToggle={askidaFatura.toggleRegistry}
              registryTotal={askidaFatura.registryTotal}
              isSettling={askidaFatura.isSettling}
              onSettle={askidaFatura.settleRegistry}
            />

            <VolunteeringHub
              categories={social.categories}
              opportunities={social.opportunities}
              appliedIds={social.appliedIds}
              onApply={social.applyToOpportunity}
            />

            <PatiDestekForm
              description={social.patiDescription}
              onDescriptionChange={social.setPatiDescription}
              photo={social.patiPhoto}
              onPhotoChange={social.setPatiPhoto}
              onSubmit={social.submitPatiDestek}
            />

            <SuggestionForm
              title={social.suggestionTitle}
              onTitleChange={social.setSuggestionTitle}
              detail={social.suggestionDetail}
              onDetailChange={social.setSuggestionDetail}
              isSubmitted={social.isSuggestionSubmitted}
              onSubmit={social.submitSuggestion}
            />
          </>
        )}

        <div className="h-2" />
      </main>

      <BottomNav />
    </>
  );
}

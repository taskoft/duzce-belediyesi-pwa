import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { VolunteeringHub } from "@/components/sosyalHizmetler/VolunteeringHub";
import { SuggestionForm } from "@/components/sosyalHizmetler/SuggestionForm";
import { useSocialVolunteering } from "@/hooks/useSocialVolunteering";

export function SosyalHizmetler() {
  const social = useSocialVolunteering();

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px]">
        <div className="pt-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-1 text-on-surface">Sosyal Hizmetler</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Gönüllülük fırsatları ve öneriler</p>
        </div>

        <VolunteeringHub
          categories={social.categories}
          opportunities={social.opportunities}
          appliedIds={social.appliedIds}
          onApply={social.applyToOpportunity}
        />

        <SuggestionForm
          title={social.suggestionTitle}
          onTitleChange={social.setSuggestionTitle}
          detail={social.suggestionDetail}
          onDetailChange={social.setSuggestionDetail}
          isSubmitted={social.isSuggestionSubmitted}
          onSubmit={social.submitSuggestion}
        />

        <div className="h-2" />
      </main>

      <BottomNav />
    </>
  );
}

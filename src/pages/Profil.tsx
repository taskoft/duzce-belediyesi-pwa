import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { UserProfile } from "@/components/profil/UserProfile";
import { NotificationPreferences } from "@/components/profil/NotificationPreferences";
import { TextSizeToggle } from "@/components/profil/TextSizeToggle";
import { RateAppWidget } from "@/components/profil/RateAppWidget";
import { AboutSection } from "@/components/profil/AboutSection";
import { OnboardingReplayButton } from "@/components/profil/OnboardingReplayButton";
import { LogoutButton } from "@/components/profil/LogoutButton";
import { useAsyncData } from "@/hooks/useAsyncData";
import profileDataFallback from "@/data/profileData.json";
import type { ProfileData } from "@/types/profile";

export function Profil() {
  const { data: profileData, isLoading } = useAsyncData<ProfileData>("/api/profile", profileDataFallback);

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[72px]">
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            <UserProfile
              citizen={profileData.citizen}
              savedCards={profileData.savedCards}
              workflowHistory={profileData.workflowHistory}
            />

            <NotificationPreferences />
            <TextSizeToggle />
            <RateAppWidget />
            <AboutSection />
            <OnboardingReplayButton />
            <LogoutButton />
          </>
        )}
      </main>

      <BottomNav />
    </>
  );
}

import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { UserProfile } from "@/components/profil/UserProfile";
import { useAsyncData } from "@/hooks/useAsyncData";
import profileDataFallback from "@/data/profileData.json";
import type { ProfileData } from "@/types/profile";

export function Profil() {
  const { data: profileData, isLoading } = useAsyncData<ProfileData>("/api/profile", profileDataFallback);

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto px-container-margin pb-[76px] pt-[72px]">
        {isLoading ? (
          <PageLoader />
        ) : (
          <UserProfile
            citizen={profileData.citizen}
            savedCards={profileData.savedCards}
            workflowHistory={profileData.workflowHistory}
          />
        )}
      </main>

      <BottomNav />
    </>
  );
}

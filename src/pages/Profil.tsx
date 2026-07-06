import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { UserProfile } from "@/components/profil/UserProfile";
import profileData from "@/data/profileData.json";

export function Profil() {
  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto px-container-margin pb-[76px] pt-[72px]">
        <UserProfile
          citizen={profileData.citizen}
          savedCards={profileData.savedCards}
          workflowHistory={profileData.workflowHistory}
        />
      </main>

      <BottomNav />
    </>
  );
}

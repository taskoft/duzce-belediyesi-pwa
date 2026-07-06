import { Header } from "@/components/common/Header";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { GreetingBanner } from "@/components/dashboard/GreetingBanner";
import { MenuGrid } from "@/components/dashboard/MenuGrid";
import { NewsFeed } from "@/components/dashboard/NewsFeed";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { OnboardingOverlay } from "@/components/dashboard/OnboardingOverlay";

export function Dashboard() {
  return (
    <>
      <Header />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px] mt-stack-md">
        <SearchBar />
        <GreetingBanner greeting="İyi Günler, Hemşehrim 👋" message="Size nasıl yardımcı olabiliriz?" />
        <MenuGrid />
        <NewsFeed />
      </main>

      <BottomNav />
      <OnboardingOverlay />
    </>
  );
}

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { SearchResultsList } from "@/components/dashboard/SearchResultsList";
import { GreetingBanner } from "@/components/dashboard/GreetingBanner";
import { MenuGrid } from "@/components/dashboard/MenuGrid";
import { NewsFeed } from "@/components/dashboard/NewsFeed";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { OnboardingOverlay } from "@/components/dashboard/OnboardingOverlay";
import { NAVIGATION_LINKS } from "@/data/navigationLinks";

export function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    if (!normalized) {
      return [];
    }
    return NAVIGATION_LINKS.filter((link) => link.label.toLowerCase().includes(normalized));
  }, [searchQuery]);

  const handleSearchSubmit = () => {
    if (searchResults.length === 1) {
      navigate(searchResults[0].path);
      setSearchQuery("");
    }
  };

  return (
    <>
      <Header />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px] mt-stack-md">
        <SearchBar onDebouncedSearch={setSearchQuery} onSubmit={handleSearchSubmit} />

        {searchQuery.trim() ? (
          <SearchResultsList results={searchResults} query={searchQuery.trim()} />
        ) : (
          <>
            <GreetingBanner greeting="İyi Günler, Hemşehrim 👋" message="Size nasıl yardımcı olabiliriz?" />
            <MenuGrid />
            <NewsFeed />
          </>
        )}
      </main>

      <BottomNav />
      <OnboardingOverlay />
    </>
  );
}

import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { Icon } from "@/components/common/Icon";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { TourismCard } from "@/components/kentRehberi/TourismCard";
import { useAsyncData } from "@/hooks/useAsyncData";
import { useFavorites } from "@/hooks/useFavorites";
import cityGuideDataFallback from "@/data/cityGuideData.json";
import type { CityGuideData } from "@/types/cityGuide";

export function Favorilerim() {
  const { data: cityGuideData, isLoading } = useAsyncData<CityGuideData>(
    "/api/city-guide",
    cityGuideDataFallback as CityGuideData,
  );
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteDestinations = cityGuideData.destinations.filter((destination) =>
    favorites.includes(destination.id),
  );

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto pb-[76px] pt-[56px]">
        <div className="px-container-margin py-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-1 text-on-surface">Favorilerim</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Kent Rehberi'nde favorilediğiniz mekanlar
          </p>
        </div>

        {isLoading ? (
          <PageLoader />
        ) : favoriteDestinations.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-container-margin py-stack-lg text-center">
            <Icon name="favorite_border" className="text-[40px] text-outline-variant" />
            <p className="font-body-md text-body-md text-on-surface-variant">
              Henüz favori eklemediniz. Kent Rehberi'nde beğendiğiniz mekanları kalp ikonuyla favorileyebilirsiniz.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-stack-md px-container-margin pb-stack-lg">
            {favoriteDestinations.map((destination) => (
              <TourismCard
                key={destination.id}
                destination={destination}
                isFavorite={isFavorite(destination.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </>
  );
}

import { TourismCard } from "@/components/kentRehberi/TourismCard";
import { BungalowBookingWidget } from "@/components/kentRehberi/BungalowBookingWidget";
import { DestinationDetailModal } from "@/components/kentRehberi/DestinationDetailModal";
import { CulturalEventsList } from "@/components/kentRehberi/CulturalEventsList";
import { useFavorites } from "@/hooks/useFavorites";
import { useModal } from "@/hooks/useModal";
import type { BungalowFacility, CulturalEvent, Destination } from "@/types/cityGuide";

interface TourismGridProps {
  destinations: Destination[];
  bungalows: BungalowFacility[];
  culturalEvents: CulturalEvent[];
}

export function TourismGrid({ destinations, bungalows, culturalEvents }: TourismGridProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { open, close } = useModal();

  const openBooking = (bungalow: BungalowFacility) => {
    open(<BungalowBookingWidget bungalow={bungalow} onClose={close} />);
  };

  const openDestination = (destination: Destination) => {
    const linkedBungalow = destination.bungalowId
      ? bungalows.find((bungalow) => bungalow.id === destination.bungalowId)
      : undefined;
    open(<DestinationDetailModal destination={destination} bungalow={linkedBungalow} onClose={close} />);
  };

  const sortedDestinations = [...destinations].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured),
  );

  return (
    <div className="flex flex-col gap-stack-lg">
      <div className="flex flex-col gap-stack-md">
        {sortedDestinations.map((destination) => (
          <TourismCard
            key={destination.id}
            destination={destination}
            isFavorite={isFavorite(destination.id)}
            onToggleFavorite={toggleFavorite}
            onSelect={openDestination}
          />
        ))}
      </div>

      <section className="flex flex-col gap-stack-sm">
        <h3 className="font-headline-md text-headline-md text-on-surface">Konaklama Tesisleri</h3>
        <div className="flex flex-col gap-stack-sm">
          {bungalows.map((bungalow) => (
            <div key={bungalow.id} className="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-sm">
              <img
                src={bungalow.imageUrl}
                alt={bungalow.name}
                className="h-16 w-16 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-label-lg text-label-lg truncate text-on-surface">{bungalow.name}</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {bungalow.pricePerNight} TL / gece
                </p>
                <span
                  className={`font-label-sm inline-block rounded-full px-2 py-0.5 text-[10px] ${
                    bungalow.availabilityStatus
                      ? "bg-primary-container text-on-primary-container"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {bungalow.availabilityStatus ? "Müsait" : "Dolu"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => openBooking(bungalow)}
                disabled={!bungalow.availabilityStatus}
                className="scale-98 h-component-height-md shrink-0 rounded-xl bg-primary px-4 font-label-sm text-label-sm text-on-primary transition-transform disabled:cursor-not-allowed disabled:opacity-40"
              >
                Rezervasyon
              </button>
            </div>
          ))}
        </div>
      </section>

      <CulturalEventsList events={culturalEvents} />
    </div>
  );
}

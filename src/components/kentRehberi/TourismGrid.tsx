import { Icon } from "@/components/common/Icon";
import type { Destination } from "@/types/cityGuide";

interface TourismGridProps {
  destinations: Destination[];
}

export function TourismGrid({ destinations }: TourismGridProps) {
  return (
    <div className="flex flex-col gap-stack-md">
      {destinations.map((destination) => (
        <article key={destination.id} className="overflow-hidden rounded-2xl bg-surface shadow-sm">
          <div className="relative h-48 w-full">
            <img src={destination.imageUrl} alt={destination.title} className="h-full w-full object-cover" />
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-surface/90 px-2 py-1 shadow-sm backdrop-blur-sm">
              <Icon name="star" filled className="text-[14px] text-tertiary-container" />
              <span className="font-label-sm text-label-sm text-on-surface">{destination.rating}</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-headline-md text-headline-md mb-1 text-on-surface">{destination.title}</h3>
            <p className="font-body-md text-body-md mb-4 text-on-surface-variant">{destination.description}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${destination.title} Düzce`)}`}
              target="_blank"
              rel="noreferrer"
              className="scale-98 flex h-10 w-full items-center justify-center gap-2 rounded-xl border-2 border-primary font-label-lg text-label-lg text-primary transition-transform hover:bg-primary-fixed/30"
            >
              <Icon name="directions" className="text-[18px]" />
              Yol Tarifi Al
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

import { Icon } from "@/components/common/Icon";
import { CardImageCarousel } from "@/components/common/CardImageCarousel";
import { useToast } from "@/hooks/useToast";
import type { Destination } from "@/types/cityGuide";

interface TourismCardProps {
  destination: Destination;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function TourismCard({ destination, isFavorite, onToggleFavorite }: TourismCardProps) {
  const { show: showToast } = useToast();

  const handleShare = async () => {
    const shareUrl = `https://www.duzce.bel.tr/kent-rehberi/${destination.id}`;
    const shareData = { title: destination.name, text: destination.description, url: shareUrl };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Kullanıcı paylaşım penceresini kapattı, ek bir işlem gerekmiyor.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast("Konum bağlantısı kopyalandı.", "success");
    } catch {
      showToast("Bağlantı paylaşılamadı.", "error");
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl bg-surface shadow-sm">
      <CardImageCarousel images={destination.images} alt={destination.name} heightClassName="h-48">
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-surface/90 px-2 py-1 shadow-sm backdrop-blur-sm">
          <Icon name="star" filled className="text-[14px] text-tertiary-container" />
          <span className="font-label-sm text-label-sm text-on-surface">{destination.rating}</span>
        </div>
        <span className="font-label-sm text-label-sm absolute left-3 top-3 rounded-full bg-surface/90 px-2 py-1 text-on-surface shadow-sm backdrop-blur-sm">
          {destination.openingHours}
        </span>
        {destination.featured && (
          <span className="font-label-sm text-label-sm absolute bottom-2 left-3 flex items-center gap-1 rounded-full bg-tertiary-container px-2 py-1 text-on-tertiary-container shadow-sm">
            <Icon name="star" filled className="text-[14px]" />
            Öne Çıkan
          </span>
        )}
      </CardImageCarousel>
      <div className="p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3 className="font-headline-md text-headline-md text-on-surface">{destination.name}</h3>
          <button
            type="button"
            onClick={() => onToggleFavorite(destination.id)}
            aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
            className="scale-98 shrink-0 rounded-full p-1 text-error-vibrant transition-transform"
          >
            <Icon name="favorite" filled={isFavorite} />
          </button>
        </div>
        <p className="font-body-md text-body-md mb-1 text-on-surface-variant">{destination.description}</p>
        <p className="font-label-sm text-label-sm mb-4 text-outline">{destination.address}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="scale-98 flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-outline-variant/40 font-label-sm text-label-sm text-on-surface transition-transform hover:bg-surface-container-low"
          >
            <Icon name="share" className="text-[16px]" />
            Paylaş
          </button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${destination.coordinates.lat},${destination.coordinates.lng}`}
            target="_blank"
            rel="noreferrer"
            className="scale-98 flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary font-label-lg text-label-lg text-primary transition-transform hover:bg-primary-fixed/30"
          >
            <Icon name="directions" className="text-[18px]" />
            Yol Tarifi
          </a>
        </div>
      </div>
    </article>
  );
}

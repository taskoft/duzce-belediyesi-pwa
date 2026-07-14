import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { ExpandableText } from "@/components/common/ExpandableText";
import { BungalowBookingWidget } from "@/components/kentRehberi/BungalowBookingWidget";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";
import type { BungalowFacility, Destination } from "@/types/cityGuide";

interface DestinationDetailModalProps {
  destination: Destination;
  bungalow?: BungalowFacility;
  onClose: () => void;
}

export function DestinationDetailModal({ destination, bungalow, onClose }: DestinationDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { open } = useModal();
  const { show: showToast } = useToast();
  const totalImages = destination.images.length;
  const isAccommodation = destination.category === "Konaklama";

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

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

  const openBooking = () => {
    if (!bungalow) {
      return;
    }
    open(<BungalowBookingWidget bungalow={bungalow} onClose={onClose} />);
  };

  return (
    <div className="w-full text-left">
      <div className="relative -mx-stack-lg -mt-stack-lg mb-4 h-48 overflow-hidden rounded-t-[24px]">
        <img
          src={destination.images[activeImageIndex]}
          alt={`${destination.name} - ${activeImageIndex + 1}`}
          className="h-full w-full object-cover"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-3 top-3 rounded-full bg-ink-base/40 p-1 text-white backdrop-blur-sm"
        >
          <Icon name="close" />
        </button>

        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevImage}
              aria-label="Önceki görsel"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-base/40 p-1 text-white backdrop-blur-sm"
            >
              <Icon name="chevron_left" />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Sonraki görsel"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-base/40 p-1 text-white backdrop-blur-sm"
            >
              <Icon name="chevron_right" />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {destination.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index === activeImageIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mb-2 flex items-start justify-between gap-2">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{destination.name}</h2>
        <div className="flex shrink-0 items-center gap-1 rounded-full bg-surface-container-low px-2 py-1">
          <Icon name="star" filled className="text-[14px] text-amber-400" />
          <span className="font-label-sm text-label-sm text-on-surface">{destination.rating}</span>
        </div>
      </div>
      <div className="mb-4">
        <ExpandableText
          text={destination.description}
          clampLines={4}
          className="font-body-lg text-body-lg text-on-surface-variant"
        />
      </div>

      <div className="mb-4 flex flex-col gap-2 rounded-xl bg-surface-container-low p-3">
        <div className="flex items-center gap-2">
          <Icon name="schedule" filled className="text-[18px] text-sky-500" />
          <span className="font-label-lg text-label-lg text-on-surface">{destination.openingHours}</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="location_on" filled className="text-[18px] text-red-500" />
          <span className="font-body-md text-body-md text-on-surface-variant">{destination.address}</span>
        </div>
        <a href={`tel:${destination.phone}`} className="flex items-center gap-2">
          <Icon name="call" filled className="text-[18px] text-green-600" />
          <span className="font-body-md text-body-md text-primary">{destination.phone}</span>
        </a>
      </div>

      {bungalow && (
        <div className="mb-4 rounded-xl border border-primary/20 bg-primary-fixed/30 p-3">
          <div className="mb-2 flex items-center gap-2">
            <Icon name={isAccommodation ? "hotel" : "cottage"} filled className="text-emerald-600" />
            <span className="font-label-lg text-label-lg text-on-surface">
              {isAccommodation ? "Oda Rezervasyonu" : "Bu bölgede konaklama"}
            </span>
          </div>
          <p className="font-body-md text-body-md mb-3 text-on-surface-variant">
            {bungalow.name} · {bungalow.pricePerNight} TL / gece
          </p>
          <Button variant="primary" fullWidth onClick={openBooking} disabled={!bungalow.availabilityStatus}>
            <Icon name="event_available" className="text-[18px]" />
            {bungalow.availabilityStatus
              ? isAccommodation
                ? "Rezervasyon Yap"
                : "Randevu Al"
              : "Şu An Müsait Değil"}
          </Button>
        </div>
      )}

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
  );
}

import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { Spinner } from "@/components/common/Spinner";
import { useBungalowBooking } from "@/hooks/useBungalowBooking";
import type { BungalowFacility } from "@/types/cityGuide";

interface BungalowBookingWidgetProps {
  bungalow: BungalowFacility;
  onClose: () => void;
}

export function BungalowBookingWidget({ bungalow, onClose }: BungalowBookingWidgetProps) {
  const booking = useBungalowBooking();

  const handleBooking = async () => {
    const succeeded = await booking.bookNow(bungalow);
    if (succeeded) {
      onClose();
    }
  };

  return (
    <div className="w-full text-left">
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{bungalow.name}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{bungalow.address}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between rounded-xl bg-surface-container-low p-3">
        <span className="font-label-lg text-label-lg text-on-surface">Gecelik Fiyat</span>
        <span className="font-headline-md text-headline-md text-primary">{bungalow.pricePerNight} TL</span>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-3">
        <div>
          <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Giriş Tarihi</label>
          <input
            type="date"
            value={booking.checkInDate}
            onChange={(event) => booking.setCheckInDate(event.target.value)}
            className="font-body-md text-body-md h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-2 text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Çıkış Tarihi</label>
          <input
            type="date"
            value={booking.checkOutDate}
            onChange={(event) => booking.setCheckOutDate(event.target.value)}
            className="font-body-md text-body-md h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-2 text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Misafir Sayısı</label>
        <div className="flex items-center justify-between rounded-xl border border-outline-variant bg-background-subtle px-4 py-2">
          <button
            type="button"
            onClick={() => booking.setGuestCount(Math.max(1, booking.guestCount - 1))}
            aria-label="Misafir sayısını azalt"
            className="flex h-8 w-8 items-center justify-center rounded-full text-primary hover:bg-surface-container-low"
          >
            <Icon name="remove" />
          </button>
          <span className="font-label-lg text-label-lg text-on-surface">{booking.guestCount} Kişi</span>
          <button
            type="button"
            onClick={() => booking.setGuestCount(booking.guestCount + 1)}
            aria-label="Misafir sayısını artır"
            className="flex h-8 w-8 items-center justify-center rounded-full text-primary hover:bg-surface-container-low"
          >
            <Icon name="add" />
          </button>
        </div>
      </div>

      <Button variant="primary" fullWidth onClick={handleBooking} disabled={booking.isBooking}>
        {booking.isBooking ? <Spinner className="h-5 w-5" /> : <Icon name="bolt" />}
        {booking.isBooking ? "Rezervasyon Yapılıyor..." : "Anında Rezervasyon Yap"}
      </Button>
    </div>
  );
}

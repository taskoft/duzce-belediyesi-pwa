import { useState, type ReactNode } from "react";
import { Icon } from "@/components/common/Icon";

interface CardImageCarouselProps {
  images: string[];
  alt: string;
  heightClassName?: string;
  children?: ReactNode;
}

export function CardImageCarousel({ images, alt, heightClassName = "h-48", children }: CardImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const showPrevImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative w-full overflow-hidden ${heightClassName}`}>
      <img src={images[activeIndex]} alt={alt} className="h-full w-full object-cover" loading="lazy" />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={showPrevImage}
            aria-label="Önceki görsel"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink-base/40 text-white backdrop-blur-sm"
          >
            <Icon name="chevron_left" className="text-[20px]" />
          </button>
          <button
            type="button"
            onClick={showNextImage}
            aria-label="Sonraki görsel"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink-base/40 text-white backdrop-blur-sm"
          >
            <Icon name="chevron_right" className="text-[20px]" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, index) => (
              <div
                key={image}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {children}
    </div>
  );
}

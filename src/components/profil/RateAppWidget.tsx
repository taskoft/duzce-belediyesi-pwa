import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { useToast } from "@/hooks/useToast";

const STAR_COUNT = 5;

export function RateAppWidget() {
  const { show: showToast } = useToast();
  const [rating, setRating] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      showToast("Lütfen puan vermek için bir yıldız seçin.", "error");
      return;
    }
    setHasSubmitted(true);
    showToast("Değerlendirmeniz için teşekkür ederiz.", "success");
  };

  return (
    <section className="flex flex-col items-center gap-3 rounded-2xl bg-surface p-4 text-center shadow-sm">
      <h3 className="font-label-lg text-label-lg text-on-surface">Uygulamayı Değerlendirin</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Deneyiminizi bizimle paylaşın</p>
      <div className="flex gap-1">
        {Array.from({ length: STAR_COUNT }).map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={starValue}
              type="button"
              onClick={() => setRating(starValue)}
              disabled={hasSubmitted}
              aria-label={`${starValue} yıldız`}
              className="disabled:cursor-not-allowed"
            >
              <Icon
                name="star"
                filled={starValue <= rating}
                className={`text-[32px] ${starValue <= rating ? "text-tertiary-container" : "text-outline-variant"}`}
              />
            </button>
          );
        })}
      </div>
      {hasSubmitted ? (
        <p className="font-label-sm text-label-sm text-primary">Teşekkür ederiz!</p>
      ) : (
        <button type="button" onClick={handleSubmit} className="font-label-lg text-label-lg mt-1 text-primary">
          Gönder
        </button>
      )}
    </section>
  );
}

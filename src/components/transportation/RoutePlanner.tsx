import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { IconBadge } from "@/components/common/IconBadge";
import { useToast } from "@/hooks/useToast";

interface RoutePlannerProps {
  defaultOrigin: string;
  destinationSuggestions: string[];
}

export function RoutePlanner({ defaultOrigin, destinationSuggestions }: RoutePlannerProps) {
  const { show: showToast } = useToast();
  const [origin, setOrigin] = useState(defaultOrigin);
  const [destination, setDestination] = useState("");

  const handleSwap = () => {
    setOrigin(destination || defaultOrigin);
    setDestination(origin);
  };

  const handleCreateRoute = () => {
    if (!destination.trim()) {
      showToast("Lütfen varış noktası girin.", "error");
      return;
    }
    showToast(`${origin} → ${destination} rotası oluşturuldu.`, "success");
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface p-4 shadow-sm">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-primary-container/5" />
      <div className="mb-4 flex items-center gap-2">
        <IconBadge name="directions_bus" tone="amber" size="sm" />
        <h3 className="font-label-lg text-label-lg text-on-surface">Nasıl Giderim?</h3>
      </div>

      <div className="relative space-y-3">
        <div className="absolute bottom-6 left-[15px] top-6 w-0.5 bg-outline-variant/50" />

        <div className="relative flex items-center gap-0">
          <div className="z-10 flex w-8 justify-center">
            <div className="h-3 w-3 rounded-full border-2 border-primary bg-surface" />
          </div>
          <input
            type="text"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            placeholder="Mevcut Konum"
            className="font-body-md text-body-md h-12 flex-1 rounded-xl border border-outline-variant/50 bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="relative flex items-center gap-0">
          <div className="z-10 flex w-8 justify-center">
            <div className="h-3 w-3 rounded-full bg-secondary" />
          </div>
          <input
            type="text"
            list="destination-suggestions"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            placeholder="Varış Noktası Ara..."
            className="font-body-md text-body-md h-12 flex-1 rounded-xl border border-outline-variant/50 bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <datalist id="destination-suggestions">
            {destinationSuggestions.map((suggestion) => (
              <option key={suggestion} value={suggestion} />
            ))}
          </datalist>
        </div>

        <button
          type="button"
          onClick={handleSwap}
          aria-label="Konumları değiştir"
          className="absolute left-6 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant/50 bg-surface text-outline shadow-sm transition-colors hover:text-primary active:scale-90"
        >
          <Icon name="swap_vert" className="text-[16px]" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleCreateRoute}
        className="mt-4 flex h-component-height-md w-full items-center justify-center gap-2 rounded-xl bg-primary font-label-lg text-label-lg text-on-primary shadow-sm transition-transform active:scale-[0.98]"
      >
        Rota Oluştur
      </button>
    </section>
  );
}

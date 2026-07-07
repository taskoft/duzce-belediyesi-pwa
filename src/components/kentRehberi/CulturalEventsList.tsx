import { Icon } from "@/components/common/Icon";
import type { CulturalEvent } from "@/types/cityGuide";

interface CulturalEventsListProps {
  events: CulturalEvent[];
}

export function CulturalEventsList({ events }: CulturalEventsListProps) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface">Kültür ve Sanat Etkinlikleri</h3>
      <div className="flex flex-col gap-stack-sm">
        {events.map((event) => (
          <div key={event.id} className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-primary">
              <Icon name="celebration" filled />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-label-sm text-label-sm rounded-full bg-surface-container-high px-2 py-0.5 uppercase tracking-wider text-on-surface-variant">
                {event.category}
              </span>
              <h4 className="font-label-lg text-label-lg mt-1 text-on-surface">{event.title}</h4>
              <p className="font-body-md text-body-md mt-0.5 text-on-surface-variant">{event.location}</p>
              <p className="font-label-sm text-label-sm mt-1 text-outline">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

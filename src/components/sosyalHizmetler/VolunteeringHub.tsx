import { Icon } from "@/components/common/Icon";
import type { VolunteerCategory, VolunteerOpportunity } from "@/types/socialServices";

interface VolunteeringHubProps {
  categories: VolunteerCategory[];
  opportunities: VolunteerOpportunity[];
  appliedIds: Set<string>;
  onApply: (opportunity: VolunteerOpportunity) => void;
}

export function VolunteeringHub({ categories, opportunities, appliedIds, onApply }: VolunteeringHubProps) {
  const categoryLookup = new Map(categories.map((category) => [category.id, category]));

  return (
    <div className="flex flex-col gap-stack-sm">
      {opportunities.map((opportunity) => {
        const category = categoryLookup.get(opportunity.category);
        const isApplied = appliedIds.has(opportunity.id);

        return (
          <div key={opportunity.id} className="flex flex-col gap-3 rounded-2xl bg-surface p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-primary">
                <Icon name={category?.icon ?? "volunteer_activism"} filled />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-label-lg text-label-lg text-on-surface">{opportunity.title}</h3>
                <p className="font-body-md text-body-md mt-1 text-on-surface-variant">{opportunity.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {opportunity.spotsAvailable} kontenjan
              </span>
              <button
                type="button"
                disabled={isApplied}
                onClick={() => onApply(opportunity)}
                className={`scale-98 rounded-lg px-4 py-2 font-label-sm text-label-sm transition-all ${
                  isApplied
                    ? "bg-surface-container-high text-on-surface-variant"
                    : "bg-primary text-on-primary hover:-translate-y-0.5"
                }`}
              >
                {isApplied ? "Başvuruldu" : "Başvur"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

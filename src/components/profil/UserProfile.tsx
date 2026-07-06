import { Icon } from "@/components/common/Icon";
import type { CitizenProfile, SavedCard, WorkflowHistoryEntry } from "@/types/profile";

interface UserProfileProps {
  citizen: CitizenProfile;
  savedCards: SavedCard[];
  workflowHistory: WorkflowHistoryEntry[];
}

export function UserProfile({ citizen, savedCards, workflowHistory }: UserProfileProps) {
  return (
    <div className="flex flex-col gap-stack-lg">
      <div
        className="relative overflow-hidden rounded-2xl p-6 text-on-primary shadow-md"
        style={{ background: "linear-gradient(135deg, #0F4C81 0%, #00355f 100%)" }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-[28px] font-bold">
            {citizen.fullName.charAt(0)}
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-on-primary">{citizen.fullName}</h2>
            <p className="font-body-md text-body-md text-on-primary/80">{citizen.neighborhood}</p>
            <p className="font-label-sm text-label-sm text-on-primary/70">T.C. {citizen.maskedTcId}</p>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-stack-sm">
        <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
          Kayıtlı Kartlarım
        </h3>
        {savedCards.map((card) => (
          <div key={card.id} className="flex items-center gap-4 rounded-2xl bg-surface p-4 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-primary">
              <Icon name="credit_card" filled />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-label-lg text-label-lg text-on-surface">{card.label}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{card.maskedNumber}</p>
            </div>
            {card.balance !== null && (
              <span className="font-label-lg text-label-lg text-primary">{card.balance.toFixed(2)} TL</span>
            )}
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
          Geçmiş İşlemler
        </h3>
        {workflowHistory.map((entry) => (
          <div key={entry.id} className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-sm">
            <Icon name="history" className="mt-1 text-on-surface-variant" />
            <div className="min-w-0 flex-1">
              <h4 className="font-label-lg text-label-lg text-on-surface">{entry.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{entry.detail}</p>
              <p className="font-label-sm text-label-sm mt-1 text-outline">{entry.date}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

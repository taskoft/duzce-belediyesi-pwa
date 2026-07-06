import type { DeceasedNotice } from "@/types/belediye";

interface CenazeListProps {
  notices: DeceasedNotice[];
}

export function CenazeList({ notices }: CenazeListProps) {
  return (
    <div className="flex flex-col gap-stack-sm">
      <div className="flex items-end justify-between">
        <h3 className="font-headline-md text-headline-md text-on-surface">Vefat Edenler</h3>
        <span className="font-label-sm text-label-sm text-primary">Tümü</span>
      </div>
      <div className="divide-y divide-outline-variant/20 rounded-2xl border border-outline-variant/20 bg-surface shadow-sm">
        {notices.map((notice) => (
          <div key={notice.id} className="flex items-center gap-3 p-gutter">
            <div className="h-2 w-2 shrink-0 rounded-full bg-outline" />
            <div className="flex-1">
              <p className="font-label-lg text-label-lg text-on-surface">{notice.name}</p>
              <p className="font-body-md text-body-md mt-0.5 text-[13px] text-outline">{notice.location}</p>
            </div>
            <span className="font-label-sm text-label-sm text-outline">{notice.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

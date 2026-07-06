import { Icon } from "@/components/common/Icon";
import type { TenderNotice } from "@/types/belediye";

interface IhaleTableProps {
  notices: TenderNotice[];
}

export function IhaleTable({ notices }: IhaleTableProps) {
  return (
    <div className="flex flex-col gap-stack-sm">
      <div className="flex items-end justify-between">
        <h3 className="font-headline-md text-headline-md text-on-surface">İhale İlanları</h3>
        <span className="font-label-sm text-label-sm text-primary">Tümü</span>
      </div>
      <div className="flex flex-col gap-stack-sm">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="scale-98 flex items-start gap-4 rounded-2xl border border-outline-variant/20 bg-surface p-gutter shadow-sm transition-transform"
          >
            <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-container/10">
              <Icon name="gavel" className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-start justify-between gap-2">
                <span className="font-label-sm text-[10px] rounded-full bg-surface-container-high px-2 py-0.5 uppercase tracking-wider text-on-surface-variant">
                  {notice.category}
                </span>
                {notice.urgencyLabel && (
                  <span className="font-label-sm text-label-sm font-medium text-error">{notice.urgencyLabel}</span>
                )}
              </div>
              <h4 className="font-label-lg text-label-lg mb-2 leading-tight text-on-surface">{notice.title}</h4>
              <div className="flex items-center gap-1 text-outline">
                <Icon name="calendar_today" className="text-[14px]" />
                <span className="font-body-md text-[12px]">{notice.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

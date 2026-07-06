import { Icon } from "@/components/common/Icon";
import { useToast } from "@/hooks/useToast";
import type { GazetteIssue } from "@/types/belediye";

interface EGazeteViewerProps {
  issues: GazetteIssue[];
}

export function EGazeteViewer({ issues }: EGazeteViewerProps) {
  const { show: showToast } = useToast();

  const handleDownload = (issue: GazetteIssue) => {
    showToast(`"${issue.title}" indiriliyor.`, "success");
  };

  return (
    <div className="flex flex-col gap-stack-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface">E-Gazete</h3>
      {issues.map((issue) => (
        <div
          key={issue.id}
          className="flex items-center justify-between rounded-2xl border border-outline-variant/20 bg-surface p-gutter shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="relative flex h-16 w-14 items-center justify-center overflow-hidden rounded border border-outline-variant/30 bg-surface-container-highest">
              <div className="absolute top-0 h-1 w-full bg-primary" />
              <Icon name="menu_book" className="text-outline" />
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">{issue.title}</p>
              <p className="font-body-md text-body-md mt-0.5 text-[13px] text-outline">{issue.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleDownload(issue)}
            aria-label="İndir"
            className="scale-98 flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/10 text-primary transition-transform"
          >
            <Icon name="download" filled />
          </button>
        </div>
      ))}
    </div>
  );
}

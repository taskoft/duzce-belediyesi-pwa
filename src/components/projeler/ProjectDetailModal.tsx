import { Icon } from "@/components/common/Icon";
import type { MunicipalProject } from "@/types/projects";

interface ProjectDetailModalProps {
  project: MunicipalProject;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <div className="w-full text-left">
      <div className="mb-4 flex items-start justify-between gap-2">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{project.title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
        >
          <Icon name="close" />
        </button>
      </div>
      <span className="font-label-sm text-label-sm mb-4 inline-block rounded-full bg-primary-container px-3 py-1 text-on-primary-container">
        {project.status}
      </span>
      <p className="font-body-lg text-body-lg mb-4 text-on-surface-variant">{project.summary}</p>
      <div className="flex items-center gap-2 rounded-xl bg-surface-container-low p-3">
        <Icon name="insights" filled className="text-primary" />
        <span className="font-label-lg text-label-lg text-on-surface">{project.impactMetric}</span>
      </div>
    </div>
  );
}

import type { MunicipalProject } from "@/types/projects";

interface ProjectCardProps {
  project: MunicipalProject;
  onSelect: (project: MunicipalProject) => void;
}

const STATUS_CLASSES: Record<MunicipalProject["status"], string> = {
  "Devam Ediyor": "bg-primary-container text-on-primary-container",
  Tamamlandı: "bg-surface-container-high text-on-surface-variant",
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="scale-98 flex w-full flex-col gap-2 rounded-2xl bg-surface p-4 text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-headline-md text-headline-md text-on-surface">{project.title}</h3>
        <span
          className={`font-label-sm text-label-sm shrink-0 rounded-full px-2 py-1 ${STATUS_CLASSES[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="font-body-md text-body-md line-clamp-2 text-on-surface-variant">{project.summary}</p>
      <p className="font-label-sm text-label-sm text-primary">{project.impactMetric}</p>
    </button>
  );
}

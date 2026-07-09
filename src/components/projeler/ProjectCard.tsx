import { Icon } from "@/components/common/Icon";
import { CardImageCarousel } from "@/components/common/CardImageCarousel";
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
    <div className="overflow-hidden rounded-2xl bg-surface shadow-sm transition-shadow hover:shadow-md">
      <CardImageCarousel images={project.images} alt={project.title} heightClassName="h-56">
        {project.featured && (
          <span className="font-label-sm text-label-sm absolute left-3 top-3 flex items-center gap-1 rounded-full bg-tertiary-container px-2 py-1 text-on-tertiary-container shadow-sm">
            <Icon name="star" filled className="text-[14px]" />
            Öne Çıkan
          </span>
        )}
        <span
          className={`font-label-sm text-label-sm absolute right-3 top-3 rounded-full px-2 py-1 shadow-sm ${STATUS_CLASSES[project.status]}`}
        >
          {project.status}
        </span>
      </CardImageCarousel>
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="scale-98 flex w-full flex-col gap-2 p-4 text-left transition-transform"
      >
        <h3 className="font-headline-md text-headline-md text-on-surface">{project.title}</h3>
        <p className="font-body-md text-body-md line-clamp-2 text-on-surface-variant">{project.summary}</p>
        <p className="font-label-sm text-label-sm text-primary">{project.impactMetric}</p>
      </button>
    </div>
  );
}

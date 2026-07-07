import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import type { MunicipalProject } from "@/types/projects";

interface ProjectDetailModalProps {
  project: MunicipalProject;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const totalImages = project.images.length;

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full text-left">
      <div className="relative -mx-stack-lg -mt-stack-lg mb-4 h-48 overflow-hidden rounded-t-[24px]">
        <img
          src={project.images[activeImageIndex]}
          alt={`${project.title} - ${activeImageIndex + 1}`}
          className="h-full w-full object-cover"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-3 top-3 rounded-full bg-ink-base/40 p-1 text-white backdrop-blur-sm"
        >
          <Icon name="close" />
        </button>

        <button
          type="button"
          onClick={showPrevImage}
          aria-label="Önceki görsel"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-base/40 p-1 text-white backdrop-blur-sm"
        >
          <Icon name="chevron_left" />
        </button>
        <button
          type="button"
          onClick={showNextImage}
          aria-label="Sonraki görsel"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink-base/40 p-1 text-white backdrop-blur-sm"
        >
          <Icon name="chevron_right" />
        </button>

        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === activeImageIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-2 text-on-surface">{project.title}</h2>
      <span className="font-label-sm text-label-sm mb-4 inline-block rounded-full bg-primary-container px-3 py-1 text-on-primary-container">
        {project.status}
      </span>
      <p className="font-body-lg text-body-lg mb-4 text-on-surface-variant">{project.description}</p>
      <div className="flex items-center gap-2 rounded-xl bg-surface-container-low p-3">
        <Icon name="insights" filled className="text-primary" />
        <span className="font-label-lg text-label-lg text-on-surface">{project.impactMetric}</span>
      </div>
    </div>
  );
}

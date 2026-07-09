import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { ProjectCard } from "@/components/projeler/ProjectCard";
import { ProjectDetailModal } from "@/components/projeler/ProjectDetailModal";
import { useModal } from "@/hooks/useModal";
import { useAsyncData } from "@/hooks/useAsyncData";
import projectsDataFallback from "@/data/projectsData.json";
import type { MunicipalProject } from "@/types/projects";

export function Projeler() {
  const { open, close } = useModal();
  const { data: projects, isLoading } = useAsyncData("/api/projects", projectsDataFallback as MunicipalProject[]);

  const handleSelect = (project: MunicipalProject) => {
    open(<ProjectDetailModal project={project} onClose={close} />);
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
    if (a.status === b.status) return 0;
    return a.status === "Tamamlandı" ? -1 : 1;
  });

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto pb-[76px] pt-[56px]">
        <div className="px-container-margin py-stack-md">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-1 text-on-surface">Projelerimiz</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Devam eden ve tamamlanan çalışmalar</p>
        </div>

        {isLoading ? (
          <PageLoader />
        ) : (
          <div className="flex flex-col gap-stack-md px-container-margin pb-stack-lg">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={handleSelect} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </>
  );
}

export type ProjectStatus = "Devam Ediyor" | "Tamamlandı";

export interface MunicipalProject {
  id: string;
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  impactMetric: string;
  coverImage: string;
  images: string[];
  featured?: boolean;
}

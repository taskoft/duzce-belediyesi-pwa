export type ProjectStatus = "Devam Ediyor" | "Tamamlandı";

export interface MunicipalProject {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  impactMetric: string;
}

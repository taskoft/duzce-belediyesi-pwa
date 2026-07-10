import type { IconTone } from "@/components/common/IconBadge";

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  tone: IconTone;
}

export type NewsCategory = "Haberler" | "Duyuru";

export interface NewsItem {
  id: string;
  category: NewsCategory;
  title: string;
  summary: string;
  imageUrl?: string;
  date: string;
}

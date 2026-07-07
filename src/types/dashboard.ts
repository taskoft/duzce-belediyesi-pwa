export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
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

import type { MenuItem } from "@/types/dashboard";

export const NAVIGATION_LINKS: MenuItem[] = [
  { id: "home", label: "Ana Sayfa", icon: "home", path: "/", tone: "sky" },
  { id: "belediye", label: "Belediye", icon: "account_balance", path: "/belediye", tone: "blue" },
  { id: "e-belediye", label: "E-Belediye", icon: "laptop_mac", path: "/e-belediye", tone: "indigo" },
  { id: "kent-rehberi", label: "Kent Rehberi", icon: "map", path: "/kent-rehberi", tone: "emerald" },
  { id: "projeler", label: "Projeler", icon: "architecture", path: "/projeler", tone: "violet" },
  { id: "ulasim", label: "Ulaşım", icon: "directions_bus", path: "/ulasim", tone: "amber" },
  {
    id: "sosyal-hizmetler",
    label: "Sosyal Hizmetler",
    icon: "volunteer_activism",
    path: "/sosyal-hizmetler",
    tone: "rose",
  },
  { id: "beyaz-masa", label: "Beyaz Masa", icon: "edit_document", path: "/beyaz-masa", tone: "cyan" },
  { id: "duzcespor", label: "Düzcespor", icon: "sports_soccer", path: "/duzcespor", tone: "green" },
  { id: "eczane", label: "Eczane", icon: "medical_services", path: "/eczane", tone: "teal" },
  { id: "favorilerim", label: "Favorilerim", icon: "favorite", path: "/favorilerim", tone: "pink" },
  { id: "acil", label: "Acil Durum", icon: "emergency", path: "/acil", tone: "red" },
  { id: "profil", label: "Profil", icon: "person", path: "/profil", tone: "slate" },
];

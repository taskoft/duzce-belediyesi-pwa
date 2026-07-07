import type { MenuItem } from "@/types/dashboard";

export const NAVIGATION_LINKS: MenuItem[] = [
  { id: "home", label: "Ana Sayfa", icon: "home", path: "/" },
  { id: "belediye", label: "Belediye", icon: "account_balance", path: "/belediye" },
  { id: "e-belediye", label: "E-Belediye", icon: "laptop_mac", path: "/e-belediye" },
  { id: "kent-rehberi", label: "Kent Rehberi", icon: "map", path: "/kent-rehberi" },
  { id: "projeler", label: "Projeler", icon: "architecture", path: "/projeler" },
  { id: "ulasim", label: "Ulaşım", icon: "directions_bus", path: "/ulasim" },
  { id: "sosyal-hizmetler", label: "Sosyal Hizmetler", icon: "volunteer_activism", path: "/sosyal-hizmetler" },
  { id: "beyaz-masa", label: "Beyaz Masa", icon: "edit_document", path: "/beyaz-masa" },
  { id: "duzcespor", label: "Düzcespor", icon: "sports_soccer", path: "/duzcespor" },
  { id: "eczane", label: "Eczane", icon: "medical_services", path: "/eczane" },
  { id: "favorilerim", label: "Favorilerim", icon: "favorite", path: "/favorilerim" },
  { id: "acil", label: "Acil Durum", icon: "emergency", path: "/acil" },
  { id: "profil", label: "Profil", icon: "person", path: "/profil" },
];

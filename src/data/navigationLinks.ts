import type { MenuItem } from "@/types/dashboard";
import belediyeIcon from "../../assets/images/duzce-bel-logo.png";
import eBelediyeIcon from "../../assets/icons/e-belediye.png";
import kentRehberiIcon from "../../assets/icons/kent-rehberi.png";
import projelerIcon from "../../assets/icons/projeler.png";
import ulasimIcon from "../../assets/icons/ulasim.png";
import sosyalHizmetlerIcon from "../../assets/icons/sosyal-hizmetler.png";
import beyazMasaIcon from "../../assets/icons/beyaz-masa.png";
import duzcesporIcon from "../../assets/icons/duzce-spor.png";
import eczaneIcon from "../../assets/icons/eczane.png";
import favoriIcon from "../../assets/icons/favori.png";
import acilDurumIcon from "../../assets/icons/acil-durum.png";
import profilIcon from "../../assets/icons/profil.png";

export const NAVIGATION_LINKS: MenuItem[] = [
  { id: "home", label: "Ana Sayfa", icon: "home", path: "/", tone: "sky" },
  {
    id: "belediye",
    label: "Belediye",
    icon: "account_balance",
    path: "/belediye",
    tone: "blue",
    image: belediyeIcon,
    imageZoom: 1.5,
    imagePosition: "50% 20%",
  },
  {
    id: "e-belediye",
    label: "E-Belediye",
    icon: "laptop_mac",
    path: "/e-belediye",
    tone: "indigo",
    image: eBelediyeIcon,
  },
  {
    id: "kent-rehberi",
    label: "Kent Rehberi",
    icon: "map",
    path: "/kent-rehberi",
    tone: "emerald",
    image: kentRehberiIcon,
  },
  { id: "projeler", label: "Projeler", icon: "architecture", path: "/projeler", tone: "violet", image: projelerIcon },
  {
    id: "ulasim",
    label: "Ulaşım",
    icon: "directions_bus",
    path: "/ulasim",
    tone: "amber",
    image: ulasimIcon,
    imageZoom: 2.5,
  },
  {
    id: "sosyal-hizmetler",
    label: "Sosyal Hizmetler",
    icon: "volunteer_activism",
    path: "/sosyal-hizmetler",
    tone: "rose",
    image: sosyalHizmetlerIcon,
    imageZoom: 1.15,
  },
  {
    id: "beyaz-masa",
    label: "Beyaz Masa",
    icon: "edit_document",
    path: "/beyaz-masa",
    tone: "cyan",
    image: beyazMasaIcon,
  },
  {
    id: "duzcespor",
    label: "Düzcespor",
    icon: "sports_soccer",
    path: "/duzcespor",
    tone: "green",
    image: duzcesporIcon,
  },
  { id: "eczane", label: "Eczane", icon: "medical_services", path: "/eczane", tone: "teal", image: eczaneIcon },
  {
    id: "favorilerim",
    label: "Favorilerim",
    icon: "favorite",
    path: "/favorilerim",
    tone: "pink",
    image: favoriIcon,
  },
  { id: "acil", label: "Acil Durum", icon: "emergency", path: "/acil", tone: "red", image: acilDurumIcon },
  { id: "profil", label: "Profil", icon: "person", path: "/profil", tone: "slate", image: profilIcon },
];

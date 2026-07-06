import { Link } from "react-router-dom";
import { Icon } from "@/components/common/Icon";

export function ProfileLink() {
  return (
    <Link
      to="/profil"
      aria-label="Profilim"
      className="scale-98 -mr-2 flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low"
    >
      <Icon name="account_circle" />
    </Link>
  );
}

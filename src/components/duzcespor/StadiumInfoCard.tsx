import { Icon } from "@/components/common/Icon";
import { IconBadge } from "@/components/common/IconBadge";
import type { StadiumInfo } from "@/types/duzcespor";

interface StadiumInfoCardProps {
  stadium: StadiumInfo;
}

export function StadiumInfoCard({ stadium }: StadiumInfoCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-surface-container-low bg-background-subtle p-4">
      <div className="flex items-center gap-2">
        <IconBadge name="stadium" tone="red" size="sm" />
        <span className="font-label-lg text-label-lg font-semibold text-on-surface">{stadium.name}</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">{stadium.address}</p>
      <div className="flex items-center gap-2 text-on-surface-variant">
        <Icon name="event_seat" className="text-[16px]" />
        <span className="font-label-sm text-label-sm">{stadium.capacity}</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">{stadium.ticketInfo}</p>
      <a
        href={`tel:${stadium.phone}`}
        className="scale-98 mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#DC2626] py-2 font-label-sm text-label-sm text-white transition-transform"
      >
        <Icon name="call" className="text-[16px]" />
        Stadyum İletişim
      </a>
    </div>
  );
}

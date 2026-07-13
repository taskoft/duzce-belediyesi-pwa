import { IconBadge } from "@/components/common/IconBadge";
import type { MenuItem } from "@/types/dashboard";

type ModuleIconSize = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<ModuleIconSize, string> = {
  sm: "h-8 w-8 rounded-lg",
  md: "h-10 w-10 rounded-xl",
  lg: "h-12 w-12 rounded-xl",
};

interface ModuleIconProps {
  item: Pick<MenuItem, "icon" | "tone" | "image" | "imageFit" | "imageZoom" | "imagePosition" | "label">;
  size?: ModuleIconSize;
  className?: string;
}

export function ModuleIcon({ item, size = "md", className = "" }: ModuleIconProps) {
  if (!item.image) {
    return <IconBadge name={item.icon} tone={item.tone} size={size} className={className} />;
  }

  const fit = item.imageFit ?? "cover";
  const position = item.imagePosition ?? "center";

  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-surface shadow-sm ring-1 ring-outline-variant/20 ${SIZE_CLASSES[size]} ${className}`.trim()}
    >
      <img
        src={item.image}
        alt=""
        aria-hidden="true"
        className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
        style={{
          objectPosition: position,
          transform: item.imageZoom ? `scale(${item.imageZoom})` : undefined,
          transformOrigin: position,
        }}
      />
    </span>
  );
}

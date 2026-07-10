import { Icon } from "@/components/common/Icon";

export type IconTone =
  | "red"
  | "orange"
  | "amber"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate";

export const ICON_TONE_CLASSES: Record<IconTone, string> = {
  red: "bg-gradient-to-br from-red-400 via-red-500 to-red-600 shadow-red-500/40",
  orange: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-orange-500/40",
  amber: "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-amber-500/40",
  lime: "bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 shadow-lime-500/40",
  green: "bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-green-500/40",
  emerald: "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-emerald-500/40",
  teal: "bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 shadow-teal-500/40",
  cyan: "bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 shadow-cyan-500/40",
  sky: "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 shadow-sky-500/40",
  blue: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-blue-500/40",
  indigo: "bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 shadow-indigo-500/40",
  violet: "bg-gradient-to-br from-violet-400 via-violet-500 to-violet-600 shadow-violet-500/40",
  purple: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 shadow-purple-500/40",
  fuchsia: "bg-gradient-to-br from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 shadow-fuchsia-500/40",
  pink: "bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 shadow-pink-500/40",
  rose: "bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 shadow-rose-500/40",
  slate: "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 shadow-slate-500/40",
};

type IconBadgeSize = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<IconBadgeSize, { badge: string; icon: string }> = {
  sm: { badge: "h-8 w-8 rounded-lg", icon: "text-[18px]" },
  md: { badge: "h-10 w-10 rounded-xl", icon: "text-[22px]" },
  lg: { badge: "h-12 w-12 rounded-xl", icon: "text-[26px]" },
};

interface IconBadgeProps {
  name: string;
  tone: IconTone;
  size?: IconBadgeSize;
  className?: string;
}

export function IconBadge({ name, tone, size = "md", className = "" }: IconBadgeProps) {
  const sizeClasses = SIZE_CLASSES[size];
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden text-white shadow-md ${ICON_TONE_CLASSES[tone]} ${sizeClasses.badge} ${className}`.trim()}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/30 via-white/5 to-transparent"
      />
      <Icon name={name} filled className={`relative ${sizeClasses.icon}`} />
    </span>
  );
}

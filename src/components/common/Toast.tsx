import { useToast } from "@/hooks/useToast";
import { Icon } from "@/components/common/Icon";
import type { ToastStatus } from "@/context/UIContext";

const STATUS_CLASSES: Record<ToastStatus, string> = {
  success: "bg-primary-container text-on-primary-container",
  error: "bg-error-container text-on-error-container border-l-4 border-error-vibrant",
  info: "bg-surface-container-high text-on-surface",
};

const STATUS_ICONS: Record<ToastStatus, string> = {
  success: "check_circle",
  error: "warning",
  info: "info",
};

export function Toast() {
  const { isOpen, message, status } = useToast();

  return (
    <div
      role="status"
      aria-live="polite"
      className={`absolute inset-x-container-margin bottom-[92px] z-50 flex items-center gap-3 rounded-xl p-stack-md shadow-lg transition-all duration-300 ease-in-out ${
        STATUS_CLASSES[status]
      } ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <Icon name={STATUS_ICONS[status]} filled className="shrink-0" />
      <p className="font-label-lg text-label-lg">{message}</p>
    </div>
  );
}

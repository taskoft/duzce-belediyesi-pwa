import { useUIContext } from "@/hooks/useUIContext";
import type { ToastStatus } from "@/context/UIContext";

export function useToast() {
  const { toast, showToast, hideToast } = useUIContext();

  return {
    isOpen: toast.isOpen,
    message: toast.message,
    status: toast.status,
    show: (message: string, status?: ToastStatus) => showToast(message, status),
    hide: hideToast,
  };
}

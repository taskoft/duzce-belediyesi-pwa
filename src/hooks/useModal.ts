import type { ReactNode } from "react";
import { useUIContext } from "@/hooks/useUIContext";

export function useModal() {
  const { modal, showModal, hideModal } = useUIContext();

  return {
    isOpen: modal.isOpen,
    content: modal.content,
    open: (content: ReactNode) => showModal(content),
    close: hideModal,
  };
}

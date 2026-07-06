import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";

export type ToastStatus = "success" | "error" | "info";

interface ToastState {
  isOpen: boolean;
  message: string;
  status: ToastStatus;
}

interface ModalState {
  isOpen: boolean;
  content: ReactNode;
}

interface SidebarState {
  isOpen: boolean;
}

interface UIContextValue {
  toast: ToastState;
  showToast: (message: string, status?: ToastStatus) => void;
  hideToast: () => void;
  modal: ModalState;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
  sidebar: SidebarState;
  showSidebar: () => void;
  hideSidebar: () => void;
  toggleSidebar: () => void;
}

const TOAST_AUTO_HIDE_MS = 3200;

const initialToastState: ToastState = {
  isOpen: false,
  message: "",
  status: "info",
};

const initialModalState: ModalState = {
  isOpen: false,
  content: null,
};

const initialSidebarState: SidebarState = {
  isOpen: false,
};

export const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>(initialToastState);
  const [modal, setModal] = useState<ModalState>(initialModalState);
  const [sidebar, setSidebar] = useState<SidebarState>(initialSidebarState);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const showToast = useCallback(
    (message: string, status: ToastStatus = "info") => {
      setToast({ isOpen: true, message, status });
      window.setTimeout(hideToast, TOAST_AUTO_HIDE_MS);
    },
    [hideToast],
  );

  const showModal = useCallback((content: ReactNode) => {
    setModal({ isOpen: true, content });
  }, []);

  const hideModal = useCallback(() => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const showSidebar = useCallback(() => {
    setSidebar({ isOpen: true });
  }, []);

  const hideSidebar = useCallback(() => {
    setSidebar({ isOpen: false });
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebar((prev) => ({ isOpen: !prev.isOpen }));
  }, []);

  const value = useMemo<UIContextValue>(
    () => ({
      toast,
      showToast,
      hideToast,
      modal,
      showModal,
      hideModal,
      sidebar,
      showSidebar,
      hideSidebar,
      toggleSidebar,
    }),
    [toast, showToast, hideToast, modal, showModal, hideModal, sidebar, showSidebar, hideSidebar, toggleSidebar],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

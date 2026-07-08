import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

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

interface OnboardingState {
  isVisible: boolean;
  currentStep: number;
}

const TEXT_SCALE_STORAGE_KEY = "duzce-pwa:large-text";
const ONBOARDING_TOTAL_STEPS = 3;

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
  isLargeText: boolean;
  toggleTextScale: () => void;
  onboarding: OnboardingState;
  onboardingTotalSteps: number;
  goToNextOnboardingStep: () => void;
  skipOnboarding: () => void;
  restartOnboarding: () => void;
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

const initialOnboardingState: OnboardingState = {
  isVisible: true,
  currentStep: 0,
};

export const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>(initialToastState);
  const [modal, setModal] = useState<ModalState>(initialModalState);
  const [sidebar, setSidebar] = useState<SidebarState>(initialSidebarState);
  const [isLargeText, setIsLargeText] = useState<boolean>(
    () => window.localStorage.getItem(TEXT_SCALE_STORAGE_KEY) === "true",
  );

  useEffect(() => {
    window.localStorage.setItem(TEXT_SCALE_STORAGE_KEY, String(isLargeText));
  }, [isLargeText]);

  const toggleTextScale = useCallback(() => {
    setIsLargeText((prev) => !prev);
  }, []);

  const [onboarding, setOnboarding] = useState<OnboardingState>(initialOnboardingState);

  const skipOnboarding = useCallback(() => {
    setOnboarding((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const goToNextOnboardingStep = useCallback(() => {
    setOnboarding((prev) =>
      prev.currentStep >= ONBOARDING_TOTAL_STEPS - 1
        ? { ...prev, isVisible: false }
        : { ...prev, currentStep: prev.currentStep + 1 },
    );
  }, []);

  const restartOnboarding = useCallback(() => {
    setOnboarding({ isVisible: true, currentStep: 0 });
  }, []);

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
      isLargeText,
      toggleTextScale,
      onboarding,
      onboardingTotalSteps: ONBOARDING_TOTAL_STEPS,
      goToNextOnboardingStep,
      skipOnboarding,
      restartOnboarding,
    }),
    [
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
      isLargeText,
      toggleTextScale,
      onboarding,
      goToNextOnboardingStep,
      skipOnboarding,
      restartOnboarding,
    ],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

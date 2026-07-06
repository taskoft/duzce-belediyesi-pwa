import { useUIContext } from "@/hooks/useUIContext";

export function useSidebar() {
  const { sidebar, showSidebar, hideSidebar, toggleSidebar } = useUIContext();

  return {
    isOpen: sidebar.isOpen,
    open: showSidebar,
    close: hideSidebar,
    toggle: toggleSidebar,
  };
}

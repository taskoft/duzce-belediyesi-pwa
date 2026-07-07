import { useUIContext } from "@/hooks/useUIContext";

export function useTextScale() {
  const { isLargeText, toggleTextScale } = useUIContext();

  return { isLargeText, toggleTextScale };
}

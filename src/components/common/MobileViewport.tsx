import type { ReactNode } from "react";
import { useTextScale } from "@/hooks/useTextScale";

interface MobileViewportProps {
  children: ReactNode;
}

export function MobileViewport({ children }: MobileViewportProps) {
  const { isLargeText } = useTextScale();

  return (
    <div
      style={{ zoom: isLargeText ? 1.15 : 1 }}
      className="relative mx-auto h-screen max-w-[390px] overflow-hidden bg-background-subtle shadow-2xl"
    >
      {children}
    </div>
  );
}

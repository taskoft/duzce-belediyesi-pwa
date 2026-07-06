import type { ReactNode } from "react";

interface MobileViewportProps {
  children: ReactNode;
}

export function MobileViewport({ children }: MobileViewportProps) {
  return (
    <div className="relative mx-auto h-screen max-w-[390px] overflow-hidden bg-background-subtle shadow-2xl">
      {children}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";

const CLOSE_TRANSITION_MS = 300;

export function Modal() {
  const { isOpen, content } = useModal();
  const [isMounted, setIsMounted] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      return;
    }
    const timeoutId = window.setTimeout(() => setIsMounted(false), CLOSE_TRANSITION_MS);
    return () => window.clearTimeout(timeoutId);
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 z-50 flex items-center justify-center bg-ink-base/40 backdrop-blur-sm px-container-margin transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex w-full max-w-[340px] flex-col items-center rounded-[24px] bg-surface p-stack-lg text-center shadow-lg">
        {content}
      </div>
    </div>
  );
}

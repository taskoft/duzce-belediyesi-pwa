import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";

const CLOSE_TRANSITION_MS = 300;

export function Modal() {
  const { isOpen, content, close } = useModal();
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
      onClick={close}
      className={`absolute inset-0 z-50 flex items-center justify-center bg-ink-base/40 backdrop-blur-sm px-container-margin transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[calc(100%-2rem)] w-full max-w-[340px] flex-col items-center overflow-y-auto overflow-x-hidden rounded-[24px] bg-surface p-stack-lg text-center shadow-lg"
      >
        {content}
      </div>
    </div>
  );
}

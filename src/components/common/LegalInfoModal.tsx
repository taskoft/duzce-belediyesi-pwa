import { Icon } from "@/components/common/Icon";

interface LegalInfoModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export function LegalInfoModal({ title, content, onClose }: LegalInfoModalProps) {
  return (
    <div className="w-full text-left">
      <div className="mb-4 flex items-start justify-between gap-2">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
        >
          <Icon name="close" />
        </button>
      </div>
      <p className="font-body-md text-body-md max-h-[400px] overflow-y-auto text-on-surface-variant">{content}</p>
    </div>
  );
}

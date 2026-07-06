import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";

interface MayorMessageFormProps {
  onSubmit: (subject: string, body: string) => boolean;
  onClose: () => void;
}

export function MayorMessageForm({ onSubmit, onClose }: MayorMessageFormProps) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    const succeeded = onSubmit(subject, body);
    if (succeeded) {
      onClose();
    }
  };

  return (
    <div className="w-full text-left">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Başkana Mesaj</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="mb-3">
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Konu</label>
        <input
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Mesaj konunuz"
          className="font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="mb-4">
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Mesajınız</label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Mesajınızı detaylı bir şekilde yazınız..."
          rows={4}
          className="font-body-md text-body-md w-full resize-none rounded-xl border border-outline-variant bg-background-subtle px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <Button variant="primary" fullWidth onClick={handleSubmit}>
        <Icon name="send" className="text-[18px]" />
        Mesajı Gönder
      </Button>
    </div>
  );
}

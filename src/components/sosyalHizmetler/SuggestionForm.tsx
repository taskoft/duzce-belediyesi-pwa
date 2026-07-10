import { Icon } from "@/components/common/Icon";
import { IconBadge } from "@/components/common/IconBadge";
import { Button } from "@/components/common/Button";

interface SuggestionFormProps {
  title: string;
  onTitleChange: (value: string) => void;
  detail: string;
  onDetailChange: (value: string) => void;
  isSubmitted: boolean;
  onSubmit: () => void;
}

export function SuggestionForm({
  title,
  onTitleChange,
  detail,
  onDetailChange,
  isSubmitted,
  onSubmit,
}: SuggestionFormProps) {
  return (
    <section className="flex flex-col gap-stack-md rounded-2xl bg-surface p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <IconBadge name="lightbulb" tone="amber" size="sm" />
        <h2 className="font-headline-md text-headline-md text-on-surface">Sosyal Sorumluluk Önerisi</h2>
      </div>

      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Öneri Başlığı</label>
        <input
          type="text"
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
          placeholder="Örn. Mahalle Kitap Kulübü"
          className="font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">Açıklama</label>
        <textarea
          value={detail}
          onChange={(event) => onDetailChange(event.target.value)}
          placeholder="Önerinizi detaylı bir şekilde açıklayınız..."
          rows={3}
          className="font-body-md text-body-md w-full resize-none rounded-xl border border-outline-variant bg-background-subtle px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <Button variant="primary" fullWidth onClick={onSubmit}>
        <Icon name="send" className="text-[18px]" />
        {isSubmitted ? "Tekrar Gönder" : "Öneriyi Gönder"}
      </Button>
    </section>
  );
}

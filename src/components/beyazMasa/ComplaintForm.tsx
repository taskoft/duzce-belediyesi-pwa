import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { Spinner } from "@/components/common/Spinner";
import { FileUploadBox } from "@/components/beyazMasa/FileUploadBox";
import type { ComplaintCategory, ComplaintSubmissionStatus } from "@/types/beyazMasa";

interface ComplaintFormProps {
  categories: ComplaintCategory[];
  categoryId: string;
  onCategoryChange: (value: string) => void;
  details: string;
  onDetailsChange: (value: string) => void;
  attachment: File | null;
  onFileSelect: (file: File | null) => void;
  status: ComplaintSubmissionStatus;
  submittedCode: string | null;
  onSubmit: () => void;
  onReset: () => void;
}

export function ComplaintForm({
  categories,
  categoryId,
  onCategoryChange,
  details,
  onDetailsChange,
  attachment,
  onFileSelect,
  status,
  submittedCode,
  onSubmit,
  onReset,
}: ComplaintFormProps) {
  if (status === "submitted" && submittedCode) {
    return (
      <section className="flex flex-col items-center gap-3 rounded-2xl bg-surface p-6 text-center shadow-sm">
        <Icon name="check_circle" filled className="text-[48px] text-primary" />
        <h2 className="font-headline-md text-headline-md text-on-surface">Talebiniz Alındı</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Takip numaranız: <span className="font-bold text-primary">#{submittedCode}</span>
        </p>
        <button type="button" onClick={onReset} className="font-label-lg text-label-lg text-primary hover:underline">
          Yeni Talep Oluştur
        </button>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-stack-md rounded-2xl border border-surface-container-low bg-surface p-4 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <Icon name="edit_document" className="text-primary" />
        <h2 className="font-headline-md text-headline-md text-on-surface">Beyaz Masa Talep Formu</h2>
      </div>

      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">
          Başvuru Kategorisi
        </label>
        <div className="relative">
          <select
            value={categoryId}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full appearance-none rounded-xl border border-outline-variant/50 bg-background-subtle px-4 py-3 font-body-md text-body-md text-on-surface transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="" disabled>
              Kategori Seçiniz
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
          />
        </div>
      </div>

      <div>
        <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">
          Talep/Şikayet Detayı
        </label>
        <textarea
          value={details}
          onChange={(event) => onDetailsChange(event.target.value)}
          placeholder="Talebinizi detaylı bir şekilde açıklayınız..."
          rows={3}
          className="w-full resize-none rounded-xl border border-outline-variant/50 bg-background-subtle px-4 py-3 font-body-md text-body-md text-on-surface transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <FileUploadBox attachment={attachment} onFileSelect={onFileSelect} />

      <Button variant="primary" fullWidth onClick={onSubmit} disabled={status === "submitting"}>
        {status === "submitting" ? <Spinner className="h-5 w-5" /> : <Icon name="send" className="text-[20px]" />}
        {status === "submitting" ? "Gönderiliyor..." : "Başvuruyu Gönder"}
      </Button>
    </section>
  );
}

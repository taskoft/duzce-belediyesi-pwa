import { IconBadge } from "@/components/common/IconBadge";
import { FileUploadBox } from "@/components/common/FileUploadBox";

interface PatiDestekFormProps {
  description: string;
  onDescriptionChange: (value: string) => void;
  photo: File | null;
  onPhotoChange: (file: File | null) => void;
  onSubmit: () => void;
}

export function PatiDestekForm({
  description,
  onDescriptionChange,
  photo,
  onPhotoChange,
  onSubmit,
}: PatiDestekFormProps) {
  return (
    <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-surface p-4 shadow-sm">
      <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-tertiary-fixed opacity-30" />
      <div className="flex items-start gap-4">
        <IconBadge name="pets" tone="orange" size="lg" />
        <div className="z-10 flex flex-col gap-1">
          <h4 className="font-label-lg text-label-lg text-on-surface">Pati Destek</h4>
          <p className="font-body-md text-body-md text-outline">Sokak hayvanları için mama ve tedavi talebi.</p>
        </div>
      </div>

      <textarea
        value={description}
        onChange={(event) => onDescriptionChange(event.target.value)}
        placeholder="Durumu kısaca açıklayın (konum, hayvanın durumu vb.)"
        rows={2}
        className="font-body-md text-body-md w-full resize-none rounded-xl border border-outline-variant/50 bg-background-subtle px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />

      <FileUploadBox
        attachment={photo}
        onFileSelect={onPhotoChange}
        label="Fotoğraf Ekle"
        placeholder="Fotoğraf Seçin veya Çekin"
      />

      <button
        type="button"
        onClick={onSubmit}
        className="h-10 rounded-xl bg-primary font-label-sm text-label-sm text-on-primary shadow-sm transition-transform active:scale-95"
      >
        Bildir
      </button>
    </div>
  );
}

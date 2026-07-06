import { useRef, useState } from "react";
import { Icon } from "@/components/common/Icon";

interface FileUploadBoxProps {
  attachment: File | null;
  onFileSelect: (file: File | null) => void;
  label?: string;
  placeholder?: string;
}

const MAX_SIZE_LABEL = "5MB";

export function FileUploadBox({
  attachment,
  onFileSelect,
  label = "Fotoğraf/Belge Ekle (Opsiyonel)",
  placeholder = `Görsel Seçin veya Sürükleyin (maks. ${MAX_SIZE_LABEL})`,
}: FileUploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    onFileSelect(files?.[0] ?? null);
  };

  return (
    <div>
      <label className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">{label}</label>
      <input ref={inputRef} type="file" className="hidden" onChange={(event) => handleFiles(event.target.files)} />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          handleFiles(event.dataTransfer.files);
        }}
        className={`flex h-[88px] w-full flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed transition-colors ${
          isDragging
            ? "border-primary bg-primary-fixed/20"
            : "border-outline-variant/50 bg-background-subtle/50 hover:bg-surface-container-low"
        }`}
      >
        <Icon name={attachment ? "task" : "cloud_upload"} className="text-outline" />
        <span className="font-label-sm text-label-sm text-outline">{attachment ? attachment.name : placeholder}</span>
      </button>
    </div>
  );
}

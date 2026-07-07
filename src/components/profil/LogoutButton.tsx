import { Icon } from "@/components/common/Icon";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";

export function LogoutButton() {
  const { open, close } = useModal();
  const { show: showToast } = useToast();

  const confirmLogout = () => {
    close();
    showToast("Çıkışınız yapıldı.", "success");
  };

  const openConfirm = () => {
    open(
      <div className="w-full text-center">
        <Icon name="logout" className="mb-2 text-[32px] text-error-vibrant" />
        <h2 className="font-headline-md text-headline-md mb-1 text-on-surface">Çıkış Yap</h2>
        <p className="font-body-md text-body-md mb-4 text-on-surface-variant">
          Hesabınızdan çıkış yapmak istediğinize emin misiniz?
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={close}
            className="font-label-lg text-label-lg h-[48px] flex-1 rounded-xl border border-outline-variant text-on-surface"
          >
            Vazgeç
          </button>
          <button
            type="button"
            onClick={confirmLogout}
            className="font-label-lg text-label-lg h-[48px] flex-1 rounded-xl bg-error-vibrant text-on-error"
          >
            Çıkış Yap
          </button>
        </div>
      </div>,
    );
  };

  return (
    <button
      type="button"
      onClick={openConfirm}
      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-error-vibrant/30 font-label-lg text-label-lg text-error-vibrant transition-colors hover:bg-error-container/30"
    >
      <Icon name="logout" className="text-[20px]" />
      Çıkış Yap
    </button>
  );
}

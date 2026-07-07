import { Link } from "react-router-dom";
import { Icon } from "@/components/common/Icon";
import { useToast } from "@/hooks/useToast";
import { useModal } from "@/hooks/useModal";
import { MayorMessageForm } from "@/components/belediye/MayorMessageForm";
import type { Mayor, CorporateStructureEntry } from "@/types/belediye";

interface BaskanWidgetProps {
  mayor: Mayor;
  corporateStructure: CorporateStructureEntry[];
  isMessageExpanded: boolean;
  onToggleMessage: () => void;
  onSubmitMayorMessage: (subject: string, body: string) => boolean;
}

export function BaskanWidget({
  mayor,
  corporateStructure,
  isMessageExpanded,
  onToggleMessage,
  onSubmitMayorMessage,
}: BaskanWidgetProps) {
  const { show: showToast } = useToast();
  const { open, close } = useModal();

  const openMessageForm = () => {
    open(<MayorMessageForm onSubmit={onSubmitMayorMessage} onClose={close} />);
  };

  const showComingSoon = () => showToast("Bu özellik yakında aktif olacaktır.", "info");

  return (
    <div className="flex flex-col gap-stack-md">
      <div className="overflow-hidden rounded-2xl bg-surface shadow-sm">
        <div className="h-24 w-full bg-gradient-to-br from-primary to-primary-container" />
        <div className="-mt-12 flex flex-col items-center px-gutter pb-gutter">
          <div className="mb-stack-sm h-24 w-24 rounded-full border-4 border-surface bg-surface-container-highest shadow-sm" />
          <h2 className="font-headline-md text-headline-md text-center text-on-surface">{mayor.name}</h2>
          <p className="font-body-md text-body-md mt-1 text-center font-medium text-primary">{mayor.title}</p>

          <div className="mt-stack-md w-full rounded-xl bg-surface-container-low p-gutter">
            <div className="mb-2 flex items-center gap-2">
              <Icon name="format_quote" filled className="text-primary" />
              <span className="font-label-lg text-label-lg text-primary-container">Başkanın Mesajı</span>
            </div>
            <p
              className={`font-body-md text-body-md text-on-surface-variant transition-all ${
                isMessageExpanded ? "" : "line-clamp-3"
              }`}
            >
              {mayor.message}
            </p>
            <button
              type="button"
              onClick={onToggleMessage}
              className="font-label-sm text-label-sm mt-2 flex items-center gap-1 text-primary active:opacity-70"
            >
              <span>{isMessageExpanded ? "Daralt" : "Devamını Oku"}</span>
              <Icon name={isMessageExpanded ? "expand_less" : "expand_more"} className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-stack-sm">
        <button
          type="button"
          onClick={openMessageForm}
          className="scale-98 flex h-28 flex-col justify-between rounded-2xl bg-primary p-gutter text-left shadow-sm transition-transform"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-on-primary/20">
            <Icon name="mail" filled className="text-on-primary" />
          </div>
          <span className="font-label-lg text-label-lg leading-tight text-on-primary">
            Başkana
            <br />
            Mesaj Gönder
          </span>
        </button>
        <Link
          to="/projeler"
          className="scale-98 flex h-28 flex-col justify-between rounded-2xl border border-outline-variant/30 bg-surface p-gutter text-left shadow-sm transition-transform"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-primary">
            <Icon name="account_tree" filled />
          </div>
          <span className="font-label-lg text-label-lg leading-tight text-on-surface">
            Belediye
            <br />
            Projeleri
          </span>
        </Link>
      </div>

      <div className="flex flex-col gap-stack-sm">
        <h3 className="font-headline-md text-headline-md text-on-surface">Kurumsal</h3>
        <div className="-mx-container-margin flex gap-stack-sm overflow-x-auto px-container-margin pb-2">
          {corporateStructure.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={showComingSoon}
              className="scale-98 flex w-40 flex-none flex-col gap-3 rounded-2xl border border-outline-variant/20 bg-surface p-gutter text-left shadow-sm transition-transform"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-high text-primary">
                <Icon name={entry.icon} />
              </div>
              <div>
                <span className="font-label-lg text-label-lg block text-on-surface">{entry.label}</span>
                <span className="font-label-sm text-label-sm mt-1 block text-outline">{entry.sublabel}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

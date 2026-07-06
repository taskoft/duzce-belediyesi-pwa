import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";

interface DebtInquiryFormProps {
  tcId: string;
  onTcIdChange: (value: string) => void;
  isTcIdValid: boolean;
  isQuerying: boolean;
  onSubmit: () => void;
}

export function DebtInquiryForm({ tcId, onTcIdChange, isTcIdValid, isQuerying, onSubmit }: DebtInquiryFormProps) {
  const [attempted, setAttempted] = useState(false);
  const showError = attempted && !isTcIdValid;

  const handleSubmit = () => {
    setAttempted(true);
    onSubmit();
  };

  return (
    <section className="relative shrink-0 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface p-4 shadow-sm">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-container opacity-10 blur-2xl" />

      <h2 className="font-headline-md text-headline-md mb-stack-md flex items-center gap-2 text-on-surface">
        <Icon name="search" filled className="text-primary" />
        Borç Sorgulama
      </h2>

      <div className="space-y-stack-md">
        <div>
          <label htmlFor="tc-id" className="font-label-sm text-label-sm mb-1 ml-1 block text-on-surface-variant">
            T.C. Kimlik / Sicil No
          </label>
          <div className="relative">
            <input
              id="tc-id"
              type="text"
              inputMode="numeric"
              value={tcId}
              onChange={(event) => onTcIdChange(event.target.value)}
              placeholder="11 haneli T.C. Kimlik No"
              className={`font-body-lg text-body-lg h-component-height-md w-full rounded-xl border bg-background-subtle px-4 text-on-surface transition-colors focus:outline-none focus:ring-1 ${
                showError
                  ? "border-error focus:border-error focus:ring-error"
                  : "border-outline-variant focus:border-primary focus:ring-primary"
              }`}
            />
            {isTcIdValid && (
              <Icon name="check_circle" filled className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
            )}
          </div>
          {showError && <p className="font-label-sm text-label-sm mt-1 ml-1 text-error">11 haneli sayı giriniz.</p>}
        </div>

        <Button variant="primary" size="md" fullWidth onClick={handleSubmit}>
          <Icon name="search" />
          {isQuerying ? "Sorgulanıyor..." : "Sorgula"}
        </Button>
      </div>
    </section>
  );
}

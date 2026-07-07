import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import type { FaqItem } from "@/types/common";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col rounded-2xl border border-outline-variant/20 bg-surface shadow-sm">
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className={index < items.length - 1 ? "border-b border-outline-variant/20" : ""}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-3 p-4 text-left"
            >
              <span className="font-label-lg text-label-lg text-on-surface">{item.question}</span>
              <Icon name={isOpen ? "expand_less" : "expand_more"} className="shrink-0 text-outline" />
            </button>
            {isOpen && (
              <p className="font-body-md text-body-md px-4 pb-4 text-on-surface-variant">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

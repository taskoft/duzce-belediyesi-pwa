import { Link } from "react-router-dom";
import { Icon } from "@/components/common/Icon";
import type { MenuItem } from "@/types/dashboard";

interface SearchResultsListProps {
  results: MenuItem[];
  query: string;
}

export function SearchResultsList({ results, query }: SearchResultsListProps) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-stack-lg text-center">
        <Icon name="search_off" className="text-[32px] text-outline-variant" />
        <p className="font-body-md text-body-md text-on-surface-variant">
          "{query}" ile eşleşen bir sonuç bulunamadı.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-stack-sm">
      <h3 className="font-label-lg text-label-lg mb-1 uppercase tracking-wider text-on-surface-variant">
        Arama Sonuçları
      </h3>
      {results.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className="scale-98 flex items-center gap-3 rounded-xl bg-surface p-stack-md shadow-sm transition-transform"
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.accentBg} ${item.accentColor}`}>
            <Icon name={item.icon} filled />
          </div>
          <span className="font-label-lg text-label-lg text-on-surface">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Icon } from "@/components/common/Icon";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchBarProps {
  onDebouncedSearch?: (query: string) => void;
  onSubmit?: () => void;
}

export function SearchBar({ onDebouncedSearch, onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    onDebouncedSearch?.(debouncedQuery);
  }, [debouncedQuery, onDebouncedSearch]);

  return (
    <div className="relative w-full">
      <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit?.();
          }
        }}
        placeholder="Uygulamada Ara..."
        className="font-body-lg text-body-lg h-component-height-md w-full rounded-xl border border-outline-variant bg-background-subtle pl-10 pr-4 transition-shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

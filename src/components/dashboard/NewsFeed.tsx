import { Icon } from "@/components/common/Icon";
import newsData from "@/data/newsData.json";
import type { NewsItem } from "@/types/dashboard";

const NEWS_ITEMS = newsData as NewsItem[];

export function NewsFeed() {
  return (
    <section className="flex flex-col gap-stack-md pb-stack-lg">
      <div className="flex items-end justify-between pl-1 pr-1">
        <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
          Güncel Gelişmeler
        </h3>
        <a href="#" className="font-label-sm text-label-sm text-primary hover:underline">
          Tümünü Gör
        </a>
      </div>

      {NEWS_ITEMS.map((item) =>
        item.category === "Haberler" ? (
          <article
            key={item.id}
            className="scale-98 flex shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl bg-surface shadow-sm transition-transform active:opacity-90"
          >
            <div className="relative h-40 w-full">
              <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" />
              <span className="font-label-sm text-label-sm absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-on-primary shadow-sm">
                Haberler
              </span>
            </div>
            <div className="p-stack-md">
              <h4 className="font-headline-md text-headline-md mb-1 text-on-surface">{item.title}</h4>
              <p className="font-body-md text-body-md line-clamp-2 text-on-surface-variant">{item.summary}</p>
              <p className="font-label-sm text-label-sm mt-2 text-outline">{item.date}</p>
            </div>
          </article>
        ) : (
          <article
            key={item.id}
            className="scale-98 flex cursor-pointer items-start gap-3 rounded-xl border-l-4 border-error-vibrant bg-error-container p-stack-md shadow-sm transition-transform active:opacity-90"
          >
            <Icon name="warning" filled className="mt-1 text-error-vibrant" />
            <div>
              <h4 className="font-label-lg text-label-lg mb-1 text-on-error-container">{item.title}</h4>
              <p className="font-body-sm text-body-sm text-on-error-container/80">{item.summary}</p>
              <p className="font-label-sm text-label-sm mt-2 text-on-error-container/60">{item.date}</p>
            </div>
          </article>
        ),
      )}

      <div className="h-4" />
    </section>
  );
}

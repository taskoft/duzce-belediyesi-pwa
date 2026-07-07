import { Icon } from "@/components/common/Icon";
import { useToast } from "@/hooks/useToast";
import { shareContent } from "@/utils/share";
import newsData from "@/data/newsData.json";
import type { NewsItem } from "@/types/dashboard";

const NEWS_ITEMS = newsData as NewsItem[];

export function NewsFeed() {
  const { show: showToast } = useToast();

  const handleShare = (item: NewsItem) => {
    shareContent(
      { title: item.title, text: item.summary, url: `https://www.duzce.bel.tr/haberler/${item.id}` },
      () => showToast("Haber bağlantısı kopyalandı.", "success"),
      () => showToast("Bağlantı paylaşılamadı.", "error"),
    );
  };

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
              <div className="mb-1 flex items-start justify-between gap-2">
                <h4 className="font-headline-md text-headline-md text-on-surface">{item.title}</h4>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleShare(item);
                  }}
                  aria-label="Paylaş"
                  className="shrink-0 rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
                >
                  <Icon name="share" className="text-[18px]" />
                </button>
              </div>
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
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-start justify-between gap-2">
                <h4 className="font-label-lg text-label-lg text-on-error-container">{item.title}</h4>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleShare(item);
                  }}
                  aria-label="Paylaş"
                  className="shrink-0 rounded-full p-1 text-on-error-container/70 hover:bg-error-vibrant/10"
                >
                  <Icon name="share" className="text-[16px]" />
                </button>
              </div>
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

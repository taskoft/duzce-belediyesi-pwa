import { Icon } from "@/components/common/Icon";

const NEWS_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBv-Nd5Bqvc8qmV7JKBRt5ZAfpQVxDEJB0AIed9WV9Dh-V6jHIpFpJlMFHu9L5p0h35SxQfXukk1DI4jTA8y2SpGjokLvjwLO_KlEm_hUM2whxxib3ZLRENEAvMciibYlQmfh9mUurESZI9jLmhWmtJzWZ48Mkt9Mq73xM12XybtwaAFfFNJY9r30Vu7cxXNQU8X5GJwzzSOLC3lusa2MJ5eXHQnG1gLVqd75v77E2pOsSiUwNkUB7uTQ";

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

      <article className="scale-98 flex shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl bg-surface shadow-sm transition-transform active:opacity-90">
        <div className="relative h-40 w-full">
          <img
            src={NEWS_IMAGE_URL}
            alt="Millet Bahçesi 2. Etap yeşil alan görünümü"
            className="h-full w-full object-cover"
          />
          <span className="font-label-sm text-label-sm absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-on-primary shadow-sm">
            Haberler
          </span>
        </div>
        <div className="p-stack-md">
          <h4 className="font-headline-md text-headline-md mb-1 text-on-surface">Millet Bahçesi 2. Etap Açıldı</h4>
          <p className="font-body-md text-body-md line-clamp-2 text-on-surface-variant">
            Şehrimizin yeşil dokusunu güçlendiren Millet Bahçesi'nin 2. etabı vatandaşlarımızın hizmetine sunuldu.
          </p>
        </div>
      </article>

      <article className="scale-98 flex cursor-pointer items-start gap-3 rounded-xl border-l-4 border-error-vibrant bg-error-container p-stack-md shadow-sm transition-transform active:opacity-90">
        <Icon name="warning" filled className="mt-1 text-error-vibrant" />
        <div>
          <h4 className="font-label-lg text-label-lg mb-1 text-on-error-container">Planlı Su Kesintisi Duyurusu</h4>
          <p className="font-body-sm text-body-sm text-on-error-container/80">
            Altyapı yenileme çalışmaları nedeniyle yarın 10:00 - 14:00 arası merkez mahallelerde su kesintisi
            yaşanacaktır.
          </p>
        </div>
      </article>

      <div className="h-4" />
    </section>
  );
}

import logoEmblem from "@/assets/logo-emblem.png";

export function OnboardingVisionStep() {
  return (
    <>
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed p-2.5">
        <img src={logoEmblem} alt="Düzce Belediyesi" className="h-full w-full object-contain" />
      </div>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-3 font-bold text-on-surface">
        Kurumsal Vizyon
      </h2>

      <div className="mb-4 flex w-full flex-col items-center rounded-2xl bg-surface-container-low p-stack-md">
        <div className="mb-3 h-16 w-16 rounded-full border-2 border-primary bg-surface-container-highest" />
        <p className="font-label-lg text-label-lg text-on-surface">Dr. Faruk Özlü</p>
        <p className="font-label-sm text-label-sm text-on-surface-variant">T.C. Düzce Belediyesi Başkanı</p>

        <svg
          viewBox="0 0 160 48"
          className="mt-3 h-10 w-40 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M6 34 C 18 10, 30 10, 36 26 S 54 40, 62 20 S 78 8, 86 28 S 102 42, 112 18 C 118 8, 128 8, 134 22 L 150 12" />
        </svg>
        <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline">Dijital İmza</span>
      </div>

      <p className="font-body-lg text-body-lg mb-8 px-2 text-center italic text-on-surface-variant">
        "Geleceğin Şehri Düzce; Değişen, Gelişen ve Güçlenen Güç."
      </p>
    </>
  );
}

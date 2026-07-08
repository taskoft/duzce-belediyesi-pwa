import logoEmblem from "@/assets/logo-emblem.png";
import mayorPhoto from "@/assets/mayor-photo.jpg";
import mayorSignature from "@/assets/mayor-signature.png";

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
        <img
          src={mayorPhoto}
          alt="Dr. Faruk Özlü"
          className="mb-3 h-16 w-16 rounded-full border-2 border-primary object-cover"
        />
        <p className="font-label-lg text-label-lg text-on-surface">Dr. Faruk Özlü</p>
        <p className="font-label-sm text-label-sm text-on-surface-variant">T.C. Düzce Belediyesi Başkanı</p>

        <img src={mayorSignature} alt="Dr. Faruk Özlü imzası" className="mt-3 h-10 w-auto object-contain" />
        <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline">Dijital İmza</span>
      </div>

      <p className="font-body-lg text-body-lg mb-8 px-2 text-center italic text-on-surface-variant">
        "Geleceğin Şehri Düzce; Değişen, Gelişen ve Güçlenen Güç."
      </p>
    </>
  );
}

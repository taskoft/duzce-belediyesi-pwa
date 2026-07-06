import { Route, Routes } from "react-router-dom";
import { MobileViewport } from "@/components/common/MobileViewport";
import { Modal } from "@/components/common/Modal";
import { Toast } from "@/components/common/Toast";
import { Dashboard } from "@/pages/Dashboard";
import { EBelediye } from "@/pages/EBelediye";
import { Transportation } from "@/pages/Transportation";
import { KentRehberi } from "@/pages/KentRehberi";
import { Projeler } from "@/pages/Projeler";
import { SosyalHizmetler } from "@/pages/SosyalHizmetler";
import { BeyazMasa } from "@/pages/BeyazMasa";
import { Duzcespor } from "@/pages/Duzcespor";
import { Profil } from "@/pages/Profil";

export function App() {
  return (
    <MobileViewport>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/e-belediye" element={<EBelediye />} />
        <Route path="/ulasim" element={<Transportation />} />
        <Route path="/kent-rehberi" element={<KentRehberi />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/sosyal-hizmetler" element={<SosyalHizmetler />} />
        <Route path="/beyaz-masa" element={<BeyazMasa />} />
        <Route path="/duzcespor" element={<Duzcespor />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <Modal />
      <Toast />
    </MobileViewport>
  );
}

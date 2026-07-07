import { Route, Routes, useLocation } from "react-router-dom";
import { MobileViewport } from "@/components/common/MobileViewport";
import { Modal } from "@/components/common/Modal";
import { Toast } from "@/components/common/Toast";
import { Sidebar } from "@/components/common/Sidebar";
import { Dashboard } from "@/pages/Dashboard";
import { EBelediye } from "@/pages/EBelediye";
import { Transportation } from "@/pages/Transportation";
import { KentRehberi } from "@/pages/KentRehberi";
import { Projeler } from "@/pages/Projeler";
import { SosyalHizmetler } from "@/pages/SosyalHizmetler";
import { BeyazMasa } from "@/pages/BeyazMasa";
import { Duzcespor } from "@/pages/Duzcespor";
import { Profil } from "@/pages/Profil";
import { Belediye } from "@/pages/Belediye";
import { AcilDurum } from "@/pages/AcilDurum";
import { Eczane } from "@/pages/Eczane";

export function App() {
  const location = useLocation();

  return (
    <MobileViewport>
      <div key={location.pathname} className="page-transition absolute inset-0">
        <Routes location={location}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/e-belediye" element={<EBelediye />} />
          <Route path="/ulasim" element={<Transportation />} />
          <Route path="/kent-rehberi" element={<KentRehberi />} />
          <Route path="/projeler" element={<Projeler />} />
          <Route path="/sosyal-hizmetler" element={<SosyalHizmetler />} />
          <Route path="/beyaz-masa" element={<BeyazMasa />} />
          <Route path="/duzcespor" element={<Duzcespor />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/belediye" element={<Belediye />} />
          <Route path="/acil" element={<AcilDurum />} />
          <Route path="/eczane" element={<Eczane />} />
        </Routes>
      </div>
      <Modal />
      <Toast />
      <Sidebar />
    </MobileViewport>
  );
}

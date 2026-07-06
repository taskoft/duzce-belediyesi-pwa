# PROJECT ARCHITECTURE, SCOPE & ROADMAP (DUZCE PWA)

## 1. Technical Stack & Architecture Network
* **Frontend Core:** React.js (Vite) + TypeScript / JavaScript (ES6+)
* **Routing:** React Router DOM (v6+)
* **Styling:** Tailwind CSS (Utility-first, Mobile-First responsive configurations)
* **PWA Wrapper:** `vite-plugin-pwa` (Registering service workers, Web Manifest file)
* **State Management:** Global UI Context (`UIContext.tsx`) for global overlays + Custom Hooks (`useToast`, `useModal`).
* **API & Mock Data Layer:** Axios + Local Static JSON repositories acting as local fallbacks for offline simulation.
* **Map Integration:** React-Leaflet (OpenStreetMap) API-key free integration.

### File Dependency & State Flow
```text
[Vite Index.html]
       │
   [src/main.tsx]
       │
   [src/context/UIContext.tsx] ──> (Manages Global Toast & Modal states)
       │
   [src/App.tsx] (Handles Routing)
       ├──> [src/pages/Dashboard.tsx] ──> Sub-components (Header, MenuGrid, etc.)
       ├──> [src/pages/EBelediye.tsx]  ──> (Debt search, Mock 3D secure checkout)
       ├──> [src/pages/Transportation.tsx] ──> (React-Leaflet live bus simulation)
       ├──> [src/pages/KentRehberi.tsx] ──> (Tourism tabs, cultural lists)
       └──> [src/pages/BeyazMasa.tsx]  ──> (Form uploads, validation triggers)
2. Comprehensive Project Roadmap & Pages Scope
Phase 1: Global Core & Dashboard (Current)
Status: In Progress.

Scope: UI Context setup, global atomic blueprints (Button, Modal, Toast), Mobile-first layout container (390px), Onboarding overlay slider, Header with dynamic weather, Search Bar, 3x2 Main Grid, Sticky Bottom Nav.

Phase 2: E-Belediye & Smart Payment Simulation (Next)
Scope: Search input fields restricted to numeric values, responsive lists displaying mock municipal invoices, mock credit card processing gateway modal, success animation sequences.

Phase 3: Interactive Transportation & Live Map (Following)
Scope: Two-tab panel layout (Bus tracking / Balance loading). Integration of React-Leaflet rendering Düzce coordinate matrices. Automatic interval loops mimicking live vehicle movement along bus stops.

Phase 4: Kent Rehberi & Gezi Portalı
Scope: Dual layout sorting operational directories (Hospitals, Libraries) and cultural sightseeing hotspots (Waterfalls, camping zones) with crisp descriptive image cards.

Phase 5: Beyaz Masa (Talep/Şikayet) & Düzcespor Widget
Scope: Form management handling file attachments, custom extensions filtering, client-side capacity warnings (5MB limit). Dynamic layout showcasing match schedules and team tables matching Düzcespor branding colors.

3. Critical Considerations Addressed (Architectural Resilience)
State Persistence: Form data and session status (like skipping the onboarding tutorial) must automatically sync with localStorage.

Offline Data Fallbacks: Every data hook must operate on a dual layer: attempting a live fetch, and instantly degrading gracefully into a robust local JSON payload if a network exception occurs.

Viewport Encapsulation: The core canvas must maintain a strict maximum aspect ratio container on desktops (max-w-[390px] h-[844px] shadow-2xl relative bg-[#F8FAFC]) to perfectly simulate a native mobile device within a desktop web environment.

Debouncing Search Filters: The search bar inside the header must use a custom debounce hook (useDebounce) to avoid excessive UI re-renders during active character input.

DOM Hierarchy Protection: Reusable modals must utilize a HTML template model ensuring overlay elements are properly trapped within the correct viewport focus stack.
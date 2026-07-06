---
name: Civic Excellence
colors:
  surface: '#FFFFFF'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#42474f'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#bb0112'
  on-secondary: '#ffffff'
  secondary-container: '#e02928'
  on-secondary-container: '#fffbff'
  tertiary: '#532800'
  on-tertiary: '#ffffff'
  tertiary-container: '#743b00'
  on-tertiary-container: '#f9a767'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
  background-subtle: '#F8FAFC'
  error-vibrant: '#F73333'
  ink-base: '#0F172A'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 20px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
  component-height-lg: 56px
  component-height-md: 48px
---

## Brand & Style

This design system is built on the principles of **Modern Minimalism** and **High-Fidelity Civic Design**. It aims to transform the "Düzce Belediyesi Mobil Uygulaması" into a world-class digital service that feels as polished and intuitive as a native Apple application.

The design narrative emphasizes:
- **Clarity & Trust:** A structured, clean interface that prioritizes information density without clutter.
- **Precision:** Perfect alignment, generous whitespace, and a strict adherence to a 4px grid.
- **Service-Oriented:** Every element serves a functional purpose, utilizing a "Content-First" approach where the UI recedes to let municipal services and information shine.
- **Regional Pride:** Incorporating subtle nods to Düzce’s identity through professional color application and institutional weight.

The aesthetic utilizes "Soft Modernism"—combining the crispness of a flat design with the tactile depth of high-end mobile OS interfaces.

## Colors

The palette is anchored in a professional, institutional **Royal Blue** that conveys stability and authority. This is balanced by a sophisticated **Off-White/Blue-Gray** background that reduces eye strain and provides a premium feel compared to pure white.

- **Primary (#0F4C81):** Used for navigation, primary actions, and institutional branding.
- **Secondary/Accent (#DC2626):** Reserved for urgent notifications, Düzcespor-related sports content, and critical status indicators.
- **Background (#F8FAFC):** The foundational layer for all screens, creating a distinct separation from card-based content.
- **Surface (#FFFFFF):** Used exclusively for interactive elements like cards, modals, and input fields to create a clear "layering" effect.
- **Ink-Base (#0F172A):** A high-contrast dark slate used for primary headlines and body text to ensure maximum legibility and an "Apple-style" typographic weight.

## Typography

This design system exclusively uses **Inter**, a typeface designed for screens, providing exceptional legibility at small sizes. 

- **Contrast:** High contrast is maintained by using `ink-base` for all primary text. Secondary text should use a 60% opacity of the base color.
- **Rhythm:** Line heights are strictly adhered to for vertical rhythm. 
- **Hierarchy:** Headlines use tighter letter spacing and heavier weights to feel "anchored" and authoritative.
- **Scale:** For mobile displays, display sizes are capped to ensure content does not wrap awkwardly, shifting to `headline-lg-mobile` for top-level headers.

## Layout & Spacing

The layout follows a **Fluid-Responsive Grid** model with a focus on mobile-first ergonomics.

- **Margins:** A standard 20px horizontal margin is used for all containers to provide "breathing room" against the device edges.
- **Spacing System:** Based on a 4px baseline. Most common gaps between related elements (labels and inputs) are 8px, while unrelated sections are separated by 24px or 32px.
- **Safe Areas:** All layouts must respect the top notch/dynamic island and bottom home indicator areas, ensuring no interactive elements are obscured.
- **Card-Based Verticality:** Content is grouped into white surface cards that span the full width of the margins, creating a structured vertical feed.

## Elevation & Depth

This design system uses a **Tonal Layering** approach to convey hierarchy rather than heavy shadows.

- **Level 0 (Background):** `#F8FAFC` - The canvas.
- **Level 1 (Cards/Surfaces):** `#FFFFFF` - These elements use a `shadow-sm` (0 1px 3px 0 rgba(0, 0, 0, 0.05)) to appear slightly lifted above the background.
- **Level 2 (Modals/Popovers):** `#FFFFFF` - These use a more pronounced `shadow-md` and a semi-transparent backdrop blur (12px) to focus user attention.
- **Interactions:** Depth is dynamic. When a user interacts with a card or button, it may physically "sink" (scale-98) or "lift" (translate-y-0.5), providing immediate tactile feedback.

## Shapes

The shape language is **Refined and Soft**, mirroring the aesthetics of modern mobile operating systems.

- **Standard Cards:** 16px border-radius (`rounded-lg`) is the default for all content containers.
- **Buttons & Inputs:** 12px border-radius ensures they feel cohesive within the larger cards.
- **Chips/Badges:** Full-pill shapes (999px) are used for status indicators (e.g., "Active", "Open") to differentiate them from interactive buttons.
- **Icons:** Use rounded caps and joins to match the soft-cornered UI elements.

## Components

### Buttons
The "Master Button" is the primary interaction point.
- **Base Style:** Primary blue background, white text, 12px radius, 56px height.
- **Hover State:** `-translate-y-0.5` with a subtle increase in shadow intensity.
- **Active State:** `scale-98` with a slight darkening of the background color.
- **Secondary:** White background with a 1px border of primary blue.

### Cards
Cards are the primary container for information.
- **Style:** White surface, 16px radius, 16px internal padding, `shadow-sm`.
- **Sports Variant:** Uses a 4px left-border accent in `#DC2626` to signify Düzcespor or athletic content.

### Input Fields
- **Style:** Background `#F8FAFC` (to create a "recessed" look on the white card), 1px border `#E2E8F0`, 12px radius.
- **Focus:** 2px solid primary blue border with no glow.

### Lists
- **Style:** Clean dividers (1px `#F1F5F9`) between items. Items use high-contrast text for titles and a muted slate for descriptions.

### Chips & Badges
- **Style:** Small, pill-shaped elements with 8px horizontal padding.
- **Function:** Used for categories (e.g., "News", "Water Cut", "Events"). Use primary-light backgrounds with primary-dark text.

### Bottom Navigation
- **Style:** Pure white surface with a high-blur backdrop. Active icons use the primary blue; inactive icons use a neutral slate at 40% opacity.
import type { ReactNode } from "react";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";
import { useSidebar } from "@/hooks/useSidebar";
import { useWeather } from "@/hooks/useWeather";

interface HeaderProps {
  leading?: ReactNode;
  trailing?: ReactNode;
  title?: string;
}

function DefaultWeatherTrailing() {
  const { temperatureCelsius, weatherIcon } = useWeather();

  return (
    <Button variant="icon" className="-mr-2 rounded-lg" aria-label="Hava durumu">
      <span className="font-label-lg text-label-lg mr-1">{temperatureCelsius}°C</span>
      <Icon name={weatherIcon} />
    </Button>
  );
}

function DefaultMenuLeading() {
  const { toggle } = useSidebar();

  return (
    <Button variant="icon" className="-ml-2" aria-label="Menüyü aç" onClick={toggle}>
      <Icon name="menu" />
    </Button>
  );
}

export function Header({
  leading = <DefaultMenuLeading />,
  trailing = <DefaultWeatherTrailing />,
  title = "Düzce Belediyesi",
}: HeaderProps) {
  return (
    <header className="absolute top-0 z-40 w-full bg-surface shadow-sm dark:bg-inverse-surface">
      <div className="flex h-component-height-lg items-center justify-between px-container-margin">
        {leading}

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed">
          {title}
        </h1>

        {trailing}
      </div>
    </header>
  );
}

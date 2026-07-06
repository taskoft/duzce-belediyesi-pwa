import type { ReactNode } from "react";
import { Button } from "@/components/common/Button";
import { Icon } from "@/components/common/Icon";

interface HeaderProps {
  trailing?: ReactNode;
}

function DefaultWeatherTrailing({ temperatureCelsius = 21, weatherIcon = "partly_cloudy_day" }) {
  return (
    <Button variant="icon" className="-mr-2 rounded-lg" aria-label="Hava durumu">
      <span className="font-label-lg text-label-lg mr-1">{temperatureCelsius}°C</span>
      <Icon name={weatherIcon} />
    </Button>
  );
}

export function Header({ trailing = <DefaultWeatherTrailing /> }: HeaderProps) {
  return (
    <header className="absolute top-0 z-50 w-full bg-surface shadow-sm dark:bg-inverse-surface">
      <div className="flex h-component-height-lg items-center justify-between px-container-margin">
        <Button variant="icon" className="-ml-2" aria-label="Menüyü aç">
          <Icon name="menu" />
        </Button>

        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed">
          Düzce Belediyesi
        </h1>

        {trailing}
      </div>
    </header>
  );
}

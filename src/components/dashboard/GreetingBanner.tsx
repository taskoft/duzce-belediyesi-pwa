interface GreetingBannerProps {
  greeting: string;
  message: string;
}

export function GreetingBanner({ greeting, message }: GreetingBannerProps) {
  return (
    <div className="relative w-full shrink-0 overflow-hidden rounded-xl bg-primary-container p-stack-md text-on-primary-container shadow-sm">
      <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-white/10 blur-xl" />
      <div className="relative z-10 flex flex-col gap-1">
        <h2 className="font-headline-md text-headline-md font-bold">{greeting}</h2>
        <p className="font-body-md text-body-md text-on-primary-container/90">{message}</p>
      </div>
    </div>
  );
}

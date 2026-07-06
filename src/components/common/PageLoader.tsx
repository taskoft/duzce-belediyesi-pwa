import { Spinner } from "@/components/common/Spinner";

export function PageLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner className="h-8 w-8 text-primary" />
    </div>
  );
}

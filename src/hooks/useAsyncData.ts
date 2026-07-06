import { useEffect, useState } from "react";
import { fetchWithFallback } from "@/services/apiClient";

export function useAsyncData<T>(endpoint: string, fallback: T) {
  const [data, setData] = useState<T>(fallback);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetchWithFallback(endpoint, fallback).then((result) => {
      if (isMounted) {
        setData(result);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, isLoading };
}

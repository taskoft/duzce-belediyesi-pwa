import { useEffect, useState } from "react";

const EXCHANGE_RATE_ENDPOINT = "https://open.er-api.com/v6/latest/TRY";
const REQUEST_TIMEOUT_MS = 4000;

export interface ExchangeRates {
  usdToTry: number;
  eurToTry: number;
}

interface ExchangeRateResponse {
  result: string;
  rates: Record<string, number>;
}

const FALLBACK_RATES: ExchangeRates = {
  usdToTry: 32.5,
  eurToTry: 35.2,
};

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRates>(FALLBACK_RATES);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadRates() {
      try {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
        const response = await fetch(EXCHANGE_RATE_ENDPOINT, { signal: controller.signal });
        window.clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`Exchange rate request failed with status ${response.status}`);
        }
        const payload = (await response.json()) as ExchangeRateResponse;
        const usdRate = payload.rates.USD;
        const eurRate = payload.rates.EUR;
        if (isMounted && usdRate && eurRate) {
          setRates({ usdToTry: 1 / usdRate, eurToTry: 1 / eurRate });
        }
      } catch {
        if (isMounted) {
          setRates(FALLBACK_RATES);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadRates();
    return () => {
      isMounted = false;
    };
  }, []);

  return { rates, isLoading };
}

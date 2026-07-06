import { useEffect, useState } from "react";

const PRAYER_TIMES_ENDPOINT = "https://api.aladhan.com/v1/timingsByCity?city=Duzce&country=Turkey";
const REQUEST_TIMEOUT_MS = 4000;

export interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface AladhanResponse {
  data: {
    timings: PrayerTimes & Record<string, string>;
  };
}

const FALLBACK_TIMINGS: PrayerTimes = {
  Fajr: "04:12",
  Sunrise: "05:58",
  Dhuhr: "13:12",
  Asr: "17:08",
  Maghrib: "20:23",
  Isha: "21:59",
};

export function usePrayerTimes() {
  const [timings, setTimings] = useState<PrayerTimes>(FALLBACK_TIMINGS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPrayerTimes() {
      try {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
        const response = await fetch(PRAYER_TIMES_ENDPOINT, { signal: controller.signal });
        window.clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`Prayer times request failed with status ${response.status}`);
        }
        const payload = (await response.json()) as AladhanResponse;
        if (isMounted) {
          setTimings(payload.data.timings);
        }
      } catch {
        if (isMounted) {
          setTimings(FALLBACK_TIMINGS);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPrayerTimes();
    return () => {
      isMounted = false;
    };
  }, []);

  return { timings, isLoading };
}

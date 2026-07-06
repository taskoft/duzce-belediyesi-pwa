import axios from "axios";

const REQUEST_TIMEOUT_MS = 2500;
const MIN_LOADING_MS = 300;

const httpClient = axios.create({ timeout: REQUEST_TIMEOUT_MS });

/**
 * Dual-layer data fetch: attempts a live API request first, and gracefully
 * degrades to the provided local mock payload if the endpoint is unreachable
 * (no backend deployed yet). Enforces a minimum delay so loading states are
 * never a single-frame flash, and stays a drop-in swap once a real API ships.
 */
export async function fetchWithFallback<T>(endpoint: string, fallback: T): Promise<T> {
  const startedAt = Date.now();

  try {
    const response = await httpClient.get<T>(endpoint);
    const contentType = String(response.headers["content-type"] ?? "");
    // No backend is deployed yet: unmatched routes fall through to the SPA's
    // own index.html (200 OK, text/html) instead of a network error. Treat
    // any non-JSON payload as a miss so it degrades to the local mock data.
    if (!contentType.includes("application/json") || typeof response.data !== "object" || response.data === null) {
      throw new Error("Endpoint did not return a JSON payload");
    }
    return response.data;
  } catch {
    const elapsed = Date.now() - startedAt;
    const remaining = MIN_LOADING_MS - elapsed;
    if (remaining > 0) {
      await new Promise((resolve) => window.setTimeout(resolve, remaining));
    }
    return fallback;
  }
}

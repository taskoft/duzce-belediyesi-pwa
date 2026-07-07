interface ShareData {
  title: string;
  text: string;
  url: string;
}

export async function shareContent(
  data: ShareData,
  onFallbackSuccess: () => void,
  onFallbackError: () => void,
): Promise<void> {
  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch {
      // User dismissed the native share sheet, no further action needed.
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(data.url);
    onFallbackSuccess();
  } catch {
    onFallbackError();
  }
}

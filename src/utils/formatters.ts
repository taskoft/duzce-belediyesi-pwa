export function sanitizeNumericInput(value: string, maxLength: number): string {
  return value.replace(/\D/g, "").slice(0, maxLength);
}

export function formatCardNumber(digits: string): string {
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

export function formatExpiryDate(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  return digits.length <= 2 ? digits : `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export function formatDateTime(input: string): string {
  const date = new Date(input);

  // Chuyển sang giờ địa phương (VN thường UTC+7)
  const localDate = new Date(date.getTime() + 7 * 60 * 60 * 1000);

  const day = localDate.getDate().toString().padStart(2, "0");
  const month = (localDate.getMonth() + 1).toString().padStart(2, "0");
  const year = localDate.getFullYear();
  const hours = localDate.getHours().toString().padStart(2, "0");
  const minutes = localDate.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function formatDateOnly(date: Date) {
  return date.toISOString().split("T")[0];
}

export function parseViDateString(viDateStr: string): Date | undefined {
  const [day, month, year] = viDateStr.split('/').map(Number);

  if (!day || !month || !year) return undefined;
  return new Date(year, month - 1, day || 0);
}
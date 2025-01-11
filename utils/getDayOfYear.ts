export default function getDayOfYear(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diffInMilliseconds = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return dayOfYear;
}

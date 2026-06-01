import type { Period } from "./utils";

export const formatDate = (x: string | Date) => {
  const d = new Date(x);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

export const formatPeriod = (x: Period) => {
  const formatMonthYear = (date: string | Date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return `${formatMonthYear(x.start)} - ${x.end ? formatMonthYear(x.end) : "now"}`;
};

export const groupByYear = <T>(items: T[], getDate: (item: T) => string | Date | undefined) => {
  const groups = new Map<string, T[]>();

  items.forEach((item) => {
    const date = getDate(item);
    const year = date ? new Date(date).getFullYear().toString() : "Other";
    const bucket = groups.get(year) || [];
    bucket.push(item);
    groups.set(year, bucket);
  });

  return Array.from(groups.entries())
    .sort((a, b) => (a[0] === "Other" ? 1 : b[0] === "Other" ? -1 : Number(b[0]) - Number(a[0])))
    .map(([year, entries]) => ({ year, entries }));
};

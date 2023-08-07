import type { Period } from "./utils";

export const formatDate = (x: string | Date) => {
  const d = new Date(x);
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "semptember", "october", "november", "december"];

  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

export const formatPeriod = (x: Period) => {
  return `${formatDate(x.start)} - ${x.end ? formatDate(x.end) : "now"}`;
};

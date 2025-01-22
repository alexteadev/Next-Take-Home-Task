export const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "brown",
] as const;

export type Color = typeof COLORS[number];
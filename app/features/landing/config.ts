export type ProductType = "desktop" | "static-websites";

export const PRODUCT_TYPES_OPTIONS = [
  {
    value: "desktop",
    label: "Desktop",
  },
  {
    value: "web",
    label: "Web",
  },
] as const;

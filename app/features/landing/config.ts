export type ProductType = "desktop" | "static-websites";

export const PRODUCT_TYPES_OPTIONS = [
    {
        value: "desktop",
        label: "Desktop",
    },
    {
        value: "static-website",
        label: "Static Websites",
    },
] as const;
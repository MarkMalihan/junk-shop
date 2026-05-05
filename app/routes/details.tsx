import ProductDetails from "@/features/products/components/product-details";
import type { Route } from "./+types/details";
import { APP } from "@/shared/configs/app";
import { PRODUCTS } from "@/shared/configs/products";

export function meta({ params }: Route.MetaArgs) {
    const product = PRODUCTS.find((app) => app.id === params.id);

    return [
        {
            title: product?.name
                ? `${product.name} | ${APP.name}`
                : APP.name,
        },
        { name: "description", content: product?.description },
    ];
}

export default function Details() {
    return (
        <ProductDetails />
    );
}
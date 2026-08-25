import ProductCard from "@/features/products/components/product-card";
import AppCard from "./app-card";
import { PRODUCTS } from "@/shared/configs/products";
import { Card, CardContent } from "@/shared/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useMemo, useState } from "react";
import { PRODUCT_TYPES_OPTIONS, type ProductType } from "../config";
import { useSearchParams } from "react-router";

export default function Landing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const type = (searchParams.get("type") as ProductType) || "desktop";

  const setType = (value: ProductType) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("type", value);
      return params;
    });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => product.type === type);
  }, [type]);

  return (
    <div>
      <section className="border-t-8 border-primary">
        <AppCard />
      </section>

      <div>
        <div className="flex items-stretch justify-between gap-5">
          <div className="flex items-center border bg-card px-6 text-secondary font-semibold">
            Projects
          </div>

          <Select
            value={type}
            onValueChange={(value) => setType(value as ProductType)}
          >
            <SelectTrigger className="rounded-none bg-card! p-6 shadow-none">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>

            <SelectContent>
              {PRODUCT_TYPES_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 relative">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <Card className="col-span-2 md:col-span-4">
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  No products available in this category yet.
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}

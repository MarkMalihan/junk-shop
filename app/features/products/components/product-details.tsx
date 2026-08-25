import { Link, useParams } from "react-router";
import { PRODUCTS } from "@/shared/configs/products";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import FeatureTable from "./feature-table";
import { ProductGallery } from "./product-gallery";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const product = PRODUCTS.find((app) => app.id === id);

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  const images = product.photos?.map((p) => p.src) ?? [];

  return (
    <div>
      <Button
        variant="outline"
        className="rounded-none"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div className="max-w-5xl flex flex-col md:flex-row">
        <div>
          <section className="flex h-30">
            <img
              src={product.image}
              alt={product.name}
              className="size-30 border bg-card"
            />
            <div className="w-full h-full flex flex-col">
              <div className="flex flex-1 flex-col md:flex-row md:items-center justify-between gap-2 p-2 border bg-card">
                <div className="flex items-baseline gap-2 bg-background">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <span className="text-sm text-muted-foreground">
                    {product.version}
                  </span>
                </div>
                {product.type === "web" && (
                  <Button size={"sm"} asChild>
                    <Link to={product.link} target="_blank">
                      Visit
                    </Link>
                  </Button>
                )}
              </div>
              <div className="flex flex-1 items-center gap-3 p-2 border bg-card">
                <h2 className="text-sm font-medium">Tags:</h2>
                <div className="flex gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="p-2 border bg-card">
            <p className="text-sm">{product.description}</p>
          </section>

          {product.features && <FeatureTable features={product.features} />}
        </div>

        <section className="md:h-[calc(100vh-200px)] xl:h-[calc(100vh-405px)] 2xl:h-[calc(100vh-370px)] md:pr-2 overflow-y-auto">
          {product.photos?.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="cursor-pointer border"
              onClick={() => {
                setSelectedIndex(index);
                setOpen(true);
              }}
            />
          ))}
        </section>

        <ProductGallery
          images={images}
          open={open}
          onOpenChange={setOpen}
          initialIndex={selectedIndex}
        />
      </div>
    </div>
  );
}

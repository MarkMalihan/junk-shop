import { useParams } from "react-router";
import { PRODUCTS } from "@/shared/configs/products";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import FeatureTable from "./feature-table";
import { ProductGallery } from "./product-gallery";
import { useState } from "react";

export default function ProductDetails() {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const product = PRODUCTS.find((app) => app.id === id);

    if (!product) {
        return <div className="p-4">Product not found</div>;
    }

    const images = product.photos?.map(p => p.src) ?? [];

    return (
        <div className="max-w-5xl flex flex-col md:flex-row gap-3">
            <div className="space-y-3">
                <section className="flex gap-3 rounded-sm">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="size-30 border rounded-sm bg-background"
                    />
                    <div className="w-full space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-2 border rounded-sm h-fit bg-background">
                            <div className="flex items-baseline gap-2 bg-background">
                                <h1 className="text-lg font-semibold">{product.name}</h1>
                                <span className="text-sm text-muted-foreground">{product.version}</span>
                            </div>
                            <Button size={"sm"} className="bg-primary-700 dark:bg-primary-300" onClick={() => alert("Coming Soon!")}>Download</Button>
                        </div>
                        <div className="flex items-center gap-3 p-2 border rounded-sm bg-background">
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

                <section className="p-2 border rounded-sm bg-background">
                    <p className="text-sm">{product.description}</p>
                </section>

                <FeatureTable features={product.features!} />
            </div>

            <section className="md:h-[calc(100vh-200px)] xl:h-[calc(100vh-405px)] 2xl:h-[calc(100vh-370px)] space-y-3 md:pr-2 overflow-y-auto">
                {product.photos?.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        className="cursor-pointer border rounded-sm"
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
    );
}
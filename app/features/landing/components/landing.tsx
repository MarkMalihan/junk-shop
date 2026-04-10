import ProductCard from "@/features/products/components/product-card";
import AppCard from "./app-card";
import { PRODUCTS } from "@/shared/configs/products";
import { Card, CardContent, CardDescription, CardTitle } from "@/shared/ui/card";
import { APP } from "@/shared/configs/app";

export default function Landing() {
    return (
        <div className="space-y-3">
            <section className="space-y-3">
                <AppCard />
                <Card className="h-fit shadow-none">
                    <CardContent>
                        <CardDescription className="text-center">{APP.description}</CardDescription>
                    </CardContent>
                </Card>
            </section>

            <div className="space-y-3">
                <section>
                    <Card className="h-fit bg-primary-500 shadow-none">
                        <CardContent>
                            <CardTitle className="text-white">Available to Download Soon!</CardTitle>
                        </CardContent>
                    </Card>
                </section>
                <section className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
                    {PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            tags={product.tags}
                        />
                    ))}
                </section>


            </div>


        </div>
    );
}
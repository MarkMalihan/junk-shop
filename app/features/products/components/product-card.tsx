import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Link } from "react-router";

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    tags: string[]
}

export default function ProductCard({ id, name, image, tags }: ProductCardProps) {
    return (
        <Link to={`/products/${id}`}>
            <Card className="w-full shadow-none flex justify-center items-center">
                <CardContent className="flex flex-col items-center justify-center space-y-3">
                    <h1 className="text-center">{name}</h1>
                    <img src={image} alt={name} className="size-20 object-cover mx-auto" />
                    <div className="space-x-2">
                        {tags.map((tag, index) => (
                            <Badge key={index} className="capitalize">{tag}</Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Link } from "react-router";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  tags: string[];
}

export default function ProductCard({
  id,
  name,
  image,
  tags,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <Card className="w-full shadow-none flex justify-center items-center rounded-none hover:border-primary">
        <CardContent className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-center">{name}</h1>
          <img
            src={image}
            alt={name}
            className="size-20 object-cover mx-auto"
          />
          <div className="flex flex-wrap items-center justify-center  gap-2">
            {tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} className="capitalize">
                {tag}
              </Badge>
            ))}

            {tags.length > 2 && <Badge>+{tags.length - 2}</Badge>}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

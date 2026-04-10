import { Card, CardContent } from "@/shared/ui/card";
import { APP } from "@/shared/configs/app";

export default function AppCard() {
    return (
        <Card className="w-full shadow-none flex justify-center items-center">
            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-3">
                <img src={APP.logo} alt={APP.name} className="size-20 object-cover mx-auto" />
                <h1 className="text-center text-3xl font-bold">{APP.name}</h1>
            </CardContent>
        </Card>
    );
}
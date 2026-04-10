import { ThemeToggle } from "@/features/theme/components/theme-toggle";
import AppLoadingScreen from "@/shared/ui/app-loading-screen";
import { Button } from "@/shared/ui/button";
import { Suspense } from "react";
import { Link, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex justify-between p-2">
                <Button variant={"link"} asChild>
                    <Link to={""}>
                        Junk Shop
                    </Link>
                </Button>
                <ThemeToggle />
            </div>
            <main className="h-full flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-3 p-3 overflow-auto">
                <Suspense fallback={<AppLoadingScreen />}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
}
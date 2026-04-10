import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" aria-label="Theme" className="size-9">
                <span className="size-4" />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark";

    function handleToggle() {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="size-9 shrink-0"
        >
            {isDark ? (
                <Sun className="size-4" />
            ) : (
                <Moon className="size-4" />
            )}
        </Button>
    );
}
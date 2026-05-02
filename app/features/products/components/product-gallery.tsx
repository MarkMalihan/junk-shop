import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/shared/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";

type GalleryModalProps = {
    images: string[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialIndex?: number;
};

export function ProductGallery({
    images,
    open,
    onOpenChange,
    initialIndex = 0,
}: GalleryModalProps) {
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        if (open) setIndex(initialIndex);
    }, [open, initialIndex]);

    if (images.length === 0) return null;

    const hasMultiple = images.length > 1;

    const prev = () =>
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

    const next = () =>
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton={false}
                className="fixed inset-0 z-50 flex h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 bg-background p-0 shadow-none outline-none sm:max-w-none"
            >
                <DialogTitle className="sr-only">Product images</DialogTitle>
                <div className="flex shrink-0 items-center justify-between border-b p-3">
                    <span className="text-sm">
                        {index + 1} / {images.length}
                    </span>
                    <Button size="sm" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                </div>

                <div className="flex min-h-0 flex-1 items-stretch gap-2 px-3 py-3">
                    {hasMultiple && (
                        <Button
                            type="button"
                            size="icon"
                            className="shrink-0 self-center"
                            onClick={prev}
                        >
                            <ChevronLeft />
                        </Button>
                    )}

                    <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center">
                        <img
                            src={images[index]}
                            alt=""
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    {hasMultiple && (
                        <Button
                            type="button"
                            size="icon"
                            className="shrink-0 self-center"
                            onClick={next}
                        >
                            <ChevronRight />
                        </Button>
                    )}
                </div>

                {hasMultiple && (
                    <div className="flex shrink-0 gap-2 overflow-x-auto border-t p-3">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setIndex(i)}
                                className={`h-16 cursor-pointer border ${i === index
                                    ? "border-primary"
                                    : "opacity-60"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
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
            <DialogContent className="md:max-w-2xl lg:max-w-4xl xl:max-w-4xl flex max-h-[80vh] flex-col border bg-background p-0 shadow-lg">
                <DialogTitle className="sr-only" />
                {/* Header */}
                <div className="flex justify-between items-center border-b p-3">
                    <span className="text-sm">
                        {index + 1} / {images.length}
                    </span>
                    <Button size="sm" onClick={() => onOpenChange(false)}>
                        Close
                    </Button>
                </div>

                {/* Main Image */}
                <div className="flex items-center justify-between p-4">
                    {hasMultiple && (
                        <Button size="icon" onClick={prev}>
                            <ChevronLeft />
                        </Button>
                    )}

                    <img
                        src={images[index]}
                        className="max-h-[22vh] md:max-h-[30vh] lg:max-h-[40vh] 2xl:max-h-[50vh] object-contain"
                    />

                    {hasMultiple && (
                        <Button size="icon" onClick={next}>
                            <ChevronRight />
                        </Button>
                    )}
                </div>

                {/* Thumbnails */}
                {hasMultiple && (
                    <div className="flex gap-2 overflow-x-auto p-3 border-t">
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
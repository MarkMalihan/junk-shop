import React from "react"

type feature = {
    name: string,
    description: string
}

type FeatureTableProps = {
    features: feature[]
}

export default function FeatureTable({ features }: FeatureTableProps) {
    return (
        <section className="border rounded-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 bg-muted border-b text-sm font-medium">
                <div className="col-span-1 p-2">Feature</div>
                <div className="col-span-4 p-2">Description</div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="grid grid-cols-5 border-b last:border-b-0 bg-background"
                >
                    <div className="col-span-1 p-2 text-sm font-medium">
                        {feature.name}
                    </div>
                    <div className="col-span-4 p-2 text-sm text-muted-foreground">
                        {feature.description}
                    </div>
                </div>
            ))}
        </section>
    )
}
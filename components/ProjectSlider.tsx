"use client";

import { useEffect, useState } from "react";

const images = [
    "/images/slipvision-1.png",
    "/images/slipvision-2.png",
    "/images/slipvision-3.png",
    "/images/slipvision-4.png",
];

export default function ProjectSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                    src={images[current]}
                    alt="project"
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
            </div>

            <div className="mt-3 flex gap-2">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`overflow-hidden rounded-lg border ${current === index ? "border-blue-400" : "border-white/10"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`thumbnail-${index + 1}`}
                            className="h-16 w-24 object-cover opacity-80 transition hover:opacity-100"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
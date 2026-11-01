"use client";

import Image from "next/image";
import { useState } from "react";
import {
  PRODUCT_IMAGE_HEIGHT,
  PRODUCT_IMAGE_WIDTH,
  type Product,
} from "@/data/products";

type Props = Pick<Product, "name" | "image" | "imageAlt" | "imageFit" | "galleryImages">;

export default function ProductGallery({ name, image, imageAlt, imageFit, galleryImages }: Props) {
  const images = [
    { src: image, alt: imageAlt },
    ...(galleryImages ?? []).filter((item) => item.src !== image),
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <>
      <div
        className="relative w-full aspect-3/2 rounded-3xl overflow-hidden border border-bamboo-100 shadow-sm mb-12"
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          width={PRODUCT_IMAGE_WIDTH}
          height={PRODUCT_IMAGE_HEIGHT}
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className={`w-full h-full ${imageFit === "contain" ? "object-contain bg-bamboo-50" : "object-cover"}`}
        />
      </div>

      {images.length > 1 && (
        <section className="mb-12" aria-label={`${name} image thumbnails`}>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {images.map((item, index) => (
              <button
                type="button"
                key={item.src}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${name} image ${index + 1} in main view`}
                aria-pressed={activeIndex === index}
                className={`relative aspect-3/2 rounded-2xl overflow-hidden border cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bamboo-600 ${activeIndex === index ? "border-bamboo-600 ring-2 ring-bamboo-600" : "border-bamboo-100"}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={PRODUCT_IMAGE_WIDTH}
                  height={PRODUCT_IMAGE_HEIGHT}
                  loading="lazy"
                  sizes="(max-width: 1024px) 33vw, 320px"
                  className="w-full h-full object-cover bg-bamboo-50"
                />
              </button>
            ))}
          </div>
        </section>
      )}

    </>
  );
}

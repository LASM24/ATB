// carousel.tsx
"use client"; // Indica que es un componente del lado del cliente

import { useState } from "react";

interface Destination {
  img: string;
  title: string;
  description: string;
}

interface CarouselProps {
  images: Destination[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="lugares text-center">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full relative">
              <img src={image.img} alt={image.title} className="img_dlg"/>
              <div className="ttt">
                <h3 className="text-6xl">{image.title}</h3>
                <p className="mt-4 text-3xl">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Carousel;

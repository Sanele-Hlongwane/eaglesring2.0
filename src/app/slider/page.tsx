"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-4 bg-gray-900 rounded-lg flex flex-col items-center justify-center"
          >
            <Image
  src={slide.image}
  alt={slide.title}
  width={500} // Adjust width and height as per your design
  height={300}
  className="w-full h-64 object-cover rounded-lg mb-4"
/>
            <h4 className="text-xl font-semibold mb-2 text-center text-white">{slide.title}</h4>
            <p className="text-center text-white">{slide.content}</p>
            <button>Join Now</button>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-popover-foreground text-neutral-50 p-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-popover-foreground text-neutral-50 p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;

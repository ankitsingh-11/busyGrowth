"use client";

import { motion } from "framer-motion";

const topImages = [
  "/images/in1.png",
  "/images/in2.png",
  "/images/in3.png",
  "/images/in4.png",
  "/images/in5.png",
  "/images/in6.png",

];

const bottomImages = [
  "/images/in7.png",
  "/images/in8.png",
  "/images/in9.png",
  "/images/in10.png",
  "/images/in11.png",
  "/images/in12.png",
  "/images/in13.png",

];

const SliderRow = ({ images, direction = "left" }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="shrink-0 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden
            w-62.5 h-35
            sm:w-75 sm:h-42.5
            lg:w-75 lg:h-50"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function BrandsSlider() {
  return (
    <section className="py-16 bg-[#f7f9fc] overflow-hidden">

      {/* Heading */}

      <div className="max-w-7xl mx-auto px-5 text-center mb-12">

        <h2 className="text-4xl lg:text-5xl font-bold text-[#0E2C5A]">
          Industries
        </h2>

        <h3 className="text-3xl lg:text-5xl font-bold text-[#16B364] mt-2">
          We've Served
        </h3>

        <div className="w-40 h-1 bg-[#0E2C5A] rounded-full mx-auto mt-4" />

        <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
          BusyGrowth provides its customised services to several different
          industries.
        </p>

      </div>

      {/* Top Slider */}

      <SliderRow
        images={topImages}
        direction="left"
      />

      {/* Space */}

      <div className="h-6" />

      {/* Bottom Slider */}

      <SliderRow
        images={bottomImages}
        direction="right"
      />

    </section>
  );
}
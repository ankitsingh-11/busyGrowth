"use client";

import { motion } from "framer-motion";

const tools = [
  "/images/t1.png",
  "/images/t2.jpeg",
  "/images/t3.png",
  "/images/t4.png",
  "/images/t5.png",
  "/images/t6.png",
  "/images/t7.png",
  "/images/t8.jpeg",
  "/images/t9.jpeg",
  "/images/t10.png",
  "/images/t11.png",
];

export default function ToolsSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#12325B]">
          Tools & Technology{" "}
          <span className="text-[#1db954] relative inline-block">
            Partners
            <svg
              className="absolute left-0 -bottom-3 w-full"
              viewBox="0 0 170 18"
              fill="none"
            >
              <path
                d="M2 15C45 4 126 3 168 13"
                stroke="#12325B"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative">

        {/* Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-8"
        >
          {[...tools, ...tools].map((img, index) => (
            <div
              key={index}
              className="
              flex
              items-center
              justify-center
              shrink-0
              h-24
              w-32

              sm:h-28
              sm:w-36

              md:h-32
              md:w-44

              lg:h-36
              lg:w-48

              transition
              duration-300
              hover:scale-110
              "
            >
              <img
                src={img}
                alt="tool"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
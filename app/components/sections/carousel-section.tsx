"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const portfolioItems = [
  "/trust-city/1.webp",
  "/trust-city/2.jpg",
  "/trust-city/3.jpg",
  "/trust-city/4.webp",
  "/trust-city/5.jpg",
  "/trust-city/6.jpg",
]

export function CarouselSection() {
  // Duplicate for seamless loop
  const items = [...portfolioItems, ...portfolioItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by homes throughout the city.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="shrink-0 w-73 md:w-100px rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <Image
                src={src || "/placeholder.svg"}
                width={300}
                height={300}
                alt={`Portfolio example ${(i % portfolioItems.length) + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "This product has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 30%.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    company: "CodeCraft Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As a developer, I appreciate the clean architecture and robust API. Integration was seamless, and the documentation is comprehensive. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Innovate Labs",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "We've tried several similar solutions, but this one stands out for its reliability and customer support. Our team adopted it within days.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "Startup Ventures",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "This platform has been instrumental in our company's growth. The analytics features provide valuable insights that help us make data-driven decisions.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Handle navigation
  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="w-full py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
              Don't just take our word for it — hear from some of our satisfied customers.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div
            className="relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-slate-800 p-8 md:p-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="absolute top-4 right-4 text-slate-400 dark:text-slate-600">
              <Quote size={48} className="opacity-20" />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="flex flex-col h-full"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < testimonials[currentIndex].rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-300 dark:text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="relative text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed flex-grow">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "bg-slate-800 dark:bg-white scale-125" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="text-slate-700 dark:text-slate-200" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="text-slate-700 dark:text-slate-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

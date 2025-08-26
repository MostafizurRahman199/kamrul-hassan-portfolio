"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X, ChevronLeft } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
  category: string
  isCenter?: boolean
  position?: { row: number; col: number }
}

const GallerySection: React.FC = () => {
  const [currentCenterIndex, setCurrentCenterIndex] = useState<number>(0)
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "HR Leadership Excellence",
      description: "Leading transformative HR initiatives across diverse organizations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Leadership"
    },
    {
      id: 2,
      title: "Talent Development",
      description: "Creating comprehensive training and mentorship programs",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "Development"
    },
    {
      id: 3,
      title: "Employee Engagement",
      description: "Building inclusive workplace cultures that drive success",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Culture"
    },
    {
      id: 4,
      title: "Strategic Planning",
      description: "Developing HR strategies aligned with business objectives",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Strategy"
    },
    {
      id: 5,
      title: "Performance Management",
      description: "Implementing systems that drive organizational excellence",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      category: "Performance"
    },
    {
      id: 6,
      title: "Innovation & Technology",
      description: "Leveraging modern tools to enhance HR efficiency",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "Innovation"
    },
    {
      id: 7,
      title: "Diversity & Inclusion",
      description: "Creating workplaces that celebrate and leverage differences",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
      category: "Diversity"
    },
    {
      id: 8,
      title: "Change Management",
      description: "Guiding organizations through transformational periods",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Change"
    },
    {
      id: 9,
      title: "Employee Wellness",
      description: "Promoting health and well-being in the workplace",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Wellness"
    }
  ]

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isAutoRotating && !isHovering) {
      interval = setInterval(() => {
        setCurrentCenterIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [galleryItems.length, isAutoRotating, isHovering])

  const createMatrixLayout = (): GalleryItem[][] => {
    const matrix: GalleryItem[][] = []
    const rotatedItems = [...galleryItems]
    const shift = currentCenterIndex

    for (let i = 0; i < shift; i++) {
      rotatedItems.push(rotatedItems.shift()!)
    }

    let itemIndex = 0

    for (let row = 0; row < 3; row++) {
      const rowItems: GalleryItem[] = []
      for (let col = 0; col < 3; col++) {
        if (row === 1 && col === 1) {
          rowItems.push({
            ...rotatedItems[0],
            isCenter: true,
            position: { row, col }
          })
        } else {
          const nextIndex = (itemIndex + 1) % rotatedItems.length
          const item = rotatedItems[nextIndex]
          rowItems.push({
            ...item,
            isCenter: false,
            position: { row, col }
          })
          itemIndex++
        }
      }
      matrix.push(rowItems)
    }
    return matrix
  }

  const matrix = createMatrixLayout()

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item)
    setIsAutoRotating(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    setIsAutoRotating(true)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id='gallery' className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-transparent to-blue-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-amber-500">Matrix</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hover to pause rotation • Click any image to view fullscreen
          </p>
        </div>

        {/* Matrix Gallery */}
        <div
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {matrix.map((row, rowIndex) =>
              row.map((item, colIndex) => (
                <motion.div
                  key={`${rowIndex}-${colIndex}-${item.id}`}
                  layout
                  initial={{ opacity: 0, y: -100, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: (rowIndex + colIndex) * 0.1
                    }
                  }}
                  className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-700 cursor-pointer ${
                    item.isCenter
                      ? 'col-span-1 row-span-1 border-amber-500 shadow-2xl shadow-amber-500/30'
                      : 'border-gray-700 hover:border-amber-500/50'
                  }`}
                  onClick={() => handleImageClick(item)}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    item.isCenter ? 'h-48 md:h-56' : 'h-40 md:h-48'
                  }`}>
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.isCenter
                          ? 'bg-amber-500 text-black'
                          : 'bg-black/70 text-amber-400'
                      }`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Hover Text Content */}
                    <div className={`absolute inset-0 flex flex-col justify-end p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 ${
                      item.isCenter ? 'p-6' : 'p-3'
                    }`}>
                      <h3 className={`font-bold mb-2 text-amber-400 group-hover:text-amber-300 transition-colors duration-300 ${
                        item.isCenter ? 'text-2xl' : 'text-sm'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ${
                        item.isCenter ? 'text-base' : 'text-xs'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-8 sm:-top-10 md:-top-12 right-0 sm:right-2 text-white hover:text-amber-400 transition-colors z-10"
                >
                  <X size={24} className="sm:w-8 sm:h-8 md:w-8 md:h-8" />
                </button>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 bg-gray-900 rounded-xl overflow-hidden">
                  {/* Main Image */}
                  <div className="h-48 sm:h-64 md:h-80 lg:h-[60vh] relative">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4 md:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
                        {selectedImage.description}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Navigation Grid */}
                  <div className="p-3 sm:p-4 md:p-6">
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                      <span className="px-2 sm:px-3 py-1 bg-amber-500 text-black rounded-full text-xs sm:text-sm font-bold sm:mr-3 w-fit">
                        {selectedImage.category}
                      </span>
                      <span className="sm:ml-0">Gallery Navigation</span>
                    </h4>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                      {galleryItems.map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`aspect-square overflow-hidden rounded-lg border-2 cursor-pointer transition-all ${
                            item.id === selectedImage.id
                              ? 'border-amber-500 scale-105 shadow-lg shadow-amber-500/30'
                              : 'border-gray-700 hover:border-amber-400'
                          }`}
                          onClick={() => setSelectedImage(item)}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6 gap-3 sm:gap-4">
                      <button
                        onClick={() => {
                          const prevIndex =
                            (galleryItems.findIndex(img => img.id === selectedImage.id) - 1 + galleryItems.length) % galleryItems.length
                          setSelectedImage(galleryItems[prevIndex])
                        }}
                        className="px-4 sm:px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition flex items-center justify-center text-sm sm:text-base"
                      >
                        <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        Previous
                      </button>
                      <button
                        onClick={() => {
                          const nextIndex =
                            (galleryItems.findIndex(img => img.id === selectedImage.id) + 1) % galleryItems.length
                          setSelectedImage(galleryItems[nextIndex])
                        }}
                        className="px-4 sm:px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition flex items-center justify-center text-sm sm:text-base"
                      >
                        Next
                        <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default GallerySection

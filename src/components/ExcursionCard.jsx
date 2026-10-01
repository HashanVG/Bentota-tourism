import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ExcursionCard({ trip, index = 0 }) {
  const navigate = useNavigate()
  const [currentLocIndex, setCurrentLocIndex] = useState(0)

  const hasMultipleLocations = trip.locations && trip.locations.length > 1

  const handlePrevLoc = (e) => {
    e.stopPropagation()
    if (!hasMultipleLocations) return
    setCurrentLocIndex((prev) => (prev - 1 + trip.locations.length) % trip.locations.length)
  }

  const handleNextLoc = (e) => {
    e.stopPropagation()
    if (!hasMultipleLocations) return
    setCurrentLocIndex((prev) => (prev + 1) % trip.locations.length)
  }

  const currentLocation = hasMultipleLocations
    ? trip.locations[currentLocIndex]
    : null

  const displayImage = currentLocation?.image || trip.image

  const handleCardClick = () => {
    navigate(
      `/excursions/${
        trip.slug ||
        trip.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      }`
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100"
    >
      <div>
        {/* Photo Container */}
        <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden bg-slate-100">
          {hasMultipleLocations ? (
            trip.locations.map((loc, idx) => (
              <img
                key={idx}
                src={loc.image}
                alt={loc.name}
                loading="eager"
                className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-opacity duration-150 ${
                  idx === currentLocIndex
                    ? 'opacity-100 z-0'
                    : 'opacity-0 pointer-events-none'
                }`}
              />
            ))
          ) : (
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}



          {/* Manual arrow buttons to switch location */}
          {hasMultipleLocations && (
            <>
              <button
                type="button"
                onClick={handlePrevLoc}
                aria-label="Previous location"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-forest-dark flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <ChevronLeft className="w-4 h-4 text-forest-dark" />
              </button>
              <button
                type="button"
                onClick={handleNextLoc}
                aria-label="Next location"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-forest-dark flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
              >
                <ChevronRight className="w-4 h-4 text-forest-dark" />
              </button>
            </>
          )}

          {/* Pagination dots for locations */}
          {hasMultipleLocations && (
            <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
              {trip.locations.map((loc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentLocIndex(idx)
                  }}
                  aria-label={`Go to ${loc.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentLocIndex
                      ? 'w-4 bg-white shadow-sm'
                      : 'w-1.5 bg-white/60 hover:bg-white/90'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          <h3 className="font-display text-sm sm:text-base md:text-lg text-forest-dark leading-snug line-clamp-2">
            {trip.title}
          </h3>
        </div>
      </div>

      {/* Read More Link (Black text with underline) */}
      <div className="pt-0 pb-4 px-4 sm:pb-5 sm:px-5">
        <button
          onClick={handleCardClick}
          className="text-black underline underline-offset-4 hover:text-forest-primary font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
        >
          Read More
        </button>
      </div>
    </motion.div>
  )
}

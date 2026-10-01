import { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Compass } from 'lucide-react'
import { excursionCategories, excursions } from '../../data/excursionsData'
import ExcursionCard from '../../components/ExcursionCard'

export default function ExcursionsPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState('one-day')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const params = new URLSearchParams(location.search)
    const cat = params.get('category')
    if (cat && ['one-day', 'two-day', 'special'].includes(cat)) {
      setSelectedCategory(cat)
    }
  }, [location])

  const filteredExcursions = useMemo(() => {
    return excursions.filter((trip) => trip.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-24">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
          Samantha Tours & Travels
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-dark mt-2">
          Explore Our Excursions
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Discover the wonders of Sri Lanka from Bentota with tailored private tours, dedicated English-speaking drivers, and modern air-conditioned transport.
        </p>

        {/* ── Category Tabs ─────────────────────────────────────────── */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex p-1.5 bg-gray-200/80 rounded-full gap-1 border border-gray-300/60 overflow-x-auto max-w-full">
            {excursionCategories.map((cat) => {
              const isActive = selectedCategory === cat.id
              const isSpecial = cat.id === 'special'
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? isSpecial
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-forest-primary text-white shadow-sm'
                      : isSpecial
                      ? 'bg-red-50 text-red-600 hover:bg-red-100'
                      : 'text-forest-dark/75 hover:text-forest-primary hover:bg-white/70'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Cards Grid ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExcursions.map((trip, i) => (
            <ExcursionCard
              key={`${trip.category}-${trip.id || i}`}
              trip={trip}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { excursions } from '../../data/excursionsData'

export default function ExcursionDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [selectedLocIndex, setSelectedLocIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSelectedLocIndex(0)
  }, [slug])

  // Match excursion by slug or formatted title
  const tour = excursions.find(
    (item) =>
      item.slug === slug ||
      item.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === slug
  )

  if (!tour) {
    return (
      <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 pt-28 pb-16">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-xs border border-gray-100">
          <h2 className="font-display text-2xl text-forest-dark mb-2">Excursion Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">
            The excursion you are looking for could not be found.
          </p>
          <Link
            to="/#excursions"
            className="inline-flex items-center gap-2 bg-forest-primary text-white font-semibold px-6 py-2.5 rounded-full hover:bg-forest-primary-light transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Excursions
          </Link>
        </div>
      </div>
    )
  }

  const hasMultipleLocations = tour.locations && tour.locations.length > 1
  const activeLocation = hasMultipleLocations ? tour.locations[selectedLocIndex] : null

  // Active photo and description change dynamically per selected location
  const currentPhoto = activeLocation ? activeLocation.image : tour.image
  const currentParagraphs = activeLocation
    ? activeLocation.paragraphs
    : tour.paragraphs || [tour.overview]

  const categoryLabel =
    tour.category === 'one-day'
      ? 'One Day Trip'
      : tour.category === 'two-day'
      ? 'Two Day Trip'
      : 'Special Trip'

  const handlePrevLocation = () => {
    if (!hasMultipleLocations) return
    setSelectedLocIndex(
      (prev) => (prev - 1 + tour.locations.length) % tour.locations.length
    )
  }

  const handleNextLocation = () => {
    if (!hasMultipleLocations) return
    setSelectedLocIndex((prev) => (prev + 1) % tour.locations.length)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Samantha Tours, I would like to inquire about the ${tour.title} excursion.`
  )
  const whatsappUrl = `https://wa.me/94772408371?text=${whatsappMessage}`

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* ── Back Navigation ─────────────────────────────────────────── */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-forest-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Excursions
          </button>
        </div>

        {/* ── Main Clean Card ─────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-gray-100">
          {/* Photo with manual switcher if multiple locations */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-100 overflow-hidden group">
            {hasMultipleLocations ? (
              tour.locations.map((loc, idx) => (
                <img
                  key={idx}
                  src={loc.image}
                  alt={loc.name}
                  loading="eager"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
                    idx === selectedLocIndex
                      ? 'opacity-100 z-0'
                      : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))
            ) : (
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Category Label */}
            <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-forest-primary text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
              {categoryLabel}
            </span>

            {/* Location Tag */}
            {activeLocation && (
              <span className="absolute top-4 right-4 bg-forest-dark/85 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-forest-gold shrink-0" />
                {activeLocation.name}
              </span>
            )}

            {/* Manual arrows to switch location photo */}
            {hasMultipleLocations && (
              <>
                <button
                  onClick={handlePrevLocation}
                  aria-label="Previous location"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-forest-dark flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextLocation}
                  aria-label="Next location"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-forest-dark flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-6">
            {/* Title */}
            <div>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-forest-dark">
                {tour.title}
              </h1>
            </div>

            {/* Manual Location Selector Buttons (for 2-day / multi-location trips) */}
            {hasMultipleLocations && (
              <div className="space-y-2 pt-1 pb-2">
                <p className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
                  Select Location to View Details & Photos:
                </p>
                <div className="flex flex-wrap gap-2">
                  {tour.locations.map((loc, idx) => {
                    const isSelected = idx === selectedLocIndex
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedLocIndex(idx)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-forest-primary text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-forest-primary'
                        }`}
                      >
                        <MapPin
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-forest-gold' : 'text-gray-400'
                          }`}
                        />
                        <span>{loc.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Information about the place (dynamically updates per location) */}
            <div className="space-y-4 pt-2">
              <h2 className="text-xs uppercase tracking-widest font-bold text-forest-primary flex items-center gap-1.5">
                About {activeLocation ? activeLocation.name : 'the Place'}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                {currentParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* WhatsApp Booking / Inquire */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-500">
                Interested in visiting {tour.title}? Contact us for private tour arrangements.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-6 rounded-full shadow-xs transition-colors text-sm cursor-pointer whitespace-nowrap"
              >
                <FaWhatsapp className="w-5 h-5" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

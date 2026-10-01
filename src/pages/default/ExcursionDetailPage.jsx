import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Phone,
  ShieldCheck,
  Compass,
  Car,
  Sparkles,
  Info,
  Check,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { excursions } from '../../data/excursionsData'

export default function ExcursionDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  // Find tour by slug or title match
  const tour = excursions.find(
    (item) =>
      item.slug === slug ||
      item.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === slug
  )

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-32 pb-20">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Compass className="w-12 h-12 text-forest-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl text-forest-dark mb-2">Excursion Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">
            The excursion you are looking for doesn't exist or may have been moved.
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

  // Related tours (other tours in same category, or first 3 others)
  const relatedTours = excursions
    .filter((item) => item.id !== tour.id)
    .slice(0, 3)

  const whatsappMessage = encodeURIComponent(
    `Hello Samantha Tours, I am interested in the "${tour.title}" excursion. Could you please share more details and availability?`
  )
  const whatsappUrl = `https://wa.me/94772408371?text=${whatsappMessage}`

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      {/* ── Breadcrumb & Back ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-forest-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link to="/" className="hover:text-forest-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/#excursions" className="hover:text-forest-primary transition-colors">
              Excursions
            </Link>
            <span>/</span>
            <span className="text-forest-dark font-medium truncate max-w-40 sm:max-w-xs">
              {tour.title}
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Layout ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-forest-primary/10 text-forest-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {tour.category === 'one-day'
                ? 'One Day Trip'
                : tour.category === 'two-day'
                ? 'Two Day Trip'
                : 'Special Trip'}
            </span>
            {tour.tag && (
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                {tour.tag}
              </span>
            )}
          </div>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl text-forest-dark leading-tight">
            {tour.title}
          </h1>

          {/* Quick info row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-forest-primary shrink-0" />
              <div>
                <p className="text-[11px] text-gray-400 uppercase font-semibold">Duration</p>
                <p className="font-medium text-forest-dark">{tour.fullDuration || 'Full Day'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-forest-primary shrink-0" />
              <div>
                <p className="text-[11px] text-gray-400 uppercase font-semibold">Pick-up / Location</p>
                <p className="font-medium text-forest-dark">Bentota & Coastal Resorts</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Car className="w-4 h-4 text-forest-primary shrink-0" />
              <div>
                <p className="text-[11px] text-gray-400 uppercase font-semibold">Transport</p>
                <p className="font-medium text-forest-dark">Private Air-Conditioned Vehicle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Left Column (Tour Details) ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-slate-100 h-64 sm:h-96 lg:h-110">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs">
              <h2 className="font-display text-xl sm:text-2xl text-forest-dark mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-forest-primary" />
                About This Excursion
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {tour.overview}
              </p>
              {tour.departure && (
                <div className="mt-6 p-4 rounded-xl bg-forest-primary/5 border border-forest-primary/15 flex items-start gap-3">
                  <Info className="w-5 h-5 text-forest-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-forest-primary uppercase tracking-wider">
                      Departure Timing
                    </p>
                    <p className="text-xs sm:text-sm text-forest-dark mt-0.5">
                      {tour.departure}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Tour Highlights */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs">
                <h2 className="font-display text-xl sm:text-2xl text-forest-dark mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-forest-primary" />
                  Excursion Highlights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {tour.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50/80 p-3 rounded-xl border border-gray-100"
                    >
                      <Check className="w-4 h-4 text-forest-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Suggested Itinerary */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xs">
                <h2 className="font-display text-xl sm:text-2xl text-forest-dark mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-forest-primary" />
                  Tour Itinerary & Timeline
                </h2>
                <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-forest-primary/20">
                  {tour.itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-forest-primary ring-4 ring-forest-primary/10" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span className="text-xs font-bold text-forest-primary tracking-wider uppercase shrink-0">
                          {step.time}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {step.activity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included & What to Bring */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Included */}
              {tour.included && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs">
                  <h3 className="font-display text-lg text-forest-dark mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-primary" />
                    What's Included
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <Check className="w-3.5 h-3.5 text-forest-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What to bring */}
              {tour.whatToBring && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs">
                  <h3 className="font-display text-lg text-forest-dark mb-4 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-forest-primary" />
                    What to Bring
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.whatToBring.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-primary shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* ── Right Column (Sticky Booking & Contact Card) ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md">
                <div className="flex items-center gap-3 pb-5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-forest-primary/10 flex items-center justify-center text-forest-primary">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-forest-dark">
                      Samantha Tours & Travels
                    </h3>
                    <p className="text-xs text-gray-500">Private Guided Excursion</p>
                  </div>
                </div>

                <div className="py-5 space-y-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Departure</span>
                    <span className="font-semibold text-forest-dark">Bentota & nearby</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Transport</span>
                    <span className="font-semibold text-forest-dark">Private AC vehicle</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Availability</span>
                    <span className="font-semibold text-emerald-600">Every day</span>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-4 rounded-xl shadow-xs transition-colors text-sm cursor-pointer"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Book via WhatsApp
                  </a>

                  <a
                    href="tel:+94772408371"
                    className="w-full flex items-center justify-center gap-2.5 bg-forest-primary hover:bg-forest-primary-light text-white font-bold py-3.5 px-4 rounded-xl shadow-xs transition-colors text-sm cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    Call: +94 77 240 8371
                  </a>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-forest-primary hover:text-forest-primary text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors text-xs cursor-pointer"
                  >
                    Custom Request / Inquiry Form
                  </Link>
                </div>

                {/* Trust Points */}
                <div className="mt-6 pt-5 border-t border-gray-100 space-y-2.5 text-[11px] text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-primary shrink-0" />
                    <span>Free hotel pick-up & drop-off in Bentota</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-primary shrink-0" />
                    <span>Licensed English-speaking driver guides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-forest-primary shrink-0" />
                    <span>Customizable stops tailored to your pace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Excursions ───────────────────────────────────────── */}
        <div className="mt-16 pt-12 border-t border-gray-200/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
                More Excursions
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-forest-dark mt-1">
                Other popular tours you might enjoy
              </h2>
            </div>
            <Link
              to="/#excursions"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-forest-primary hover:text-forest-primary-light uppercase tracking-wider"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-primary">
                      {item.category === 'one-day' ? 'One Day' : item.category === 'two-day' ? 'Two Day' : 'Special'}
                    </span>
                    <h3 className="font-display text-base font-bold text-forest-dark mt-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                      {item.overview}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button
                    onClick={() => navigate(`/excursions/${item.slug || item.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="w-full bg-forest-primary/10 hover:bg-forest-primary hover:text-white text-forest-primary font-semibold text-xs py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
  Phone,
  PenLine,
  ShieldCheck,
} from 'lucide-react'
import {FaTripadvisor} from 'react-icons/fa'
import ReviewModal from '../../components/ReviewModal'
import { 
  subscribeToLatestReviews, 
  calculateAverageRating, 
} from '../../services/reviewService'
import hero from '../../assets/home/hero.svg'
import heroMobile from '../../assets/fba82c73204c5d020e8ce08eaa4a9cb0.jpg'
import about1 from '../../assets/about/about5.jpg'
import about2 from '../../assets/about/about4.webp'
import cta from '../../assets/cta/cta2.jpg'
import { excursionCategories, excursions } from '../../data/excursionsData'
import ExcursionCard from '../../components/ExcursionCard'

{/*Data for the relevant sections*/ }
const stats = [
  { value: 'x+', label: 'Excursions run' },
  { value: 'x', label: 'Locations' },
  { value: 'x', label: 'Years on the trail' },
]



{/*Multiple lines for the background */ }
function TopoLines({ opacity = 0.08, count = 6, viewBox = '0 0 1000 600' }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
    >
      {[...Array(count)].map((_, i) => (
        <path
          key={i}
          d={`M ${-100 + i * 25} 0 C ${150 + i * 30} ${120 + i * 15}, ${350 - i * 20} ${220 + i * 10}, ${600 + i * 25} ${170 + i * 20} S ${900 + i * 15} ${320 + i * 10}, 1200 ${270 + i * 15}`}
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

function DecimalStars({ rating, size = "w-3.5 h-3.5" }) {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => {
        let fillPercent = 0;
        if (rating >= i + 1) {
          fillPercent = 100;
        } else if (rating > i) {
          fillPercent = Math.round((rating - i) * 100);
        }

        return (
          <div key={i} className={`relative ${size} inline-block shrink-0`}>
            {/* Background empty gray star */}
            <Star className={`${size} text-gray-200 fill-gray-200`} />
            
            {/* Foreground filled gold star clipped by exact percentage */}
            {fillPercent > 0 && (
              <div
                className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
                style={{ width: `${fillPercent}%` }}
              >
                <Star
                  className={`${size} fill-forest-gold text-forest-gold max-w-none shrink-0`}
                  style={{ width: '0.875rem', height: '0.875rem', minWidth: '0.875rem' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function HomePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewDirection, setReviewDirection] = useState(1)
  const [reviewsFromDb, setReviewsFromDb] = useState([])
  const [isLoadingReviews, setIsLoadingReviews] = useState(true)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('one-day')
  const [showAllExcursions, setShowAllExcursions] = useState(false)

  const displayedExcursions = useMemo(() => {
    if (showAllExcursions) {
      return excursions
    }
    return excursions.filter((trip) => trip.category === selectedCategory)
  }, [showAllExcursions, selectedCategory])

  // Sync category selection with Navbar clicks or URL parameters
  useEffect(() => {
    const handleCategoryEvent = (e) => {
      if (e.detail && ['one-day', 'two-day', 'special'].includes(e.detail)) {
        setSelectedCategory(e.detail)
        setShowAllExcursions(false)
      }
    }
    window.addEventListener('select-excursion-category', handleCategoryEvent)

    const params = new URLSearchParams(location.search)
    const cat = params.get('category')
    if (cat && ['one-day', 'two-day', 'special'].includes(cat)) {
      setSelectedCategory(cat)
      setShowAllExcursions(false)
    }

    if (location.hash === '#excursions') {
      setTimeout(() => {
        const el = document.getElementById('excursions')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
    }

    if (location.hash === '#reviews') {
      setTimeout(() => {
        const el = document.getElementById('reviews')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
    }

    return () => {
      window.removeEventListener('select-excursion-category', handleCategoryEvent)
    }
  }, [location])

  // Real-time synchronization directly from Firebase Firestore:
  // If a review is added or deleted in Firebase, onSnapshot updates state instantly
  useEffect(() => {
    const unsubscribe = subscribeToLatestReviews((fetchedReviews) => {
      setReviewsFromDb(fetchedReviews || []);
      setIsLoadingReviews(false);
    }, 10);

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Retrieve reviews directly from Firebase Firestore in real time
  const displayedReviews = useMemo(() => {
    // Only real reviews from Firestore (tripadvisor reviews and website reviews)
    const active = reviewsFromDb.filter((r) => r.source === 'tripadvisor' || r.source === 'website');
    if (active.length > 0) {
      return active.slice(0, 10);
    }
    return reviewsFromDb.filter((r) => r.source !== 'test').slice(0, 10);
  }, [reviewsFromDb]);

  // Average star rating calculated across displayed reviews (updates dynamically)
  const reviewStats = useMemo(() => {
    return calculateAverageRating(displayedReviews);
  }, [displayedReviews]);

  const goToReview = (dir) => {
    if (displayedReviews.length <= 1) return;
    setReviewDirection(dir);
    setReviewIndex((prev) => (prev + dir + displayedReviews.length) % displayedReviews.length);
  };

  const safeReviewIndex = displayedReviews.length > 0 && reviewIndex < displayedReviews.length ? reviewIndex : 0;
  const activeReview = displayedReviews[safeReviewIndex];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-150 w-full overflow-hidden bg-forest-dark">
        {/* Mobile View Background (< md) */}
        <img
          src={heroMobile}
          alt="Sigiriya Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
        />

        {/* Desktop View Background (>= md) */}
        <img
          src={hero}
          alt="Bentota Sri Lanka"
          className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark" />
        <TopoLines />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 -translate-y-8 sm:-translate-y-10 md:translate-y-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[1] md:leading-[1.02] tracking-tight max-w-5xl"
          >
            <span className="font-extrabold">Ayubowan</span>
            <br />
            <span className="text-forest-accent-light font-extrabold inline-block mt-0.5 sm:mt-1">Sri Lanka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-200 font-display font-semibold mt-3 sm:mt-4 md:mt-5 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide"
          >
            Bentota Samantha Tours & Travels
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
          >
            <Link
              to="/excursions"
              className="flex items-center justify-center gap-2 bg-forest-primary text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-forest-primary-light transition-colors"
            >
              Explore Excursions <ArrowRight className="w-4 h-4 " />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section id="about" className="bg-white pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={about2}
              alt="Guide leading a forest trail"
              className="rounded-2xl w-full h-105 object-cover sm:block hidden"
            />
            <img
              src={about1}
              alt="Wildlife sighting"
              className="absolute -bottom-8 -right-6 w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-2xl border-4 border-white shadow-lg hidden sm:block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
              About Us
            </span>
            <h2 className="font-display text-2xl lg:text-5xl text-forest-dark mt-3 mb-6 leading-tight">
              Welcome to Bentota Samantha Tours & Travels
            </h2>
            <p className="text-forest-text leading-relaxed mb-8 text-justify">
              Samantha Tours & Travels is a joint venture with thoroughly Sri Lankan roots. Samantha Tours & Travels’ main ambition is to be a brand leader in the tourist and leisure industry. We have long associations with leading international tour operators, and our clientele base spans travelers from across the globe. Our clientele base is thoroughly diverse, and we cater to the distinct tastes of our clients to their maximum satisfaction. Our motto is the safety and satisfaction of our clients. Our wealth is the goodwill of our clients. We highly regard the privacy of our clients.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-forest-primary">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center mt-16">
          <Link
            to="/about"
            className=" inline-flex items-center gap-2 text-forest-primary font-semibold hover:bg-forest-primary hover:text-white rounded-full border px-16 py-3"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* ── Excursions ────────────────────────────────────────────────── */}
      <section id="excursions" className="bg-gray-50 py-16 sm:py-24 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-14 px-1 sm:px-0">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
                Excursions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest-dark mt-2 sm:mt-3">
                Pick your tour.
              </h2>
              {showAllExcursions && (
                <p className="text-xs sm:text-sm text-forest-primary font-semibold mt-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-forest-primary inline-block" />
                  Showing all trips: One Day, Two Day & Special Trips ({displayedExcursions.length} excursions)
                </p>
              )}
            </div>

            {/* Category tabs: One-Day Trips, Two-Day Trips, Special Trips */}
            <div className="inline-flex p-1.5 bg-gray-200/80 rounded-full gap-1 border border-gray-300/60 self-start sm:self-auto overflow-x-auto max-w-full">
              {excursionCategories.map((cat) => {
                const isActive = !showAllExcursions && selectedCategory === cat.id
                const isSpecial = cat.id === 'special'
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id)
                      setShowAllExcursions(false)
                    }}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {displayedExcursions.map((trip, i) => (
              <ExcursionCard key={`${trip.category}-${trip.id || i}`} trip={trip} index={i} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          {!showAllExcursions ? (
            <button
              type="button"
              onClick={() => setShowAllExcursions(true)}
              className="inline-flex items-center gap-2 text-forest-primary font-semibold hover:bg-forest-primary hover:text-white rounded-full border border-forest-primary px-8 py-3 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
            >
              <span>View All Excursions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setShowAllExcursions(false)
                const el = document.getElementById('excursions')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 bg-forest-primary text-white font-semibold hover:bg-forest-primary-light rounded-full border border-forest-primary px-8 py-3 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative bg-forest-primary py-20 px-6 overflow-hidden">
        <img src={cta} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-primary/30" />
        <TopoLines opacity={0.08} count={5} viewBox="0 0 1000 300" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl lg:text-6xl text-white leading-tight ">
            Ready for your next trail?
          </h2>
          <p className="text-white/75 font-semibold mt-4 max-w-lg mx-auto">
            Tell us what you're looking for and we'll match you with the right guide and route.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-forest-gold text-white font-semibold px-7 py-3 rounded-lg hover:bg-forest-primary-light transition-colors"
            >
              Plan Your Trip <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+94772408371"
              className="flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> +94 77 240 8371
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────── */}
      <section id="reviews" className="bg-white py-24 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
            From the trail log
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-dark mt-3 mb-4">
            Our Latest Reviews
          </h2>

          {/* Average Rating Bar */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-2.5 bg-forest-primary/5 border border-forest-primary/15 rounded-full px-4 py-2">
              <DecimalStars rating={reviewStats.count > 0 ? reviewStats.average : 5.0} />
              <span className="text-sm font-bold text-forest-dark whitespace-nowrap">
                {reviewStats.count > 0 ? reviewStats.average.toFixed(1) : '5.0'}
              </span>
              <span className="text-xs text-gray-500 border-l border-gray-200 pl-2.5 whitespace-nowrap">
                Based on Web Reviews
              </span>
            </div>
          </div>

          {displayedReviews.length === 0 ? (
            <div className="py-12 px-6 rounded-2xl bg-gray-50 border border-gray-100 max-w-md mx-auto my-6 text-center">
              <Quote className="w-8 h-8 text-forest-accent mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-display text-lg text-forest-dark font-medium mb-1">No reviews yet</p>
              <p className="text-xs text-gray-500 mb-5">Be the first traveler to share your tour experience!</p>
            </div>
          ) : (
            <>
              <div className="relative min-h-55 flex items-center justify-center">
                <AnimatePresence mode="wait" custom={reviewDirection}>
                  <motion.div
                    key={safeReviewIndex}
                    custom={reviewDirection}
                    initial={{ opacity: 0, x: reviewDirection * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reviewDirection * -40 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full"
                  >
                    <Quote className="w-8 h-8 text-forest-accent mx-auto mb-5" strokeWidth={1.5} />

                    <p className="font-display text-md lg:text-xl text-forest-dark leading-snug mb-6">
                      "{activeReview?.text}"
                    </p>

                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (activeReview?.rating || 5)
                              ? 'fill-forest-gold text-forest-gold'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-forest-primary text-white flex items-center justify-center font-semibold text-sm shadow-sm">
                        {activeReview?.name?.charAt(0) || 'G'}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-forest-dark">{activeReview?.name}</p>
                        <p className="text-xs text-gray-500">{activeReview?.location}</p>
                        {activeReview?.tripType && (
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            {activeReview.tripType} {activeReview.visitedDate ? `• ${activeReview.visitedDate}` : ''}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {displayedReviews.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={() => goToReview(-1)}
                    aria-label="Previous review"
                    className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {(() => {
                      const maxDots = 6;
                      const total = displayedReviews.length;
                      const count = Math.min(maxDots, total);
                      const start = total <= maxDots ? 0 : Math.max(0, Math.min(safeReviewIndex - 2, total - maxDots));
                      return Array.from({ length: count }).map((_, idx) => {
                        const targetIndex = start + idx;
                        const isActive = targetIndex === safeReviewIndex;
                        return (
                          <button
                            key={targetIndex}
                            onClick={() => {
                              setReviewDirection(targetIndex > safeReviewIndex ? 1 : -1);
                              setReviewIndex(targetIndex);
                            }}
                            aria-label={`Go to review ${targetIndex + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              isActive ? 'w-6 bg-forest-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'
                            }`}
                          />
                        );
                      });
                    })()}
                  </div>

                  <button
                    onClick={() => goToReview(1)}
                    aria-label="Next review"
                    className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Enlarged "Write a Review" Button placed below the arrows */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-forest-primary text-white text-base sm:text-lg font-medium hover:bg-forest-primary-light transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <PenLine className="w-5 h-5" />
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* ── TripAdvisor Rating ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg shadow-forest-dark/5 border border-gray-100 p-8 sm:p-12 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full bg-[#00AA6C] flex items-center justify-center mb-6 shadow-xs">
              <FaTripadvisor className="w-8 h-8 text-black" />
            </div>

            <p className="text-forest-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Trusted by Travelers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-forest-dark mb-4 leading-tight">
              Rated by real travelers on TripAdvisor
            </h2>
            <p className="text-forest-text leading-relaxed mb-8 max-w-lg">
              Every trip I run is reviewed publicly. See what past guests have said
              before you book yours.
            </p>

            <Link
              to="https://www.tripadvisor.com/Attraction_Review-g297895-d25310753-Reviews-Bentota_Samantha_Tours_Travels-Bentota_Galle_District_Southern_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-primary text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-forest-primary-light transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              View Reviews on TripAdvisor <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={() => {
          setReviewIndex(0)
        }}
      />
    </>
  )
}
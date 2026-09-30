import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Phone,
} from 'lucide-react'
import {FaTripadvisor} from 'react-icons/fa'
import hero from '../../assets/home/hero.svg'
import about1 from '../../assets/about/about5.jpg'
import about2 from '../../assets/about/about4.webp'
import cta from '../../assets/cta/cta2.jpg'
import rate from '../../assets/home/ratings.jpg'

{/*Data for the relevant sections*/ }
const stats = [
  { value: 'x+', label: 'Excursions run' },
  { value: 'x', label: 'Locations' },
  { value: 'x', label: 'Years on the trail' },
]

const excursions = [
  { title: 'Bentota River Safari', duration: '', price: '', image: '' },
  { title: 'Bentota River Safari', duration: '', price: '', image: '' },
  { title: 'Bentota River Safari', duration: '', price: '', image: '' },
  { title: 'Bentota River Safari', duration: '', price: '', image: '' },
  { title: 'Bentota River Safari', duration: '', price: '', image: '' },
  { title: 'Bentota River Safari', duration: '', price: '', image: '' },

]

const reviews = [
  {
    name: 'Dani Sara',
    location: 'Italy',
    rating: 5,
    text: "We met Sam ( Samantha ) randomly and are so glad about that! He's the friendliest and fairest Guide we could met at Sri Lanka. We made two great trips with him - a Daytrip to Sigiriya Rock and a Two-days-Trip to Yala National Park and Ella. Sam offered us really fair prices and showed himself as a non intrusive, informative, fair and absolutely friendly human being! I would recommend Sam to anyone who wants to do excursions in Sri Lanka and if I should ever visit Sri Lanka again, Sam will be my first contact of choice",
  },
  {
    name: 'Caroline Bennett',
    location: 'United Kingdom',
    rating: 5,
    text: "I was only with Sam for a couple of days travelling from Bentota up to the Dambulla area and back but would highly recommend him.  He speaks excellent English, is very knowledgeable about the country, the wildlife, the culture etc.  And most important of all is an excellent driver - I felt very safe in on roads which actutally seem very dangerous with crazy bus drivers and hundreds of tuk-tuks. Would certainly contact him again if I want to do a tour in the future.  Thank you Sam!",
  },
  {
    name: 'Laura G',
    location: 'Australia',
    rating: '5',
    text: 'During our Sri Lanka holiday in Bentota (November 2025) we had the opportunity to meet Samantha. Since our stay was relatively short we decided to book with Samantha a 2-day tour to the mountains with an overnight stay. It was 2 days of fun and we learned a lot about the country and the people. Samantha speaks good German and of course English. He likes to respond to individual wishes and has been able to tell us a lot about ethnic groups , religions and the history of the country. He has always been punctual and reliable. We can highly recommend him with a clear conscience as an organizer and tour guide.  Thank you Sam!',
  },
  {
    name: 'Mary Kennedy',
    location: 'United Kingdom',
    rating: 5,
    text: "Sam was entertaining, informative and knowledgeable. We felt in safe hands under his guidance. We had a brilliant day at Yala, all of which was facilitated by Sam. Huge thanks to you Sam, from Mary & Nigel",
  },
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

export default function HomePage() {

  const navigate = useNavigate();
  const [reviewIndex, setReviewIndex] = useState(0)
  const [reviewDirection, setReviewDirection] = useState(1)

  const goToReview = (dir) => {
    setReviewDirection(dir)
    setReviewIndex((prev) => (prev + dir + reviews.length) % reviews.length)
  }

  const activeReview = reviews[reviewIndex]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-150 w-full overflow-hidden bg-forest-dark">
        {/* Replace with your own background image */}
        <img src={hero} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark" />
        <TopoLines />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl  text-white leading-[1.05] max-w-4xl"
          >
            <span className="font-extrabold ">Ayubowan</span>
            <br />
            <span className="text-forest-accent-light font-extrabold">Sri Lanka</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 font-display font-bold mt-6 max-w-lg text-base lg:text-lg text-md"
          >
            Bentota Samantha Tours & Travels
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
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
            <p className="text-forest-text leading-relaxed mb-8">
              Samantha tours & travels is a joint venture with thoroughly Srilankan roots.Samantha tours & travels main ambition is to be a brand leader in tourist and leisure industry.
              We have long association with European tour operators and our clientele base is essentially Europeans.
              Our clientele base is thoroughly heterogeneous and we cater to the different taste of our clients to their maximum satisfaction.
              Our motto is safety and satisfaction of our clients.
              Our wealth is goodwill of our clients.
              We highly regard privacy of our clients.
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
      <section id="excursions" className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
                Excursions
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-forest-dark mt-3">
                Pick your tour.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((trip, i) => (
              <motion.a
                key={trip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 text-forest-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {trip.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg text-forest-dark leading-snug pr-4">
                      {trip.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {trip.duration}
                    </span>
                    <span className="font-semibold text-forest-secondary">{trip.price}</span>
                  </div>
                </div>
                <div className="pt-3 pb-6 px-8">
                  <button onClick={() => navigate(`/excursions/${trip.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="text-white bg-forest-primary font-semibold hover:bg-forest-primary-light w-full text-center border  rounded-lg py-1.5">
                    Read More
                  </button>
                </div>

              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link
            to="/excursions"
            className=" inline-flex items-center gap-2 text-forest-primary font-semibold hover:bg-forest-primary hover:text-white rounded-full border px-8 py-3"
          >
            View All Excursions
          </Link>
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
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-forest-primary font-semibold">
            Reviews
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-dark mt-3 mb-14">
            From the trail log.
          </h2>

          <div className="relative min-h-55 flex items-center justify-center">
            <AnimatePresence mode="wait" custom={reviewDirection}>
              <motion.div
                key={reviewIndex}
                custom={reviewDirection}
                initial={{ opacity: 0, x: reviewDirection * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reviewDirection * -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <Quote className="w-8 h-8 text-forest-accent mx-auto mb-5" strokeWidth={1.5} />

                <p className="font-display text-md lg:text-xl text-forest-dark leading-snug mb-6">
                  "{activeReview.text}"
                </p>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < activeReview.rating ? 'fill-forest-gold text-forest-gold' : 'text-gray-200'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-primary text-white flex items-center justify-center font-semibold text-sm">
                    {activeReview.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-forest-dark">{activeReview.name}</p>
                    <p className="text-xs text-gray-500">{activeReview.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => goToReview(-1)}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setReviewDirection(i > reviewIndex ? 1 : -1); setReviewIndex(i) }}
                  aria-label={`Go to review ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === reviewIndex ? 'bg-forest-primary' : 'bg-gray-200'}`}
                />
              ))}
            </div>

            <button
              onClick={() => goToReview(1)}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── TripAdvisor Rating ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg shadow-forest-dark/5 border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            {/* Screenshot */}
            <div className="relative bg-gray-100">
              <img
                src={rate}
                alt="TripAdvisor rating for Bentota Samantha Tours & Travels"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text + CTA */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-forest-primary-light/95 flex items-center justify-center mb-6">
                <FaTripadvisor className="w-6 h-6 text-forest-dark" />
              </div>

              <p className="text-forest-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Trusted by Travelers
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-dark mb-4 leading-tight">
                Rated by real travelers on TripAdvisor
              </h2>
              <p className="text-forest-text leading-relaxed mb-8">
                Every trip I run is reviewed publicly. See what past guests have said
                before you book yours.
              </p>

              <Link
                to="https://www.tripadvisor.com/Attraction_Review-g297895-d25310753-Reviews-Bentota_Samantha_Tours_Travels-Bentota_Galle_District_Southern_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-primary text-white font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-forest-primary-light transition-colors w-fit"
              >
                View Reviews on TripAdvisor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
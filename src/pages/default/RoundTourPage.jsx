import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar,
  MapPin,
  Compass,
  Car,
  Shield,
  ArrowRight,
  Hotel,
  ShieldCheck,
  Award,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import trainBg from '../../assets/round-tour/train-bg.jpg'

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

const tourPackages = [
  {
    id: 'grand-tour-11d-10n',
    tourNumber: '01',
    duration: '11D / 10N',
    badge: 'All-Inclusive Grand Tour',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    accentGradient: 'from-forest-primary via-emerald-500 to-teal-400',
    title: '11D/10N Sri Lanka All-Inclusive Grand Tour',
    route: [
      'Airport',
      'Negombo',
      'Sigiriya',
      'Kandy',
      'Nuwara Eliya',
      'Ella',
      'Yala',
      'Mirissa',
      'Galle',
      'Colombo',
      'Airport',
    ],
    features: [
      {
        icon: Hotel,
        label: '10 Nights Hotel Stays:',
        desc: 'Handpicked 3★ to 5★ resorts with daily breakfast.',
      },
      {
        icon: Car,
        label: 'Private Transport:',
        desc: '24/7 dedicated A/C vehicle, fuel, highway tolls, and driver-guide from airport arrival to departure.',
      },
      {
        icon: Sparkles,
        label: 'Top Experiences:',
        desc: 'Sigiriya Rock, Kandy Temple, scenic mountain train ride, Yala leopard safari, Mirissa whale watching, and Galle Fort.',
      },
      {
        icon: ShieldCheck,
        label: 'Zero Hassle:',
        desc: '100% private, customizable, and fully managed.',
      },
    ],
  },
  {
    id: 'highlights-circuit-8d-7n',
    tourNumber: '02',
    duration: '8D / 7N',
    badge: '🌴 Highlights Circuit',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200/80',
    accentGradient: 'from-teal-600 via-emerald-500 to-green-400',
    title: '🌴 8D / 7N Sri Lanka Highlights Circuit',
    route: [
      'Airport',
      'Sigiriya',
      'Kandy',
      'Nuwara Eliya',
      'Ella',
      'Yala',
      'Galle / Beach',
      'Airport',
    ],
    features: [
      {
        icon: Hotel,
        label: '7 Nights Hotel Stays:',
        desc: 'Handpicked 3★ to 5★ resorts with daily breakfast.',
      },
      {
        icon: Car,
        label: 'Private Transport:',
        desc: 'Dedicated A/C car/van, fuel, tolls, and English-speaking chauffeur-guide (airport pickup to drop-off).',
      },
      {
        icon: Sparkles,
        label: 'Key Highlights:',
        desc: 'Sigiriya Lion Rock, Temple of the Tooth, Tea Country, Nine Arches Bridge, Yala 4x4 Safari, and historic Galle Fort.',
      },
      {
        icon: Award,
        label: 'All-Inclusive Perks:',
        desc: 'Pre-reserved scenic train ride, safari jeep, and 24/7 personal travel assistance.',
      },
    ],
  },
  {
    id: 'express-discovery-6d-5n',
    tourNumber: '03',
    duration: '6D / 5N',
    badge: '🌊 Express Discovery',
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
    accentGradient: 'from-cyan-600 via-teal-500 to-emerald-400',
    title: '🌊 6D / 5N Sri Lanka Express Discovery',
    route: [
      'Airport',
      'Sigiriya',
      'Kandy',
      'Nuwara Eliya',
      'Bentota / Galle',
      'Airport',
    ],
    features: [
      {
        icon: Hotel,
        label: '5 Nights Hotel Stays:',
        desc: 'Premium boutique hotels and resorts with daily breakfast.',
      },
      {
        icon: Car,
        label: 'Private Transport:',
        desc: 'Modern A/C vehicle with private driver-guide from arrival to departure.',
      },
      {
        icon: Sparkles,
        label: 'Key Highlights:',
        desc: 'Sigiriya Rock Fortress, Dambulla Caves, Kandy Cultural Show & Temple, Ramboda Waterfalls, Tea Factory, and Southern Golden Beaches.',
      },
      {
        icon: Compass,
        label: 'Perfect For:',
        desc: 'Short getaways, couples, and first-time travelers seeking culture, nature, and coast in one quick trip.',
      },
    ],
  },
]

const tourPerks = [
  {
    icon: Car,
    title: 'Private A/C Transportation',
    desc: 'Modern, fully insured, air-conditioned vehicle dedicated exclusively to your group for the entire journey.',
  },
  {
    icon: Compass,
    title: 'Experienced Chauffeur-Guide',
    desc: 'Friendly, licensed English-speaking local guide providing authentic insights, history, and seamless travel logistics.',
  },
  {
    icon: Shield,
    title: '100% Flexible & Stress-Free',
    desc: 'Travel at your own pace. Stop anytime for scenic viewpoints, tropical fruit stalls, photos, or tea breaks.',
  },
]

export default function RoundTourPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ── Header Banner with Scenic Train Background ───────────────── */}
      <section className="relative w-full bg-forest-dark pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden text-center text-white">
        <img
          src={trainBg}
          alt="Sri Lanka Scenic Mountain Train"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-forest-dark/85 via-forest-dark/75 to-forest-dark/95" />
        <TopoLines opacity={0.08} />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
              Popular Round Tour <span className="text-forest-primary-light">Packages</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-center">
              Every itinerary can be fully customized according to your arrival dates, preferred pace, hotel categories, and bucket-list destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Round Tour Packages List (with tasteful decorations) ─────── */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Soft background ambient gradient glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-emerald-500/4 blur-3xl" />
          <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-teal-500/4 blur-3xl" />
        </div>

        <div className="space-y-10">
          {tourPackages.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/95 backdrop-blur-xs rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Decorative Gradient Accent Bar */}
              <div className={`h-1.5 w-full bg-linear-to-r ${tour.accentGradient}`} />

              {/* Decorative Subtle Tour Number Watermark */}
              <div className="absolute top-4 right-6 sm:right-8 text-6xl sm:text-7xl font-black font-display text-slate-100/80 select-none pointer-events-none group-hover:text-emerald-100/40 transition-colors">
                {tour.tourNumber}
              </div>

              {/* Subtle Ambient Corner Radial Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative p-6 sm:p-8 lg:p-10">
                {/* Header: Title, Duration Badge, Inquire Button */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-gray-100">
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {tour.duration}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border shadow-2xs ${tour.badgeColor}`}>
                        <Sparkles className="w-3.5 h-3.5" /> {tour.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-forest-primary transition-colors">
                      {tour.title}
                    </h3>

                    {/* Decorated Route Container */}
                    <div className="mt-3.5 bg-slate-50/80 border border-slate-200/70 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-forest-primary shrink-0" />
                        <span>Complete Journey Route</span>
                      </div>
                      <div className="flex items-center flex-wrap gap-1.5 text-xs">
                        {tour.route.map((stop, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="bg-white text-slate-800 font-medium px-2.5 py-1 rounded-md border border-slate-200/80 shadow-2xs">
                              {stop}
                            </span>
                            {sIdx < tour.route.length - 1 && (
                              <span className="text-forest-primary font-bold px-0.5 text-xs">➔</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 lg:pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#0c142b] hover:bg-forest-primary text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors shadow-xs"
                    >
                      <span>Inquire About This Tour</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Package Details Grid (4 decorated items) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                  {tour.features.map((feat, fIdx) => {
                    const FeatIcon = feat.icon
                    return (
                      <div
                        key={fIdx}
                        className="bg-white hover:bg-slate-50/70 border border-slate-200/80 hover:border-forest-primary/40 rounded-xl p-4 sm:p-4.5 flex items-start gap-3.5 transition-all duration-200 shadow-2xs hover:shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-forest-primary/10 text-forest-primary flex items-center justify-center shrink-0 mt-0.5 border border-forest-primary/15">
                          <FeatIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 mb-1">
                            {feat.label}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. Pasted Photo Section: Value Pillars (Placed after packages) ── */}
      <section className="py-12 bg-white border-y border-gray-100 mb-16 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPerks.map((perk, i) => {
              const Icon = perk.icon
              return (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-forest-primary/10 text-forest-primary flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Custom Tailored Round Tour CTA (Pasted Section) ─────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto rounded-2xl bg-forest-primary text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <TopoLines count={4} opacity={0.06} />
          <h2 className="relative font-display text-2xl sm:text-3xl font-bold">
            Looking for a Tailored Round Tour or Custom Package?
          </h2>
          <p className="relative mt-3 text-white/85 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-justify sm:text-center">
            Samantha can bundle cultural ancient cities, scenic hill country train rides, wild safari game drives, and beach stays into an unforgettable custom Sri Lanka round tour.
          </p>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94772408371?text=Hi%20Samantha,%20I%20would%20like%20to%20plan%20a%20custom%20Round%20Tour%20in%20Sri%20Lanka!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-forest-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm shadow-md"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-600" /> WhatsApp Samantha
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 border border-white/40 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

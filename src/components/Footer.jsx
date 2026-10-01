import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTripadvisor, FaWhatsapp } from 'react-icons/fa'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import logo from '../assets/logo/ChatGPT Image Sep 30, 2026, 10_37_52 PM.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const exploreLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Excursions', href: '/excursions' },
    { name: 'Activities', href: '/activities' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const popularTrips = [
    { name: 'Ella', slug: 'ella' },
    { name: 'Hikkaduwa', slug: 'hikkaduwa' },
    { name: 'Yala Safari', slug: 'yala-safari' },
    { name: 'Bentota boat safari', slug: 'bentota-boat-safari' },
    { name: 'Kandy-Nuwara Eliya', slug: 'kandy-nuwara-eliya' },
  ]

  return (
    <footer className="relative bg-forest-dark text-gray-300 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img src="/footer-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-forest-dark/85 via-forest-dark/90 to-forest-dark" />
      </div>

      {/* Signature: topographic contour lines, like elevation lines on a trail map */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M ${-100 + i * 20} 0 C ${150 + i * 30} ${100 + i * 15}, ${350 - i * 20} ${200 + i * 10}, ${600 + i * 25} ${150 + i * 20} S ${900 + i * 15} ${300 + i * 10}, 1200 ${250 + i * 15}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-forest-accent"
          />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Top: Brand + Newsletter signpost */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <img
                src={logo}
                alt="Bentota Samantha Tours & Travels"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-2xl px-3.5 py-2 shadow-md"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Guided excursions and wild places, run by people who know the trails.
              Every trip is scouted, every guide is local.
            </p>

            <div className="flex items-center gap-3.5 mt-6">
              <a
                href='https://www.tripadvisor.com/Attraction_Review-g297895-d25310753-Reviews-Bentota_Samantha_Tours_Travels-Bentota_Galle_District_Southern_Province.html'
                target='_blank'
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="w-10 h-10 rounded-full bg-[#00AA6C] hover:bg-[#008f5a] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
              >
                <FaTripadvisor className="w-5 h-5 text-white" />
              </a>

              <a
                href='https://web.facebook.com/bentotasamantha'
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
              >
                <FaFacebookF className="w-4.5 h-4.5 text-white" />
              </a>

              <a
                href='https://wa.me/94772408371'
                target='_blank'
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle: link columns + contact + map */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-forest-primary-light transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Popular Trips</h4>
            <ul className="space-y-3">
              {popularTrips.map((trip) => (
                <li key={trip.name}>
                  <Link
                    to={`/excursions/${trip.slug}`}
                    className="text-sm text-gray-400 hover:text-forest-primary-light transition-colors"
                  >
                    {trip.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-forest-primary shrink-0" strokeWidth={1.5} />
                <span>Galle Road, Bentota,<br />Sri Lanka, 80500</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-forest-primary shrink-0" strokeWidth={1.5} />
                <a href="tel:+94772408371" className="hover:text-forest-primary-light transition-colors">
                  +94 77 240 8371
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-forest-primary shrink-0" strokeWidth={1.5} />
              <a
                href="mailto:bentotasamantha@yahoo.com"
                className="hover:text-forest-primary-light transition-colors"
              >
                bentotasamantha<wbr />@yahoo.com
              </a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Find Us</h4>
          <div className="relative rounded-lg overflow-hidden h-32 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14612.37368419686!2d79.99902610769485!3d6.416112685784983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1786045653411!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) contrast(0.9)' }}
              loading="lazy"
              title="Our Location"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Galle+Road+Bentota+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-forest-primary hover:text-forest-primary-light mt-2 transition-colors"
          >
            Get directions <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Bentota Samantha Tours & Travels. All rights reserved.
        </p>
      </div>
    </div>
    </footer >
  )
}
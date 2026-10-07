import { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import logo from '../assets/logo/ChatGPT Image Sep 30, 2026, 10_37_52 PM.png'
import { excursionCategories } from '../data/excursionsData'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/excursions', label: 'Excursions', isDropdown: true },
  { to: '/round-tour', label: 'Round Tour' },
  { to: '/#reviews', label: 'Reviews', isReview: true },
  { to: '/contact', label: 'Contact', isContactButton: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [excursionsDropdownOpen, setExcursionsDropdownOpen] = useState(false)
  const [mobileExcursionsExpanded, setMobileExcursionsExpanded] = useState(true)
  const dropdownTimeoutRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const mainEl = document.querySelector('main')
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const handleReviewClick = (e) => {
    e?.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById('reviews')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/#reviews')
    }
  }

  const handleExcursionClick = (categoryId) => {
    setExcursionsDropdownOpen(false)
    setMenuOpen(false)

    if (categoryId) {
      window.dispatchEvent(new CustomEvent('select-excursion-category', { detail: categoryId }))
    }

    if (location.pathname === '/') {
      const el = document.getElementById('excursions')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      const query = categoryId ? `?category=${categoryId}#excursions` : '#excursions'
      navigate(`/${query}`)
    }
  }

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setExcursionsDropdownOpen(true)
  }

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setExcursionsDropdownOpen(false)
    }, 150)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[78px] lg:h-[86px] bg-white/95 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled
          ? 'border-gray-200/80 shadow-xs'
          : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        <NavLink to="/" onClick={handleLogoClick} className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Bentota Samantha Tours & Travels"
            className="h-11 sm:h-12 md:h-13 lg:h-14 xl:h-[62px] w-auto object-contain shrink-0"
          />
        </NavLink>

        {/* Desktop links - shown on lg (1024px+) screens */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8 font-nav shrink-0">
          {links.map(({ to, label, isDropdown, isContactButton, isReview }) => {
            const isReviewActive = location.hash === '#reviews'
            const isHomeActive = to === '/' && location.pathname === '/' && !location.hash
            const isContactActive = location.pathname === '/contact'
            const isExcursionActive =
              (location.pathname === '/excursions' || location.hash === '#excursions') && !isReviewActive
            const isNormalActive = !isReviewActive && location.pathname === to

            const isActive = isDropdown
              ? isExcursionActive
              : isContactButton
              ? isContactActive
              : isReview
              ? isReviewActive
              : to === '/'
              ? isHomeActive
              : isNormalActive

            if (isDropdown) {
              return (
                <li
                  key={to}
                  className="relative"
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  <button
                    onClick={() => handleExcursionClick(null)}
                    className={`relative py-1 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isActive || excursionsDropdownOpen
                        ? 'text-forest-primary font-bold'
                        : 'text-slate-600 hover:text-forest-primary'
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        excursionsDropdownOpen ? 'rotate-180 text-forest-primary' : 'text-slate-400'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-forest-primary rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {excursionsDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100/90 py-2 px-1.5 overflow-hidden">
                        {excursionCategories.map((cat) => {
                          const isSpecial = cat.id === 'special'
                          return (
                            <button
                              key={cat.id}
                              onClick={() => handleExcursionClick(cat.id)}
                              className="w-full text-left px-3.5 py-1.5 rounded-xl font-nav text-[13px] font-bold tracking-wider uppercase text-slate-700 hover:text-forest-primary hover:bg-forest-primary/5 transition-colors cursor-pointer whitespace-nowrap flex items-center group"
                            >
                              {isSpecial ? (
                                <span className="bg-red-600 group-hover:bg-red-700 text-white px-2.5 py-1 rounded-md shadow-xs transition-colors">
                                  {cat.label}
                                </span>
                              ) : (
                                cat.label
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </li>
              )
            }

            if (isContactButton) {
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={`inline-flex items-center justify-center px-5 py-2.5 xl:px-6 xl:py-2.5 rounded-full font-bold text-xs xl:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-forest-primary text-white shadow-md ring-2 ring-forest-primary ring-offset-2'
                        : 'bg-forest-primary text-white hover:bg-forest-primary-light shadow-xs hover:shadow-md hover:scale-105 active:scale-95'
                    }`}
                  >
                    {label}
                  </NavLink>
                </li>
              )
            }

            if (isReview) {
              return (
                <li key={to}>
                  <button
                    onClick={handleReviewClick}
                    className={`relative py-1 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 font-nav cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-forest-primary font-bold'
                        : 'text-slate-600 hover:text-forest-primary'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-forest-primary rounded-full" />
                    )}
                  </button>
                </li>
              )
            }

            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={`relative py-1 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-forest-primary font-bold' : 'text-slate-600 hover:text-forest-primary'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-forest-primary rounded-full" />
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* Mobile & Tablet hamburger (< lg) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-slate-800 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile & Tablet dropdown menu (< lg) */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg font-nav">
          <ul className="flex flex-col px-6 py-4 gap-2">
            {links.map(({ to, label, isDropdown, isContactButton, isReview }) => {
              const isReviewActive = location.hash === '#reviews'
              const isHomeActive = to === '/' && location.pathname === '/' && !location.hash
              const isContactActive = location.pathname === '/contact'
              const isExcursionActive =
                (location.pathname === '/excursions' || location.hash === '#excursions') && !isReviewActive
              const isNormalActive = !isReviewActive && location.pathname === to

              const isActive = isDropdown
                ? isExcursionActive
                : isContactButton
                ? isContactActive
                : isReview
                ? isReviewActive
                : to === '/'
                ? isHomeActive
                : isNormalActive

              if (isDropdown) {
                return (
                  <li key={to} className="py-1">
                    <button
                      onClick={() => setMobileExcursionsExpanded(!mobileExcursionsExpanded)}
                      className={`w-full flex items-center justify-between text-sm font-bold tracking-wider uppercase py-2 transition-colors cursor-pointer ${
                        isActive ? 'text-forest-primary' : 'text-slate-700 hover:text-forest-primary'
                      }`}
                    >
                      <span>{label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExcursionsExpanded ? 'rotate-180 text-forest-primary' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {mobileExcursionsExpanded && (
                      <div className="pl-3 pr-2 py-1 flex flex-col gap-1 border-l-2 border-forest-primary/30 ml-2 mt-1">
                        {excursionCategories.map((cat) => {
                          const isSpecial = cat.id === 'special'
                          return (
                            <button
                              key={cat.id}
                              onClick={() => handleExcursionClick(cat.id)}
                              className="text-left py-1.5 px-3 font-nav text-[13px] font-bold tracking-wider uppercase text-slate-700 hover:text-forest-primary hover:bg-forest-primary/5 rounded-lg transition-colors cursor-pointer flex items-center group"
                            >
                              {isSpecial ? (
                                <span className="bg-red-600 group-hover:bg-red-700 text-white px-2.5 py-1 rounded-md shadow-xs transition-colors">
                                  {cat.label}
                                </span>
                              ) : (
                                cat.label
                              )}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </li>
                )
              }

              if (isContactButton) {
                return (
                  <li key={to} className="pt-2">
                    <NavLink
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-sm ${
                        isActive
                          ? 'bg-forest-primary text-white ring-2 ring-forest-primary ring-offset-2'
                          : 'bg-forest-primary text-white hover:bg-forest-primary-light'
                      }`}
                    >
                      {label}
                    </NavLink>
                  </li>
                )
              }

              if (isReview) {
                return (
                  <li key={to}>
                    <button
                      onClick={handleReviewClick}
                      className={`w-full text-left text-sm font-bold tracking-wider uppercase py-2 transition-colors cursor-pointer font-nav ${
                        isActive ? 'text-forest-primary' : 'text-slate-700 hover:text-forest-primary'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                )
              }

              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm font-bold tracking-wider uppercase py-2 transition-colors duration-200 ${
                      isActive ? 'text-forest-primary' : 'text-slate-700 hover:text-forest-primary'
                    }`}
                  >
                    {label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
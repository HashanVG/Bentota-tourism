import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo/ChatGPT Image Sep 30, 2026, 10_37_52 PM.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/excursions', label: 'Excursions' },
  { to: '/round-tour', label: 'Round Tour' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[90px] bg-white/95 backdrop-blur-md border-b transition-colors duration-200 ${
        scrolled
          ? 'border-gray-200/80 shadow-xs'
          : 'border-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto h-full px-6 sm:px-10 md:px-14 lg:px-20 flex items-center justify-between">
        <NavLink to="/" onClick={handleLogoClick} className="flex items-center">
          <img
            src={logo}
            alt="Bentota Samantha Tours & Travels"
            className="h-12 sm:h-14 md:h-16 lg:h-[70px] w-auto object-contain"
          />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-nav">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-bold tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? 'text-forest-primary' : 'text-slate-700 hover:text-forest-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-forest-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-slate-800"
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

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg font-nav">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-bold tracking-wider uppercase py-2 transition-colors duration-200 ${
                      isActive ? 'text-forest-primary' : 'text-slate-700 hover:text-forest-primary'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
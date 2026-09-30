import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaTripadvisor } from 'react-icons/fa'
import contactBg from '../../assets/contact/contact.jpg'
import { href } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function TopoLines({ opacity = 0.1, count = 6 }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      viewBox="0 0 1000 600"
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

const infoCards = [
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Galle Road, Bentota, Sri Lanka, 80500',
    href: 'https://www.google.com/maps/search/?api=1&query=Galle+Road+Bentota+Sri+Lanka',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+94 77 240 8371',
    href: 'tel:+94772408371',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'bentotasamantha@yahoo.com',
    href: 'mailto:bentotasamantha@yahoo.com',
  },
  {
    Icon: Clock,
    label: 'Hours',
    value: 'Every day, 7AM – 9PM',
    href: null,
  },
]

export default function ContactPage() {
  const formRef = useRef()
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-105 w-full overflow-hidden bg-forest-dark flex items-center justify-center">
        <img src={contactBg} alt="contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 70%)' }}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)' }}
          />
          <TopoLines />
        </div>

        <div className="relative text-center px-6">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-white"
          >
            Let's plan your <span className="forest-gradient">next trail</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-gray-300 text-base md:text-lg max-w-lg mx-auto mt-6">
            Bookings, custom trips, or just want to know what's in season reach out directly.
          </motion.p>
        </div>
      </section>

      {/* ── Info cards ───────────────────────────────────────────────── */}
      <section className="bg-white relative">
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoCards.map(({ Icon, label, value, href }, i) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg shadow-forest-dark/5 border border-gray-100 p-6 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-forest-primary" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">{label}</p>
                  <p className="text-sm text-forest-dark font-medium leading-snug">{value}</p>
                </motion.div>
              )
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Map ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — glass card on dark panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden bg-white shadow-2xl p-8 sm:p-12"
          >
            <TopoLines opacity={0.06} count={4} />
            <div className="relative">
              <p className="text-forest-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Send a Message</p>
              <h2 className="font-display text-3xl lg:text-5xl text-forest-dark mb-8">Tell us about your trip</h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-forest-primary/20 rounded-lg px-4 py-3 text-sm text-forest-dark placeholder:text-gray-500 focus:outline-none focus:border-forest-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-forest-primary/20 rounded-lg px-4 py-3 text-sm text-forest-dark placeholder:text-gray-500 focus:outline-none focus:border-forest-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 234 567 890"
                      className="w-full bg-white/5 border border-forest-primary/20 rounded-lg px-4 py-3 text-sm text-forest-dark placeholder:text-gray-500 focus:outline-none focus:border-forest-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Country</label>
                    <input
                      type="text"
                      name="country"
                      required
                      placeholder="Sri Lanka"
                      className="w-full bg-white/5 border border-forest-primary/20 rounded-lg px-4 py-3 text-sm text-forest-dark placeholder:text-gray-500 focus:outline-none focus:border-forest-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Trip enquiry, availability, custom request..."
                    className="w-full bg-white/5 border border-forest-primary/20 rounded-lg px-4 py-3 text-sm text-forest-dark placeholder:text-gray-500 focus:outline-none focus:border-forest-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Dates, group size, what you're hoping to see or do..."
                    className="w-full bg-white/5 border border-forest-primary/20 rounded-lg px-4 py-3 text-sm text-forest-dark placeholder:text-gray-500 focus:outline-none focus:border-forest-primary transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ x: 2 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-forest-primary text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-forest-primary-light transition-colors"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <Send className="w-4 h-4" />}
                </motion.button>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-forest-dark text-sm">
                    Message sent — We'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm">
                    Something went wrong. Please try again, or email us directly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Map + social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 sm:h-80 lg:h-full lg:min-h-75">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14612.37368419686!2d79.99902610769485!3d6.416112685784983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1786045653411!5m2!1sen!2slk"  
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                width="800"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
              />
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Follow Along</p>
              <div className="flex gap-3">
               
                  <a
                    href='https://www.tripadvisor.com/Attraction_Review-g297895-d25310753-Reviews-Bentota_Samantha_Tours_Travels-Bentota_Galle_District_Southern_Province.html'
                    target='_blank'
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300"
                  >
                    <FaTripadvisor className="w-4 h-4" />
                  </a>
                  <a
                    href='https://web.facebook.com/bentotasamantha'
                    target='_blank'
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href='https://wa.me/94772408371'
                    target='_blank'
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-forest-dark hover:bg-forest-primary hover:text-white hover:border-forest-primary transition-colors duration-300"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
              </div>
              <a
                href="https://maps.app.goo.gl/TttCFWHYJBHJmGxE7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-forest-primary hover:text-forest-primary-light mt-5 font-medium transition-colors"
              >
                Get directions <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
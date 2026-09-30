import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowDown,
} from 'lucide-react'

import about from '../../assets/about/caption.jpg'

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

export default function AboutPage() {
    return (
        <div>
            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="relative h-screen min-h-150 w-full overflow-hidden bg-forest-dark">
                {/* Replace with your own background image */}
                <img src={about} alt="about" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark" />
                <TopoLines />

                <div className="relative h-full flex flex-col items-center justify-end text-center px-6 pb-28">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl  text-white leading-[1.05] max-w-4xl"
                    >
                        <br />
                        <span className="text-white font-extrabold">About <span className='text-forest-primary-light'>Us</span></span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-gray-300 font-display font-bold mt-6 max-w-lg text-base lg:text-lg text-md"
                    >
                        Bentota Samantha Tours & Travels
                    </motion.p>
                </div>
            </section>

            {/* ── About Section ──────────────────────────────────────────────────────── */}
            <section className="px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl  bg-white/70 p-8 backdrop-blur-sm sm:p-12"
                >
                    <p className="text-md lg:text-lg leading-relaxed text-forest-text/90">
                        Samantha tours & travels is a joint venture with thoroughly Srilankan roots.Samantha tours & travels main ambition is to be a brand leader in tourist and leisure industry. We have long association with European tour operators and our clientele base is essentially Europeans. Our clientele base is thoroughly heterogeneous and we cater to the different taste of our clients to their maximum satisfaction. Our motto is safety and satisfaction of our clients. Our wealth is goodwill of our clients. We highly regard privacy of our clients.
                    </p>
                </motion.div>
            </section>

            {/* ── CTA Section ──────────────────────────────────────────────────────── */}
            <section className="px-6 pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-forest-primary px-8 py-16 text-center sm:px-16"
                >
                    <div className="pointer-events-none absolute -right-10 -top-16 w-75 opacity-20">
                        <TopoLines stroke="#ffffff" />
                    </div>
                    <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
                        Come see it with us
                    </h2>
                    <p className="relative mx-auto mt-4 max-w-md text-white/85">
                        Have a look at what I run, or just tell me what you're
                        hoping to see and I'll build a trip around it.
                    </p>
                    <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="/excursions"
                            className="flex items-center justify-center gap-2 bg-forest-gold text-white font-semibold px-14 py-3.5 rounded-lg hover:bg-forest-primary-light transition-colors"
                        >
                            Book Now
                        </a>
                        <a
                            href="/contact"
                            className="flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            See My Excursions
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

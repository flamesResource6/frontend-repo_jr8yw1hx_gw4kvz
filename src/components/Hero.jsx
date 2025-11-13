import { motion } from 'framer-motion'
import { Instagram, Phone } from 'lucide-react'

const FloatingSnack = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ y: 0, opacity: 0.6 }}
    animate={{ y: [0, -12, 0], opacity: [0.6, 0.9, 0.6] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
)

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-orange-50 to-white" />

      {/* Glowing waves */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-orange-300 blur-[80px] opacity-50" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-400 blur-[100px] opacity-40" />

      {/* Floating snacks */}
      <FloatingSnack delay={0} className="left-10 top-20 text-5xl">
        <span role="img" aria-label="s'mores">🍫</span>
      </FloatingSnack>
      <FloatingSnack delay={1} className="right-12 top-28 text-5xl">
        <span role="img" aria-label="fries">🍟</span>
      </FloatingSnack>
      <FloatingSnack delay={2} className="left-20 bottom-16 text-4xl">
        <span role="img" aria-label="sparkles">✨</span>
      </FloatingSnack>

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-orange-700"
        >
          Taste the joy of Moribus!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-orange-900/80"
        >
          Snack smart, snack happy — cozy bites that brighten your day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Moribus%201!%20Saya%20ingin%20pesan%20snack."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-700 active:scale-[0.99]"
          >
            <Phone className="h-5 w-5" /> Order Now
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-orange-700 ring-1 ring-orange-200 shadow-sm transition hover:bg-orange-50"
          >
            <Instagram className="h-5 w-5" /> Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

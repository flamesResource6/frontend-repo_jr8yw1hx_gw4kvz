import { motion } from 'framer-motion'

export default function Products() {
  return (
    <section className="py-16 bg-orange-50/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center">Smoribus & Morifries</h2>
        <p className="mt-3 text-center text-orange-800/80 max-w-2xl mx-auto">
          Cozy, sweet, and crispy. Our signature duo, now with a little motion magic.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Smoribus */}
          <motion.article
            id="smoribus"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-0">
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-orange-800">Smoribus</h3>
                <p className="mt-2 text-orange-800/80">Gooey s’mores with toasted marshmallow, melty chocolate, and crisp crackers.</p>
                <div className="mt-4 inline-flex gap-3">
                  <a href="#order" className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-semibold shadow hover:bg-orange-700 transition-colors">Order now</a>
                  <a href="#menu" className="px-4 py-2 rounded-full text-orange-700 bg-orange-100/60 hover:bg-orange-200/70 text-sm font-semibold transition-colors">View menu</a>
                </div>
              </div>

              <div className="relative">
                {/* Melting effect wrapper */}
                <motion.div
                  className="relative h-72 sm:h-full"
                  initial={{ scale: 0.98 }}
                  whileHover={{ y: 4, scaleY: 1.03 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 12 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                    alt="Smoribus s’mores — melty chocolate and toasted marshmallow"
                    className="h-full w-full object-cover"
                  />

                  {/* subtle gloss */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-950/0 via-white/0 to-white/20 mix-blend-overlay" />

                  {/* drip accent */}
                  <motion.div
                    aria-hidden
                    className="absolute -bottom-2 left-8 h-5 w-24 rounded-b-3xl bg-orange-200/70 blur-[2px]"
                    animate={{ y: [0, 3, 0], scaleX: [1, 1.1, 1] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.article>

          {/* Morifries */}
          <motion.article
            id="morifries"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-0">
              <div className="relative order-2 sm:order-1">
                {/* Fries fall/steam area */}
                <div className="relative h-72 sm:h-full">
                  {/* fries image */}
                  <motion.img
                    src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1200&auto=format&fit=crop"
                    alt="Morifries — golden crispy fries"
                    className="h-full w-full object-cover"
                    initial={{ y: -12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />

                  {/* steam on hover */}
                  <div className="pointer-events-none absolute inset-0">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="absolute left-1/2 top-6 h-10 w-10 -translate-x-1/2 rounded-full bg-gradient-to-b from-white/50 to-transparent"
                        initial={{ opacity: 0, y: 12, scale: 0.8 }}
                        whileHover={{}}
                        animate={{
                          opacity: [0, 0.9, 0],
                          y: [12, -14, -24],
                          scale: [0.8, 1, 1.1],
                        }}
                        transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                        style={{ left: `calc(45% + ${i * 14}px)` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-center order-1 sm:order-2">
                <h3 className="text-2xl font-bold text-orange-800">Morifries</h3>
                <p className="mt-2 text-orange-800/80">Golden, seasoned fries with a fluffy center and perfect crisp.</p>
                <div className="mt-4 inline-flex gap-3">
                  <a href="#order" className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-semibold shadow hover:bg-orange-700 transition-colors">Order now</a>
                  <a href="#menu" className="px-4 py-2 rounded-full text-orange-700 bg-orange-100/60 hover:bg-orange-200/70 text-sm font-semibold transition-colors">View menu</a>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        <p className="mt-10 text-center text-sm text-orange-700/70">Swap these placeholder images with your provided shots — animations will work automatically.</p>
      </div>
    </section>
  )
}

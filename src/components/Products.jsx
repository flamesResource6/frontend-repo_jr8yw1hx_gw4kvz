import { motion } from 'framer-motion'

const meltKeyframes = {
  rest: { y: 0, scaleY: 1, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,.15))', transition: { type: 'spring', stiffness: 200 } },
  hover: { y: 6, scaleY: 0.98, transition: { duration: 0.5 } },
}

const friesFallVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: (i) => ({ y: 0, opacity: 1, transition: { delay: 0.05 * i, type: 'spring', stiffness: 250 } }),
}

const Card = ({ title, subtitle, image, effect = 'bounce', children, id }) => {
  const effects = {
    bounce: { whileHover: { y: -6, transition: { type: 'spring', stiffness: 300 } } },
    steam: { whileHover: { scale: 1.02, filter: 'drop-shadow(0 12px 24px rgba(234,88,12,0.25))' } },
    melt: {},
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      {...effects[effect]}
      className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_40px_-15px_rgba(234,88,12,.35)] ring-1 ring-orange-100"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        {/* Image / Visual */}
        {effect === 'melt' ? (
          <motion.img
            src={image}
            alt={title}
            className="h-40 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,.15)]"
            variants={meltKeyframes}
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            whileInView={{ opacity: [0, 1], y: [8, 0] }}
            viewport={{ once: true, amount: 0.4 }}
          />
        ) : (
          <motion.img
            src={image}
            alt={title}
            className="h-44 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,.15)]"
            initial={{ scale: 1, opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        )}

        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-orange-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

        {/* Warm steam effect for fries */}
        {title.toLowerCase().includes('fries') && (
          <>
            <div className="pointer-events-none absolute -top-4 left-1/3 h-10 w-10 rounded-full bg-orange-200/20 blur-xl animate-pulse" />
            <div className="pointer-events-none absolute -top-6 right-1/3 h-12 w-12 rounded-full bg-orange-300/20 blur-2xl animate-pulse" />
          </>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-orange-800">{title}</h3>
        {subtitle && <p className="text-orange-700/80 mt-1">{subtitle}</p>}
        {children}
      </div>
    </motion.div>
  )
}

export default function Products() {
  const fries = [0,1,2,3,4,5,6]

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-orange-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center">Our Signatures</h2>
        <p className="mt-2 text-center text-orange-900/80">Two cheerful classics to make your day.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Smoribus Card */}
          <Card
            id="smoribus"
            title="Smoribus"
            subtitle="Gooey, chocolatey, toasty s’mores — now extra cozy."
            image="https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1200&auto=format&fit=crop"
            effect="melt"
          >
            <p className="mt-2 text-sm text-orange-900/80">Hover to see a gentle melt. Fades and floats into view on scroll.</p>
          </Card>

          {/* Morifries Card */}
          <Card
            id="morifries"
            title="Morifries"
            subtitle="Crispy golden fries with a warm glow."
            image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
            effect="steam"
          >
            <div className="relative mt-3 h-16">
              {fries.map((_, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={friesFallVariant}
                  className="absolute top-0 inline-block h-14 w-2 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 shadow-[0_6px_14px_-4px_rgba(234,88,12,.45)]"
                  style={{ left: `${i * 12}%` }}
                />
              ))}
            </div>
            <p className="mt-2 text-sm text-orange-900/80">Hover for a warm steam glow. Fries fall into view as you scroll.</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

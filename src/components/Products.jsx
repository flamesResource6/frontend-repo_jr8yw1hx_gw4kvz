import { motion } from 'framer-motion'

const Card = ({ title, price, image, children, hoverEffect = 'bounce' }) => {
  const effects = {
    bounce: { whileHover: { y: -6, transition: { type: 'spring', stiffness: 300 } } },
    steam: { whileHover: { scale: 1.02, filter: 'drop-shadow(0 12px 24px rgba(234,88,12,0.25))' } },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      {...effects[hoverEffect]}
      className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_40px_-15px_rgba(234,88,12,.35)] ring-1 ring-orange-100"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <motion.img
          src={image}
          alt={title}
          className="h-36 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,.15)]"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
        {/* subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-orange-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-orange-800">{title}</h3>
        <p className="text-orange-700/80 mt-1">{price}</p>
        {children}
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-orange-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center">Our Signatures</h2>
        <p className="mt-2 text-center text-orange-900/80">Two cheerful classics to make your day.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Smoribus"
            price="Rp10.000 / pack (2 pieces)"
            image="https://images.unsplash.com/photo-1571715274033-c0f9a0e70072?q=80&w=1000&auto=format&fit=crop"
            hoverEffect="bounce"
          >
            <p className="mt-2 text-sm text-orange-900/80">Our special s’mores — gooey, chocolatey, and toasty.</p>
          </Card>

          <Card
            title="Morifries"
            price="Rp10.000 (M) · Rp15.000 (L)"
            image="https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=1000&auto=format&fit=crop"
            hoverEffect="steam"
          >
            <p className="mt-2 text-sm text-orange-900/80">Crispy golden fries. Perfectly salted, perfectly happy.</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

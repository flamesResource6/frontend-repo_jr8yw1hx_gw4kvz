import { Instagram, MessageCircle } from 'lucide-react'

export default function Order() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700">Order & Contact</h2>
        <p className="mt-2 text-orange-900/80">Ready to snack? Reach us on WhatsApp or Instagram.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Moribus%201!%20Saya%20ingin%20pesan%20snack."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-700"
          >
            <MessageCircle className="h-5 w-5" /> Order via WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-orange-700 ring-1 ring-orange-200 shadow-sm transition hover:bg-orange-50"
          >
            <Instagram className="h-5 w-5" /> DM on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

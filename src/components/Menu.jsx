export default function Menu() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center">Menu & Prices</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-orange-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-orange-800">Smoribus</h3>
            <p className="text-orange-700/80">Rp10.000 / pack (1 pack = 2 Smoribus)</p>
          </div>
          <div className="rounded-2xl border border-orange-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-orange-800">Morifries</h3>
            <p className="text-orange-700/80">Medium: Rp10.000</p>
            <p className="text-orange-700/80">Large: Rp15.000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

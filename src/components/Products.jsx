export default function Products() {
  return (
    <section className="py-16 bg-orange-50/40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center">Smoribus & Morifries</h2>
        <p className="mt-3 text-center text-orange-800/80 max-w-2xl mx-auto text-sm sm:text-base">
          Cozy, sweet, and crispy. Our signature duo prepared fresh for you.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Smoribus */}
          <article
            id="smoribus"
            className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-0">
              {/* IMAGE LEFT */}
              <div className="relative h-56 sm:h-full">
                <img
                  src="https://themodernnonna.com/wp-content/uploads/2021/11/Smores.jpg"
                  alt="Smoribus — our special s’mores with melty chocolate and toasted marshmallow"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <span className="sr-only">Smoribus image</span>
              </div>

              {/* TEXT RIGHT */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800">Smoribus</h3>
                <p className="mt-2 text-orange-800/80 text-sm sm:text-base">Smoribus — our special s’mores.</p>
                <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-800">Rp10.000/pack</span>
                  <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] sm:text-xs text-orange-800/80">1 pack = 2 Smoribus</span>
                </div>
                <div className="mt-4 sm:mt-5 inline-flex gap-2 sm:gap-3">
                  <a
                    href="#order"
                    className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm sm:text-base font-semibold shadow hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label="Add Smoribus to order"
                  >
                    Add to order
                  </a>
                  <a
                    href="#menu"
                    className="px-4 py-2 rounded-full text-orange-700 bg-orange-100/60 hover:bg-orange-200/70 text-sm sm:text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View menu
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Morifries */}
          <article
            id="morifries"
            className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-0">
              {/* IMAGE LEFT */}
              <div className="relative h-56 sm:h-full">
                <img
                  src="https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg"
                  alt="Morifries — our crispy french fries, golden and fluffy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <span className="sr-only">Morifries image</span>
              </div>

              {/* TEXT RIGHT */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800">Morifries</h3>
                <p className="mt-2 text-orange-800/80 text-sm sm:text-base">Morifries — our crispy french fries.</p>
                <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-800">Rp10.000 <span className="ml-1 text-[11px] sm:text-xs font-normal text-orange-800/80">(medium)</span></span>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-800">Rp15.000 <span className="ml-1 text-[11px] sm:text-xs font-normal text-orange-800/80">(large)</span></span>
                </div>
                <div className="mt-4 sm:mt-5 inline-flex gap-2 sm:gap-3">
                  <a
                    href="#order"
                    className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm sm:text-base font-semibold shadow hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label="Add Morifries to order"
                  >
                    Add to order
                  </a>
                  <a
                    href="#menu"
                    className="px-4 py-2 rounded-full text-orange-700 bg-orange-100/60 hover:bg-orange-200/70 text-sm sm:text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View menu
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <p className="mt-10 text-center text-xs sm:text-sm text-orange-700/70">Images fit neatly in their frames. Use Tab to navigate buttons.</p>
      </div>
    </section>
  )
}

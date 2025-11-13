import Hero from './components/Hero'
import Menu from './components/Menu'
import Order from './components/Order'
import Footer from './components/Footer'
import Products from './components/Products'

function App() {
  return (
    <div className="min-h-screen bg-white text-orange-900">
      {/* Header / Brand */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-orange-100">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-orange-600" />
            <span className="font-extrabold tracking-tight text-orange-800">Moribus 1</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-orange-800/80">
            <a href="#menu" className="hover:text-orange-900">Menu</a>
            <a href="#order" className="hover:text-orange-900">Order</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Products highlight */}
      <Products />

      {/* Menu & Prices */}
      <div id="menu">
        <Menu />
      </div>

      {/* Order */}
      <div id="order">
        <Order />
      </div>

      <Footer />
    </div>
  )
}

export default App

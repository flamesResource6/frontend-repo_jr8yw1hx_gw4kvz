import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 bg-orange-600 text-white">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold">Moribus 1</p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-90"
          >
            <Instagram className="h-5 w-5" /> Instagram
          </a>
        </div>
        <p className="text-white/80 text-sm">© {new Date().getFullYear()} Moribus 1. All rights reserved.</p>
      </div>
    </footer>
  )
}

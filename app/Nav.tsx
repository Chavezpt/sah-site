'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Housing', href: '/housing' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md border-b border-navy-border' : 'bg-transparent'}`}>
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-electric/15 rounded-lg flex items-center justify-center">
            <span className="text-blue-electric font-black text-sm">SAH</span>
          </div>
          <span className="text-white font-black text-lg hidden sm:inline">State of the Art Healing</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-blue-electric bg-blue-electric/10'
                  : 'text-gray-400 hover:text-white hover:bg-navy-lighter'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/referrals" className="btn-primary ml-3 text-sm py-2.5 px-5">
            Refer a Client
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-card border-t border-navy-border">
          <div className="section-container py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? 'text-blue-electric bg-blue-electric/10'
                    : 'text-gray-400 hover:text-white hover:bg-navy-lighter'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/referrals" className="block btn-primary text-center mt-2">
              Refer a Client
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

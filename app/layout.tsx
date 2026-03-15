import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Nav from './Nav'

export const metadata: Metadata = {
  title: {
    default: 'State of the Art Healing — From crisis to community anchor.',
    template: '%s | State of the Art Healing',
  },
  description: '1,000+ clients. 200+ staff. Zero grants. Behavioral health treatment, housing, and employment pathways in Albuquerque, New Mexico.',
  metadataBase: new URL('https://www.sotahealing.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* ── Navigation ── */}
        <Nav />

        {/* ── Main ── */}
        <main className="flex-1">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-navy border-t border-navy-border">
          <div className="section-container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Brand */}
              <div>
                <div className="text-white font-black text-xl mb-2">SAH</div>
                <p className="text-gray-500 text-sm mb-4">From crisis to community anchor.</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  State of the Art Healing LLC<br />
                  NM BHSD Licensed · CARF Accredited
                </p>
              </div>

              {/* Links */}
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Navigate</div>
                <div className="space-y-2">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Housing', href: '/housing' },
                    { label: 'About', href: '/about' },
                    { label: 'Refer a Client', href: '/referrals' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="block text-gray-400 text-sm hover:text-blue-electric transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Contact</div>
                <div className="space-y-2 text-sm">
                  <a href="tel:+15052060288" className="block text-gray-400 hover:text-blue-electric transition-colors">(505) 206-0288</a>
                  <a href="mailto:support@sotahealing.com" className="block text-gray-400 hover:text-blue-electric transition-colors">support@sotahealing.com</a>
                  <p className="text-gray-500">5509 & 5511 Central Ave NW<br />Albuquerque, NM 87105</p>
                </div>
              </div>
            </div>

            <div className="border-t border-navy-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-xs">
                © {new Date().getFullYear()} State of the Art Healing LLC. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs text-center md:text-right">
                If this is a mental health emergency, call <a href="tel:988" className="text-blue-electric hover:underline">988</a> or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </footer>

        {/* ── Scroll animation observer ── */}
        <script dangerouslySetInnerHTML={{__html: `
          if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('animate-in');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
          }
        `}} />
      </body>
    </html>
  )
}

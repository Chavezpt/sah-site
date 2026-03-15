'use client'

import { useState } from 'react'
import Link from 'next/link'

const hearAboutOptions = [
  'Hospital or ED',
  'Court / Probation',
  'Social worker / Case manager',
  'Another provider',
  'Online search',
  'Word of mouth',
  'Other',
]

const referralSources = [
  { icon: '🏥', label: 'Hospitals and emergency departments' },
  { icon: '⚖️', label: 'Courts and probation officers' },
  { icon: '👥', label: 'Social workers and case managers' },
  { icon: '👨‍👩‍👧', label: 'Family members' },
  { icon: '🙋', label: 'Self-referrals' },
]

export default function ReferralsPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    situation: '',
    hearAbout: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to backend here
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-electric/5 rounded-full blur-3xl" />
        </div>
        <div className="section-container relative py-32 md:py-40">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">Referrals & Contact</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8">
              Refer a client.{' '}
              <span className="text-blue-electric">Start the conversation.</span>
            </h1>
            <p className="section-body max-w-3xl">
              SAH accepts referrals from hospitals, courts, social workers, family members,
              and anyone who knows someone who needs more than a 30-day program.
            </p>
          </div>
        </div>
      </section>

      {/* Phone prominent */}
      <section className="py-12 bg-navy-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-electric/15 via-navy-card to-navy-card border-2 border-blue-electric/40 rounded-2xl p-8 md:p-12 glow-blue text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">Monday–Friday 8am–5pm MST · 24/7 crisis line</span>
            </div>
            <a href="tel:+15052060288" className="block">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white hover:text-blue-electric transition-colors tracking-tight mb-4">
                (505) 206-0288
              </div>
              <div className="text-blue-electric font-semibold text-lg">Call or text</div>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency disclaimer */}
      <section className="py-4">
        <div className="section-container">
          <div className="max-w-3xl mx-auto bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
            <p className="text-red-300 text-sm font-medium">
              If this is a mental health emergency, call <a href="tel:988" className="underline font-bold">988</a> or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      {/* Main content: Form + Info */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

            {/* Left: Info */}
            <div>
              {/* Who can refer */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="gradient-line" />
                  <span className="section-label">Who Can Refer</span>
                </div>
                <div className="space-y-3">
                  {referralSources.map((src, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-navy-card border border-navy-border rounded-xl">
                      <span className="text-2xl">{src.icon}</span>
                      <span className="text-gray-300 text-sm font-medium">{src.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to include */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="gradient-line" />
                  <span className="section-label">What to Include</span>
                </div>
                <div className="space-y-3">
                  {[
                    'Client name and contact information',
                    'Current situation and level of care needed',
                    'Insurance or Medicaid status if known',
                    'Your contact information',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-electric/15 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="gradient-line" />
                  <span className="section-label">Contact Information</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <a href="tel:+15052060288" className="text-white font-semibold hover:text-blue-electric transition-colors">(505) 206-0288</a>
                      <div className="text-gray-500">Call or text</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <a href="mailto:support@sotahealing.com" className="text-white font-semibold hover:text-blue-electric transition-colors">support@sotahealing.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <div className="text-white font-semibold">5509 & 5511 Central Ave NW</div>
                      <div className="text-gray-500">Albuquerque, NM 87105</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🕗</span>
                    <div>
                      <div className="text-white font-semibold">Monday–Friday 8am–5pm MST</div>
                      <div className="text-gray-500">24/7 crisis line available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-line" />
                <span className="section-label">Referral Form</span>
              </div>

              {submitted ? (
                <div className="card text-center py-16">
                  <div className="w-20 h-20 bg-blue-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Referral Received</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">
                    A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                /* action left blank — connect to backend */
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name <span className="text-blue-electric">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Organization <span className="text-gray-600">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Hospital, agency, court, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone <span className="text-blue-electric">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(505) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email <span className="text-blue-electric">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Client Situation <span className="text-blue-electric">*</span>
                    </label>
                    <textarea
                      name="situation"
                      required
                      value={formData.situation}
                      onChange={handleChange}
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Describe the client's current situation, level of care needed, insurance status if known, and any other relevant details."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="form-input appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-600">Select one...</option>
                      {hearAboutOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-card">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center"
                  >
                    Submit Referral
                  </button>

                  <p className="text-center text-gray-500 text-xs">
                    A member of our team will be in touch within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

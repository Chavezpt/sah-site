import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Six Levels of Housing',
  description: 'From crisis bed to community anchor — six structured housing levels where progress is earned through behavior, not time. 250+ units across Albuquerque.',
}

const levels = [
  {
    level: '01',
    title: 'Crisis Stabilization',
    body: 'Immediate, intensive support. Supervised around the clock. The first safe place many clients have had in years. Crisis stabilization removes the immediate danger and gives clients the breathing room to begin thinking about what comes next. For many, this is the first time in months or years that basic needs — safety, a bed, food — are consistently met.',
    color: 'border-l-red-400',
  },
  {
    level: '02',
    title: 'Clinical Bridge',
    body: 'Structured housing with daily clinical contact. Clients build routine, consistency, and trust — the foundations everything else requires. The Clinical Bridge is where the real work begins. Daily therapy attendance, medication consistency, and structured schedules create the patterns that recovery depends on. This is the stage where most other programs discharge people.',
    color: 'border-l-orange-400',
  },
  {
    level: '03',
    title: 'Recovery Residence',
    body: 'Sober living with peer community. Employment readiness begins. Community integration starts. Recovery Residences introduce shared responsibility. Clients begin contributing to their living environment, building relationships with peers, and taking the first steps toward employment. Structure is still present, but independence is growing.',
    color: 'border-l-amber-400',
  },
  {
    level: '04',
    title: 'Supported Independence',
    body: 'Semi-independent housing. Employment is active. Clients are building savings, relationships, and identity outside the system. At Supported Independence, clients are working, paying a portion of their expenses, and making decisions about their future. Clinical support is available but increasingly client-initiated rather than program-driven.',
    color: 'border-l-blue-electric',
  },
  {
    level: '05',
    title: 'Transitional Housing',
    body: 'Near-independent living with light-touch support. Clients are fully employed, engaged in community, and preparing for permanent stability. Transitional Housing is the final structured step. Clients here are essentially living independently with a safety net — still connected to the program, still accountable, but operating with the skills and stability they\'ve built.',
    color: 'border-l-blue-400',
  },
  {
    level: '06',
    title: 'Community Anchor',
    body: 'Independent living. Former clients become mentors, peer supports, and leaders. The model closing its own loop. Community Anchors are the proof that the model works. These are people who came through crisis, built their lives back, and now contribute to the recovery of others. Many return as staff, mentors, or community leaders.',
    color: 'border-l-green-vivid',
  },
]

export default function HousingPage() {
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
              <span className="section-label">Six Levels of Housing</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8">
              From crisis bed{' '}
              <span className="text-blue-electric">to community anchor.</span>
            </h1>
            <p className="section-body max-w-3xl mb-6">
              Progress is earned through behavior — not time, not compliance, not paperwork.
              Every level has clear requirements. Every transition is tracked. Every bed in
              the system is managed in real time.
            </p>
            <p className="text-blue-electric font-black text-lg">250+ housing units across Albuquerque</p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 bg-navy-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">The Approach</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white mb-6">
              Recovery takes three years.{' '}
              <span className="text-blue-electric">Not 30 days.</span>
            </h2>
            <p className="section-body">
              Most programs treat housing as a separate issue — something the client has to
              figure out on their own after discharge. SAH treats housing as treatment.
              The environment a person lives in determines whether clinical gains stick or
              evaporate. That&apos;s why we built six levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '📊', label: 'Behavior-based', body: 'Progression is earned through demonstrated behavior change — not time served. Each level has specific, measurable criteria.' },
              { icon: '🔄', label: 'Bidirectional', body: 'Clients can move forward and, if needed, step back. The system supports recovery as it actually happens — not as a linear ideal.' },
              { icon: '📱', label: 'Real-time tracked', body: 'Every bed, every client, every transition — tracked in real time. Staff know exactly where each person is in their journey.' },
            ].map((item, i) => (
              <div key={i} className="card" data-animate>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Six Levels */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">The Six Levels</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              Each level builds on the last.{' '}
              <span className="text-blue-electric">Nothing is skipped.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {levels.map((item, i) => (
              <div key={i} className={`card border-l-4 ${item.color}`} data-animate>
                <div className="flex items-start gap-5">
                  <div className="text-blue-electric font-black text-4xl opacity-40 flex-shrink-0 w-14 text-center">
                    {item.level}
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-light">
        <div className="section-container text-center">
          <h2 className="section-title text-white mb-6 max-w-3xl mx-auto">
            Know someone who needs stable housing{' '}
            <span className="text-blue-electric">and real support?</span>
          </h2>
          <p className="section-body mb-10 max-w-xl mx-auto">
            SAH housing is integrated with treatment and employment. Referrals accepted from hospitals, courts, social workers, and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/referrals" className="btn-primary">Refer a Client</Link>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

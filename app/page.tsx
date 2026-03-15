import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'State of the Art Healing — From crisis to community anchor.',
  description: '1,000+ clients. 200+ staff. Zero grants. Behavioral health treatment, housing, and employment pathways in Albuquerque, New Mexico.',
}

const stats = [
  { number: '1,000+', label: 'Active Clients' },
  { number: '200+', label: 'Staff Members' },
  { number: '250+', label: 'Housing Units' },
  { number: '$0', label: 'Grants Received' },
]

const services = [
  { icon: '💊', title: 'Medically Assisted Treatment', desc: 'Evidence-based medication plus intensive therapy — a structured path toward full recovery.' },
  { icon: '🧠', title: 'Intensive Outpatient (IOP)', desc: '12 to 20 hours of therapy per week. Structured therapy, education, and coping skills.' },
  { icon: '🏥', title: 'Residential Treatment', desc: 'Accredited adult residential treatment with around-the-clock support.' },
  { icon: '💬', title: 'Individual & Group Counseling', desc: 'Licensed counselors addressing underlying issues and building long-term coping skills.' },
  { icon: '🤝', title: 'Certified Peer Support', desc: 'People in recovery supporting people in recovery. Certified, trained, and accountable.' },
  { icon: '🏙️', title: 'Community Support Services', desc: 'Employment navigation, family reconnection, benefit access, housing support.' },
  { icon: '💼', title: 'Employment Pathways', desc: 'Structured job readiness programming with real credentials, not just preparation.' },
  { icon: '💻', title: 'Digital Skills Training', desc: 'Graphic design, content creation, web development, and video production.' },
  { icon: '🏠', title: 'Six Levels of Housing', desc: 'Crisis bed to independent living. Every transition earned through behavior.' },
]

const levels = [
  { level: '01', label: 'Crisis Stabilization', desc: 'Safe, immediate support while acute needs are addressed' },
  { level: '02', label: 'Clinical Bridge', desc: 'Structured housing with daily clinical contact' },
  { level: '03', label: 'Recovery Residence', desc: 'Sober living, peer community, employment readiness begins' },
  { level: '04', label: 'Supported Independence', desc: 'Semi-independent housing, active employment' },
  { level: '05', label: 'Transitional Housing', desc: 'Near-independent living, full employment, building savings' },
  { level: '06', label: 'Community Anchor', desc: 'Independent. Often returns as mentor, peer support, or staff.' },
]

const problems = [
  {
    icon: '🔄',
    title: 'The Revolving Door',
    body: 'Without housing, employment, and community — stabilization is temporary. The majority of people who complete standard treatment relapse within a year (NIDA, 2020). We built a model to change that number.',
  },
  {
    icon: '📋',
    title: 'The Compliance Problem',
    body: 'Most systems measure compliance: Did the patient show up? Was the form filed? SAH measures outcomes: Is this person\'s life measurably better? Are they housed? Employed? Connected?',
  },
  {
    icon: '🧩',
    title: 'The Silo Problem',
    body: 'Housing is one system. Treatment is another. Employment is a third. None of them talk to each other. SAH built one integrated system — because disconnected programs produce disconnected people.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-electric/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 section-container text-center py-32">
          <div className="inline-flex items-center gap-2 bg-blue-electric/10 border border-blue-electric/20 rounded-full px-5 py-2 mb-10">
            <div className="w-2 h-2 bg-blue-electric rounded-full animate-pulse" />
            <span className="text-blue-electric text-sm font-semibold">Albuquerque, NM · Accepting Referrals</span>
          </div>

          <h1
            className="font-black text-white leading-[1.08] mb-8 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Most treatment programs manage addiction.{' '}
            <span className="text-blue-electric">We built a different model.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            Treatment. Housing. Employment. All integrated in one system —
            because disconnected programs produce disconnected people.
          </p>

          <p className="text-blue-electric font-black text-base md:text-lg mb-12 tracking-wide">
            1,000+ clients &nbsp;·&nbsp; 200+ staff &nbsp;·&nbsp; $0 grants
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/referrals" className="btn-primary text-center">
              Refer a Client
            </Link>
            <Link href="/services" className="btn-outline text-center">
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="w-full py-16 stats-gradient">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-animate>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 bg-navy-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">The Problem</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              The system wasn&apos;t designed{' '}
              <span className="text-blue-electric">to actually work.</span>
            </h2>
            <p className="section-body max-w-2xl mx-auto mt-4">
              Most treatment programs stabilize people and send them back to the same environment
              that made them sick — no housing, no job, no plan. Then they call it treatment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, i) => (
              <div key={i} className="card-hover group" data-animate>
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-electric-light transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">What We Do</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              Full spectrum.{' '}
              <span className="text-blue-electric">Nothing left out.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="card-hover group" data-animate>
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-electric-light transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── SIX LEVELS TEASER ── */}
      <section className="py-24 bg-navy-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-line" />
                <span className="section-label">The Model</span>
              </div>
              <h2 className="section-title text-white mb-6">
                Three years. Six levels.{' '}
                <span className="text-blue-electric">One direction: forward.</span>
              </h2>
              <p className="section-body mb-6">
                Recovery takes time. Not 30 days — three years. The six-level progression
                mirrors both housing and employment, so every step forward in treatment
                corresponds to a step forward in stability and purpose.
              </p>
              <p className="section-body mb-10">
                Progress is earned through behavior, not time. Every level has clear criteria.
                Every transition is tracked. The final level — Community Anchor — is designed
                to loop people back into the system as mentors, staff, and leaders.
              </p>
              <Link href="/housing" className="btn-primary inline-block">
                Explore the Six Levels
              </Link>
            </div>
            <div className="space-y-3 level-connector">
              {levels.map((item) => (
                <div
                  key={item.level}
                  className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-blue-electric/30 transition-all group bg-navy-card relative"
                  data-animate
                >
                  <span className="bg-blue-electric/10 text-blue-electric font-black text-sm rounded-full px-3 py-1 flex-shrink-0 mt-0.5 relative z-10">
                    {item.level}
                  </span>
                  <div>
                    <div className="text-white font-semibold group-hover:text-blue-electric-light transition-colors">{item.label}</div>
                    <div className="text-gray-400 text-sm mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEASER ── */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">Leadership</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              Built by people who&apos;ve been{' '}
              <span className="text-blue-electric">in the room.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { initials: 'PC', name: 'Paul Chavez', title: 'Chief Executive Officer', creds: ['LPCC', 'NM Broker', 'GB-98'] },
              { initials: 'AG', name: 'Anna Golding', title: 'President', creds: ['LADC', 'OTP Ops', 'Joint Commission'] },
            ].map((leader, i) => (
              <div key={i} className="card-hover flex items-center gap-5" data-animate>
                <div className="w-16 h-16 bg-blue-electric/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-electric font-black text-xl">{leader.initials}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{leader.name}</div>
                  <div className="text-blue-electric text-sm font-semibold">{leader.title}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {leader.creds.map((c, j) => (
                      <span key={j} className="text-xs bg-blue-electric/10 text-blue-electric px-2 py-0.5 rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="btn-outline">
              Learn More About SAH
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-navy-light relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 65%)' }} />
        <div className="section-container relative text-center">
          <div className="inline-flex items-center gap-2 bg-blue-electric/10 border border-blue-electric/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-electric rounded-full animate-pulse relative pulse-ring" />
            <span className="text-blue-electric text-sm font-semibold">Accepting Referrals</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto">
            Know someone who needs help?{' '}
            <span className="text-blue-electric">We built this for them.</span>
          </h2>
          <p className="section-body mb-10 max-w-xl mx-auto">
            SAH accepts referrals from hospitals, courts, social workers, family members, and
            anyone who knows someone who needs more than a 30-day program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/referrals" className="btn-primary">
              Refer a Client
            </Link>
            <a href="tel:+15052060288" className="btn-outline">
              Call (505) 206-0288
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'State of the Art Healing LLC — a behavioral health treatment organization in Albuquerque, NM. 1,000+ clients, 200+ staff, 250+ housing units. Zero grants.',
}

const comparisons = [
  {
    other: 'Treats addiction as an isolated medical problem',
    sah: 'Treats the whole person — clinical, housing, employment, community',
  },
  {
    other: 'Discharge when clinically stable, regardless of housing or employment',
    sah: 'Three-year structured pathway — stability in every domain before independence',
  },
  {
    other: 'Measures activity: appointments kept, forms filed',
    sah: 'Measures progress: real behavior change tracked in real time',
  },
  {
    other: 'Housing and treatment are separate systems that don\'t talk to each other',
    sah: 'Housing, treatment, and employment are one integrated system — one record',
  },
  {
    other: 'Traditional staffing models',
    sah: 'Staff accountability tied to quality of care and professional standards',
  },
]

const leaders = [
  {
    initials: 'PC',
    name: 'Paul Chavez',
    title: 'Chief Executive Officer',
    bio: "Paul Chavez holds a Master's in Counseling from UNM, an LPCC (#CCMH0211021), a NM Qualifying Broker license (#17203), and a GB-98 contractor license (#353981) — the rare combination that made it possible to build a recovery ecosystem instead of a program. He founded State of the Heart Recovery in 2020 with zero grants and zero VC. Five years later: six entities, 1,000+ active clients, 250+ beds. He now leads SAH as the operational center of that model.",
    credentials: ['LPCC #CCMH0211021', 'NM Broker #17203', 'GB-98 #353981'],
  },
  {
    initials: 'AG',
    name: 'Anna Golding',
    title: 'President, State of the Art Healing LLC',
    bio: 'Anna is the operational architect of State of the Art Healing. With nearly a decade of executive leadership across opioid treatment programs, she oversees clinical operations, Medicaid compliance, workforce development, and technology integration for the full SAH ecosystem. She holds an LADC license and has led organizations through CARF audits, regulatory expansions, and multi-site growth across New Mexico.',
    credentials: ['LADC CAD0197021', 'OTP Operations', 'Joint Commission'],
  },
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

export default function AboutPage() {
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
              <span className="section-label">About SAH</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8">
              Treatment that actually{' '}
              <span className="text-blue-electric">changes lives.</span>
            </h1>
            <p className="section-body max-w-3xl mb-6">
              State of the Art Healing LLC is a for-profit behavioral health treatment organization
              based in Albuquerque, New Mexico. We provide integrated treatment, housing, and
              employment pathways for people in recovery — 1,000+ clients, 200+ staff, 250+
              housing units, and zero grants.
            </p>
            <p className="section-body max-w-3xl">
              SAH was built because the existing system wasn&apos;t designed to solve the problem.
              We built something that is.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-navy-light">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">The Problem</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              Why SAH{' '}
              <span className="text-blue-electric">exists.</span>
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

      {/* Comparison Table */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">The Difference</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white max-w-3xl mx-auto">
              Not another treatment center.{' '}
              <span className="text-blue-electric">A different model entirely.</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop header */}
            <div className="hidden md:grid grid-cols-2 rounded-t-2xl overflow-hidden border border-navy-border">
              <div className="bg-navy-lighter px-6 py-4 border-r border-navy-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500/60 rounded-full" />
                  <span className="text-gray-400 font-semibold text-sm uppercase tracking-widest">Standard Treatment</span>
                </div>
              </div>
              <div className="bg-blue-electric/5 px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-electric rounded-full" />
                  <span className="text-blue-electric font-semibold text-sm uppercase tracking-widest">SAH</span>
                </div>
              </div>
            </div>
            {/* Desktop rows */}
            <div className="hidden md:block border border-t-0 border-navy-border rounded-b-2xl overflow-hidden">
              {comparisons.map((row, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="comparison-cell border-r border-navy-border text-gray-400 bg-navy-card/50">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {row.other}
                    </div>
                  </div>
                  <div className="comparison-cell text-white bg-blue-electric/[0.03]">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-electric flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {row.sah}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile: stacked */}
            <div className="md:hidden space-y-4">
              {comparisons.map((row, i) => (
                <div key={i} className="rounded-xl border border-navy-border overflow-hidden">
                  <div className="flex items-start gap-3 px-4 py-4 bg-navy-card/50">
                    <svg className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-400 text-sm">{row.other}</span>
                  </div>
                  <div className="flex items-start gap-3 px-4 py-4 bg-blue-electric/[0.03] border-t border-navy-border">
                    <svg className="w-4 h-4 text-blue-electric flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-sm">{row.sah}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-navy-light">
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
            <p className="section-body max-w-2xl mx-auto mt-4">
              SAH is run by clinicians, operators, and builders — people who understand
              recovery from the inside out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader, i) => (
              <div key={i} className="card-hover flex flex-col items-center text-center" data-animate>
                {/* Photo placeholder */}
                <div className="w-40 h-40 rounded-full mb-6 border-2 border-blue-electric/20 bg-navy-lighter flex items-center justify-center">
                  <span className="text-blue-electric font-black text-3xl">{leader.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                <p className="text-blue-electric text-sm font-semibold uppercase tracking-widest mt-1">
                  {leader.title}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">
                  {leader.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {leader.credentials.map((cred, j) => (
                    <span
                      key={j}
                      className="bg-blue-electric/10 border border-blue-electric/20 text-blue-electric text-xs px-3 py-1 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gradient-line" />
              <span className="section-label">Key Facts</span>
              <div className="gradient-line" />
            </div>
            <h2 className="section-title text-white">
              By the numbers.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '1,000+', label: 'Active Clients' },
              { number: '200+', label: 'Staff Members' },
              { number: '250+', label: 'Housing Units' },
              { number: '2020', label: 'Founded' },
            ].map((stat, i) => (
              <div key={i} className="card text-center glow-blue" data-animate>
                <div className="text-3xl md:text-4xl font-black text-blue-electric mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-light">
        <div className="section-container text-center">
          <h2 className="section-title text-white mb-6 max-w-3xl mx-auto">
            Ready to learn more?{' '}
            <span className="text-blue-electric">Let&apos;s talk.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/referrals" className="btn-primary">Refer a Client</Link>
            <Link href="/services" className="btn-outline">View Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Full-spectrum behavioral health services: MAT, IOP, residential treatment, counseling, peer support, housing, employment pathways, and digital skills training.',
}

const services = [
  {
    icon: '💊',
    title: 'Medically Assisted Treatment (MAT)',
    body: 'Evidence-based medication plus intensive therapy. Not just stabilization — a structured path toward full recovery. Dosing consistency tracked in real time. MAT is the clinical foundation that makes everything else possible — giving clients the stability they need to engage in therapy, build routines, and begin the work of recovery.',
  },
  {
    icon: '🧠',
    title: 'Intensive Outpatient (IOP)',
    body: '12 to 20 hours of therapy per week. Structured, evidence-based intensive outpatient programming. Clients receive structured therapy, education, and coping skills — while maintaining their daily responsibilities. IOP bridges the gap between residential treatment and full independence, keeping people engaged at the intensity level that actually produces change.',
  },
  {
    icon: '🏥',
    title: 'Residential Treatment',
    body: 'Accredited adult residential treatment for individuals who need a higher level of care. A therapeutic, structured environment with around-the-clock support — for clients who need more than outpatient can give. Residential treatment provides the immersive, 24/7 clinical environment some clients require to break through the patterns that brought them here.',
  },
  {
    icon: '💬',
    title: 'Individual & Group Counseling',
    body: 'Licensed counselors working individually and in groups to address underlying issues and build long-term coping skills. Structured, goal-oriented work tied to each client\'s treatment plan. Not just talk therapy — targeted clinical work that addresses the root causes of addiction, trauma, and behavioral health challenges.',
  },
  {
    icon: '🤝',
    title: 'Certified Peer Support',
    body: 'People in recovery supporting people in recovery. Peer specialists are the bridge between clinical care and lived experience — and consistently the most effective staff in the building. Certified, trained, and accountable. Peers provide the credibility and trust that clinical staff often cannot — because they\'ve been where the client is standing.',
  },
  {
    icon: '🏙️',
    title: 'Comprehensive Community Support',
    body: 'Wraparound services that follow clients into the community. Employment navigation, family reconnection, benefit access, housing support. Nothing falls through the cracks. Community support is what turns clinical progress into real-world stability — connecting treatment gains to the daily infrastructure of a functional life.',
  },
  {
    icon: '💼',
    title: 'Job Readiness & Employment Pathways',
    body: 'Structured job readiness programming that builds the skills, confidence, and connections people need to re-enter the workforce. Real credentials, not just preparation. Employment is not an afterthought — it is core infrastructure for sustained recovery. People who have income, purpose, and a schedule are fundamentally different from those who don\'t.',
  },
  {
    icon: '💻',
    title: 'Digital Skills Training',
    body: 'Hands-on digital media courses — graphic design, content creation, web development, and video production. Real skills for a digital economy, taught by experienced instructors to participants ready to build new careers. These are not certificate programs — they are entry points to genuine employment in the modern economy.',
  },
  {
    icon: '🏠',
    title: 'Six Levels of Housing',
    body: 'Crisis bed to independent living. Every transition earned through behavior — not time. Housing isn\'t a bonus feature. It\'s part of the treatment. SAH operates 250+ housing units across six structured levels — each one designed to match the client\'s stage of recovery and support their progression toward full independence.',
  },
]

export default function ServicesPage() {
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
              <span className="section-label">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8">
              Full spectrum.{' '}
              <span className="text-blue-electric">Nothing left out.</span>
            </h1>
            <p className="section-body max-w-3xl">
              Every level of recovery support in one integrated system — clinical treatment,
              housing, employment, digital skills, and peer support. Not separate programs
              that happen to share a name. A coordinated pathway that follows clients
              from crisis to community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="card-hover group" data-animate>
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-electric-light transition-colors">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-light">
        <div className="section-container text-center">
          <h2 className="section-title text-white mb-6 max-w-3xl mx-auto">
            Ready to make a referral?{' '}
            <span className="text-blue-electric">We&apos;re here.</span>
          </h2>
          <p className="section-body mb-10 max-w-xl mx-auto">
            SAH accepts referrals from hospitals, courts, social workers, family members, and self-referrals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/referrals" className="btn-primary">Refer a Client</Link>
            <a href="tel:+15052060288" className="btn-outline">Call (505) 206-0288</a>
          </div>
        </div>
      </section>
    </div>
  )
}

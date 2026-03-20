'use client'

import { useState, FormEvent } from 'react'

const assetTypes = [
 { value: 'business_card', label: 'Business Card' },
 { value: 'banner', label: 'Banner' },
 { value: 'newsletter', label: 'Newsletter' },
 { value: 'social_post', label: 'Social Post' },
 { value: 'sticker', label: 'Sticker' },
 { value: 'flyer', label: 'Flyer' },
]

const steps = [
 { emoji: '📝', title: 'Fill out the form', desc: 'Tell us what you need — asset type, purpose, any specific text.' },
 { emoji: '🤖', title: 'AI writes your copy', desc: 'Claude generates on-brand marketing copy tailored to your request.' },
 { emoji: '📧', title: 'Email in ~2 min', desc: 'The finished copy lands in your inbox, ready for Canva or print.' },
]

const assetGuide = [
 { type: 'Business Card', output: 'Name, title, contact info, credentials' },
 { type: 'Banner', output: 'Headline, subheadline, CTA' },
 { type: 'Newsletter', output: 'Subject line, intro, body sections, CTA' },
 { type: 'Social Post', output: 'Headline, body, hashtags, CTA' },
 { type: 'Sticker', output: 'Short punchy phrase, tagline' },
 { type: 'Flyer', output: 'Headline, event details, CTA, address' },
]

export default function DesignPage() {
 const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
 const [jobId, setJobId] = useState('')
 const [errorMsg, setErrorMsg] = useState('')

 async function handleSubmit(e: FormEvent<HTMLFormElement>) {
 e.preventDefault()
 setStatus('loading')
 setErrorMsg('')

 const form = e.currentTarget
 const data = new FormData(form)

 try {
 const res = await fetch('/api/design', { method: 'POST', body: data })
 const json = await res.json()

 if (json.success) {
 setJobId(json.jobId)
 setStatus('success')
 form.reset()
 } else {
 setErrorMsg(json.error || 'Something went wrong.')
 setStatus('error')
 }
 } catch {
 setErrorMsg('Could not reach the Design Agent. Please try again shortly.')
 setStatus('error')
 }
 }

 return (
 <div className="min-h-screen py-20 md:py-28">
 <div className="section-container max-w-2xl mx-auto px-4">

 {/* ── Header ── */}
 <div className="text-center mb-12">
 <span className="inline-block bg-blue-electric/10 border border-blue-electric/20 text-blue-electric text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6">
 Staff Only
 </span>
 <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Design Request</h1>
 <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
 Request marketing materials powered by AI. You&apos;ll receive copy by email within 2 minutes.
 </p>
 </div>

 {/* ── Success ── */}
 {status === 'success' && (
 <div className="bg-green-500/10 border border-green-500/40 rounded-2xl p-6 mb-8 text-center">
 <div className="text-3xl mb-3">✅</div>
 <h3 className="text-green-400 font-bold text-xl mb-1">Request submitted!</h3>
 <p className="text-green-400/80 text-sm mb-2">
 Job ID: <span className="font-mono font-bold text-green-300">{jobId}</span>
 </p>
 <p className="text-green-400/70 text-sm">Check your email in about 2 minutes.</p>
 </div>
 )}

 {/* ── Error ── */}
 {status === 'error' && (
 <div className="bg-red-500/10 border border-red-500/40 rounded-2xl p-6 mb-8 text-center">
 <div className="text-3xl mb-3">⚠️</div>
 <h3 className="text-red-400 font-bold text-lg mb-1">Something went wrong</h3>
 <p className="text-red-400/80 text-sm">{errorMsg}</p>
 </div>
 )}

 {/* ── Form ── */}
 <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 md:p-8">
 <form onSubmit={handleSubmit} className="space-y-5">

 {/* Organization */}
 <div>
 <label htmlFor="organization" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
 Organization
 </label>
 <select
 id="organization"
 name="organization"
 required
 className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
 >
 <option value="SAH">SAH — State of the Art Healing</option>
 <option value="SHR">SHR — State of the Heart Recovery</option>
 </select>
 </div>

 {/* Asset Type */}
 <div>
 <label htmlFor="asset_type" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
 Asset Type
 </label>
 <select
 id="asset_type"
 name="asset_type"
 required
 className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
 >
 <option value="">Select…</option>
 {assetTypes.map((t) => (
 <option key={t.value} value={t.value}>{t.label}</option>
 ))}
 </select>
 </div>

 {/* Purpose */}
 <div>
 <label htmlFor="purpose" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
 Purpose
 </label>
 <textarea
 id="purpose"
 name="purpose"
 required
 rows={3}
 placeholder="e.g., April MAT awareness event banner, Maria's new business cards…"
 className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
 />
 </div>

 {/* Names / Credentials */}
 <div>
 <label htmlFor="names" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
 Names / Credentials
 </label>
 <input
 type="text"
 id="names"
 name="names"
 placeholder="e.g., Maria Uttaro, HR Director, MBA"
 className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
 />
 </div>

 {/* Specific Text */}
 <div>
 <label htmlFor="specific_text" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
 Specific Text to Include
 </label>
 <textarea
 id="specific_text"
 name="specific_text"
 rows={2}
 placeholder="Any exact wording, phone numbers, addresses you need on the asset"
 className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
 />
 </div>

 {/* Your Email */}
 <div>
 <label htmlFor="requester_email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
 Your Email
 </label>
 <input
 type="email"
 id="requester_email"
 name="requester_email"
 required
 placeholder="you@sotahealing.com"
 className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
 />
 </div>

 {/* Submit */}
 <button
 type="submit"
 disabled={status === 'loading'}
 className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-wait text-white font-bold text-sm rounded-xl py-3 transition-colors mt-2"
 >
 {status === 'loading' ? 'Submitting…' : 'Request Asset →'}
 </button>
 </form>
 </div>

 {/* ── How It Works ── */}
 <div className="mt-16">
 <div className="flex items-center justify-center gap-3 mb-8">
 <div className="gradient-line" />
 <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">How It Works</span>
 <div className="gradient-line" />
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
 {steps.map((s, i) => (
 <div key={i} className="bg-[#111827] border border-[#1e293b] rounded-xl p-5 text-center">
 <div className="text-3xl mb-3">{s.emoji}</div>
 <div className="text-blue-electric text-xs font-bold uppercase tracking-widest mb-2">Step {i + 1}</div>
 <h3 className="text-white font-bold text-sm mb-1">{s.title}</h3>
 <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
 </div>
 ))}
 </div>
 </div>

 {/* ── Asset Guide ── */}
 <div className="mt-14">
 <div className="flex items-center justify-center gap-3 mb-6">
 <div className="gradient-line" />
 <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">What Each Type Produces</span>
 <div className="gradient-line" />
 </div>
 <div className="bg-[#111827] border border-[#1e293b] rounded-2xl divide-y divide-[#1e293b]">
 {assetGuide.map((a, i) => (
 <div key={i} className="flex items-start gap-4 px-5 py-3.5">
 <span className="text-blue-electric font-bold text-sm whitespace-nowrap min-w-[110px]">{a.type}</span>
 <span className="text-gray-400 text-sm">{a.output}</span>
 </div>
 ))}
 </div>
 </div>

 </div>
 </div>
 )
}

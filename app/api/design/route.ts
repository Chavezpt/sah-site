import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
 const body = await req.formData()

 const params = new URLSearchParams()
 params.append('organization', (body.get('organization') as string) || 'SAH')
 params.append('asset_type', (body.get('asset_type') as string) || '')
 params.append('purpose', (body.get('purpose') as string) || '')
 params.append('names', (body.get('names') as string) || '')
 params.append('specific_text', (body.get('specific_text') as string) || '')
 params.append('requester_email', (body.get('requester_email') as string) || '')

 try {
 const res = await fetch('http://localhost:8082/submit', {
 method: 'POST',
 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 body: params.toString(),
 })

 const html = await res.text()

 // Extract job ID from the Flask template response
 const match = html.match(/Job ID: <strong>([a-f0-9]+)<\/strong>/)
 const jobId = match ? match[1] : 'unknown'

 if (res.ok && html.includes('alert-success')) {
 return NextResponse.json({ success: true, jobId })
 }

 const errorMatch = html.match(/alert-error">\s*Something went wrong: (.*?)<br/)
 const errorMsg = errorMatch ? errorMatch[1] : 'Request failed. Check your inputs and try again.'
 return NextResponse.json({ success: false, error: errorMsg }, { status: 500 })
 } catch {
 return NextResponse.json(
 { success: false, error: 'Design Agent unavailable. Please try again shortly.' },
 { status: 503 },
 )
 }
}

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { otp } = await req.json()

  if (otp === '123456') {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 })
  }
}
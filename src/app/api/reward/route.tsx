import { NextResponse } from 'next/server'
import { rewardUser } from '@/lib/aiken'

export async function POST() {
  const result = await rewardUser('addr_test1vrqqrqzptgexalwxnvk93r8rxk58lmw0kxkg92r4h52crgsr6eucx')
  return NextResponse.json({ success: result })
}
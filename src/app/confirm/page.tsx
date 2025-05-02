
// app/confirm/page.tsx (OTP Confirmation Page)
'use client'
import { useState } from 'react'

export default function ConfirmPage() {
  const [otp, setOtp] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [rewarded, setRewarded] = useState(false)

  const handleConfirm = async () => {
    const res = await fetch('/api/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp }),
    })

    if (res.ok) {
      setConfirmed(true)
      const rewardRes = await fetch('/api/reward', { method: 'POST' })
      if (rewardRes.ok) setRewarded(true)
    } else {
      alert('Invalid OTP')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#f0fdf4] text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Confirm Disposal</h2>
      {!confirmed ? (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="border border-green-300 rounded-lg px-4 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleConfirm}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium shadow-sm"
          >
            Confirm
          </button>
        </>
      ) : rewarded ? (
        <div className="text-green-600 text-xl font-semibold mt-6">✅ Token rewarded! Thanks for recycling.</div>
      ) : (
        <div className="text-blue-600 mt-6">Verifying and rewarding...</div>
      )}
    </main>
  )
}

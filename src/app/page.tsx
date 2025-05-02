

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-[#d9f99d] via-[#bbf7d0] to-[#ccfbf1] text-center">
      <h1 className="text-5xl font-extrabold text-primary mb-4 tracking-tight">Welcome to DeCirco</h1>
      <p className="text-lg mb-8 max-w-2xl text-gray-700">
        Revolutionizing recycling through blockchain innovation. Earn DeCirco tokens when you confirm responsible recycling practices.
      </p>
      <a href="/confirm" className="px-8 py-3 rounded-full bg-primary text-white hover:bg-green-700 transition text-lg font-medium shadow-md">
        Dispose & Earn
      </a>
    </main>
  )
}

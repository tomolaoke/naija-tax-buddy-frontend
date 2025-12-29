// src/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Naija Wealth & Tax Buddy
          </h1>
          <p className="text-gray-600">
            Your calming financial coach for the 2026 tax changes
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/login">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="w-full bg-white hover:bg-gray-50 text-blue-700 font-medium py-3 px-6 rounded-lg border-2 border-blue-600 transition">
              Create Account
            </button>
          </Link>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Relax. We’ll help you stay in control of your money.
        </p>
      </div>
    </main>
  );
}
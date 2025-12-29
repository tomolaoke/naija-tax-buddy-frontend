'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
        localStorage.removeItem('user');
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Relax. I'm here to help you stay calm and in control of your finances.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            • Natural language chat with your financial coach<br />
            • 2026 Tax Shield tracker<br />
            • Quick Bucks gig suggestions<br />
            • Peace of mind alerts
          </p>
          <p className="text-sm text-gray-500 mt-8">
            Thank you for being an early user. The full experience is coming very soon!
          </p>
          <div className="mt-8">
            <a
              href="/chat"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition shadow-lg"
            >
              Start Chatting Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
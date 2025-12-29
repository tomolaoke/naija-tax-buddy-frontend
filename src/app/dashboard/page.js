// src/app/dashboard/page.js
'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = '/login';
    }
  }, []);

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
            Welcome back, {user.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Relax. I'm here to help you stay calm and in control of your finances.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            • Natural language chat with your financial coach<br/>
            • 2026 Tax Shield tracker<br/>
            • Quick Bucks gig suggestions<br/>
            • Peace of mind alerts
          </p>
          <p className="text-sm text-gray-500 mt-8">
            Thank you for being an early user. The full experience is coming very soon!
          </p>
        </div>
      </div>
    </main>
  );
}
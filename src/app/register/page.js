// src/app/register/page.js
'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // <-- Import this

export default function Register() {
  const router = useRouter();  // <-- Add this
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!name || !email || !password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        'https://naija-tax-buddy.onrender.com/auth/register',
        {
          name,
          email,
          password,
        }
      );

      // SUCCESS: Show message and auto-redirect to verify
      setSuccess('Account created! 🎉 Redirecting to verify your email...');

      // Clear form
      setName('');
      setEmail('');
      setPassword('');

      // Auto redirect after 2 seconds
      setTimeout(() => {
        router.push('/verify?email=' + encodeURIComponent(email));
      }, 2000);

    } catch (err) {
      const message =
        err.response?.data?.detail ||
        'Registration failed. Email may already be registered.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Create Your Account
        </h1>

        {error && (
          <p className="text-red-600 bg-red-50 p-3 rounded-lg text-center mb-4">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 bg-green-50 p-3 rounded-lg text-center mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password (min 8 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition disabled:opacity-70"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>

        <p className="text-center text-xs text-gray-500 mt-8">
          By registering, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}
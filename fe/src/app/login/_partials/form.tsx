'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export function FormLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:8000/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        router.push('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block font-bold text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-bold text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <Link href="/forget" className="text-xs text-blue-600 hover:underline">
        Forget Password?
      </Link>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-3 font-bold bg-eco rounded-md hover:bg-black hover:text-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

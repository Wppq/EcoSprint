'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { showErrorAlert } from '@/components/alert/alert';

export function FormRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    username: '',
    password: '',
    phone: '',
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
      await axios.post(
        'http://localhost:8000/api/register',
        formData,
      );
      router.push('/login');
    } catch (error) {
      await showErrorAlert(error);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="px-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-bold text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          {/* Email */}
          <div className="py-2">
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          {/* Address */}
          <div>
            <label htmlFor="address" className="block font-bold text-gray-700">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>
        <div className="px-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block font-bold text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          {/* Password */}
          <div className="py-2">
            <label htmlFor="password" className="block font-bold text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-bold text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>
      </div>
      {/* Submit button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full px-4 py-3 font-bold bg-eco rounded-md hover:bg-black hover:text-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

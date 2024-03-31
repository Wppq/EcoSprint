'use client';
import { Navbar } from '@/components/navbar/navbar';
import { CardDonation } from './_partials/card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Donation as DonationInterface } from '@/models/donation'

export default function Donation() {
  const [donations, setDonations] = useState<DonationInterface[]>([]);

  useEffect(() => {
    // Fetch donation data from API
    const fetchDonations = async () => {
      try {
        const response = await axios.get<DonationInterface[]>('http://localhost:8000/api/donation');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container mx-auto py-8 mt-20">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <CardDonation key={donation.id} donate={donation} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { Navbar } from '@/components/navbar/navbar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Donation } from '@/models/donation'

export default function DonateDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Donation | null>(null);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <Navbar />
      <div className="container mx-auto py-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img
            className="w-full h-96 object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-sm text-gray-600 mb-4">{product.location}</p>
            <p className="text-gray-700">{product.description}</p>
            <p className="mt-4 text-lg text-gray-800 font-semibold">
              {product.price}
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href={'/donate'}
                className="rounded-lg px-20 p-2 bg-black text-center hover:bg-gray-900 text-white md:text-base lg:text-lg font-semibold"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

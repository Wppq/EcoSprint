'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Payment } from '@/models/payment';
import Image from 'next/image';

interface RankInterface {
  rank: number;
  name: string;
  score: number;
}

export function Rank() {
  const [ranks, setRanks] = useState<RankInterface[]>([])

  useEffect(() => {
    const fetchRanks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/ranks');
        setRanks(response.data);
      } catch (error) {
        console.error('Error fetching ranks:', error);
      }
    };

    fetchRanks();
  }, []);

  return (
    <div className='pb-20 py-20' id='ranking'>
      <div className='text-center'>
        <h1 className="text-3xl font-bold mb-4 text-center">Rank</h1>
        <p>
        Berikut merupakan peringkat atau ranking pengguna berdasarkan kontribusi <br /> atau prestasi mereka dalam mendukung lingkungan
        </p>
      </div>
      <div className="container mx-auto flex justify-center pl-10">
        <table className="min-w-[64vw] bg-white shadow-md rounded my-6">
          <thead>
            <tr className="bg-eco">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {ranks.map((rank, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border px-4 py-2">{index+1}</td>
                <td className="border px-4 py-2 text-start flex">
                  <div className="bg-red-300 rounded-full h-12 w-12">
                  <Image
            className="w-12 h-12 rounded-full"
            src={'http://localhost:8000/api/image/27470334_7309681.jpg'}
            alt={rank.name}
            width={200}
            height={200}
          />
                  </div>
                  <p className="ml-4 mt-3">{rank.name}</p>
                </td>
                <td className="border px-4 py-2">{rank.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

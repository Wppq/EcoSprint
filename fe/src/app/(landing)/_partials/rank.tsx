'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface RankInterface {
  rank: number;
  name: string;
  score: number;
}

export function Rank() {
  const [ranks, setRanks] = useState<RankInterface[]>([
    {
      rank: 1,
      name: 'sarwidad',
      score: 100,
    },
    {
      rank: 2,
      name: 'ipeh',
      score: 90,
    },
    {
      rank: 3,
      name: 'sarwidad',
      score: 100,
    },
    {
      rank: 4,
      name: 'ipeh',
      score: 90,
    },
    {
      rank: 5,
      name: 'ipeh',
      score: 90,
    },
    {
      rank: 6,
      name: 'sarwidad',
      score: 100,
    },
    {
      rank: 7,
      name: 'ipeh',
      score: 90,
    },
    {
      rank: 8,
      name: 'sarwidad',
      score: 100,
    },
    {
      rank: 9,
      name: 'ipeh',
      score: 90,
    },
    {
      rank: 10,
      name: 'ipeh',
      score: 90,
    },
  ]);

  useEffect(() => {
    const fetchRanks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/rank');
        setRanks(response.data);
      } catch (error) {
        console.error('Error fetching ranks:', error);
      }
    };

    fetchRanks();
  }, []);

  return (
    <div className='pb-20' >
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
                <td className="border px-4 py-2">{rank.rank}</td>
                <td className="border px-4 py-2 text-start flex">
                  <div className="bg-red-300 rounded-full h-12 w-12"></div>
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

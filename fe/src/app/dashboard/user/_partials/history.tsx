'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { History as HistoryModel } from '@/models/history';

export function History() {
  const [histories, setHistories] = useState<HistoryModel[]>([]);
  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const { data } = await axios.get(
          'http://localhost:8000/api/history',
          config,
        );
        setHistories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistories();
  }, []);

  if (histories === null) {
    return <h1>Loading</h1>;
  }

  if (histories.length == 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center space-y-2 text-center">
        <p className="text-gray-600">Kamu belum memiliki riwayat apapun.</p>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen space-y-2">
        {histories.map((history, i) => (
          <div
            key={i}
            className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl text-center"
          >
            <div className="p-4 px-10 flex space-x-4">
              <div className="w-1/6">
                <p className="text-eco">{history.type}</p>
              </div>
              <div className="w-full text-start">
                <p>{history.title}</p>
              </div>
              <div className="w-1/6 text-start">
                {history.status == 'selesai' ? (
                  <p className="text-green-500">+{history.score}</p>
                ) : history.status == 'pending' ? (
                  <p className="text-yellow-500">0</p>
                ) : (
                  <p className="text-red-500">-{history.score}</p>
                )}
              </div>
              <div>
                {history.status == 'selesai' ? (
                  <p className="text-green-400">{history.status}</p>
                ) : history.status == 'pending' ? (
                  <p className="text-yellow-400">{history.status}</p>
                ) : (
                  <p className="text-red-400">{history.status}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

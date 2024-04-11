'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Payment } from '@/models/payment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { showErrorAlert } from '@/components/alert/alert';

export function Transaction() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        let token = null;
        if (typeof window !== 'undefined') {
          token = localStorage.getItem('token');
        }
        if (!token) {
          router.push('/login');
          return;
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(
          'http://localhost:8000/api/transaction',
          config,
        );
        setPayments(data);
      } catch (error) {
        await showErrorAlert(error);
      }
    };
    fetchPayments();
  }, []);

  const handlePaymentClick = (payment: Payment) => {
    if (payment.image_path != null) {
      setSelectedPayment(payment);
    } else {
      setSelectedPayment(null);
    }
  };

  const handleCloseImage = () => {
    setSelectedPayment(null);
    router.push('/dashboard');
  };

  const changeStatus = async (status: string, id: string) => {
    try {
      let token = null;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('token');
      }
      if (!token) {
        router.push('/login');
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.patch(
        'http://localhost:8000/api/transaction/' + id,
        {
          status: status,
        },
        config,
      );
    } catch (error) {
      await showErrorAlert(error);
    }
  };

  const handleStatusChangeFailed = () => {
    if (selectedPayment) {
      changeStatus('gagal', selectedPayment.id);
    }
  };

  const handleStatusChangeSuccess = () => {
    if (selectedPayment) {
      changeStatus('berhasil', selectedPayment.id);
    }
  };

  return (
    <>
      <div className="h-screen space-y-2">
        {payments.map((payment, i) => (
          <div
            key={i}
            className="bg-gray-900 text-gray-100 border-2 shadow-sm w-full rounded-xl text-center cursor-pointer"
            onClick={() => handlePaymentClick(payment)}
          >
            <div className="p-4 px-10 flex space-x-4">
              <div className="w-full text-start">
                <p>{payment.title}</p>
              </div>
              <div className="w-1/6 text-start">
                <p className="text-yellow-500">{payment.payment_method}</p>
              </div>
              <div className="w-1/6 text-start">
                <p className="text-green-500">{payment.amount}</p>
              </div>
              <div>
                {payment.status === 'berhasil' ? (
                  <p className="text-green-400">{payment.status}</p>
                ) : payment.status === 'pending' ? (
                  <p className="text-yellow-400">{payment.status}</p>
                ) : (
                  <p className="text-red-400">{payment.status}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPayment && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {selectedPayment.sender}
            </h2>
            <div className="mb-4">
              <Image
                src={`http://localhost:8000/api/image/${selectedPayment.image_path}`}
                alt={selectedPayment.title}
                width={500}
                height={500}
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-green-700 text-white shadow-lg py-2 px-4 rounded mr-2"
                onClick={handleStatusChangeSuccess}
              >
                Berhasil
              </button>
              <button
                className="bg-red-500 text-white shadow-lg py-2 px-4 rounded mr-2"
                onClick={handleStatusChangeFailed}
              >
                Gagal
              </button>
              <button
                className="border-2 shadow-lg py-2 px-4 rounded"
                onClick={handleCloseImage}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

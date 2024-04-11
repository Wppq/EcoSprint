'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Payment } from '@/models/payment';
import { useRouter } from 'next/navigation';
import { showErrorAlert } from '@/components/alert/alert';

interface UploadPopupProps {
  paymentId: string;
  onClose: () => void;
}

const UploadPopup: React.FC<UploadPopupProps> = ({ paymentId, onClose }) => {
  const [image, setImage] = useState<File | null>(null);
  const [sender, setSender] = useState<string>('');
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  };

  const handleUpload = async () => {
    if (!image || !sender) return;
    try {
      let token = null;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('token');
      }
        if (!token) {
          router.push('/login');
          return;
        }
      const formData = new FormData();
      formData.append('image', image);
      formData.append('sender', sender);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        `http://localhost:8000/api/transaction/${paymentId}`,
        formData,
        config,
      );
      alert('Image uploaded successfully');
      onClose();
    } catch (error) {
      await showErrorAlert(error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg space-y-4">
        <h2 className="text-2xl font-bold">Upload Image</h2>
        <div className="my-2">
          <input
            type="text"
            placeholder="Sender"
            className="border-2 mb-2 py-1 px-4"
            value={sender}
            onChange={handleSenderChange}
          />
        </div>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <p className="text-sm text-red-500">
          *Pastikan nama pengirim sama dengan foto yang terkerim
        </p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export function Transaction() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(
    null,
  );
  const router = useRouter()

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

  if (payments.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center space-y-2 text-center">
        <p className="text-gray-600">Kamu belum memiliki riwayat apapun.</p>
      </div>
    );
  }

  const handleCardClick = (paymentId: string,isSuccess: string) => {
    if(isSuccess !== "berhasil"){
      setSelectedPaymentId(paymentId);
    }
  };

  const handleCloseUploadPopup = () => {
    setSelectedPaymentId(null);
  };

  return (
    <div className="h-screen space-y-2">
      <h2 className="text-xl text-center mb-8">
        Silahkan Upload Bukti Pembayaran Jika Telah Membayar
      </h2>
      {payments.map((payment, i) => (
        <div
          key={i}
          className="bg-gray-900 text-gray-100 hover:bg-gray-500 border-2 shadow-sm w-full rounded-xl text-center cursor-pointer"
          onClick={() => handleCardClick(payment.id,payment.status)}
        >
          <div className="p-4 px-10 flex space-x-4">
            <div className="w-full text-start">
              <p>{payment.title}</p>
            </div>
            <div className="w-1/6 text-start">
              <p className="text-yellow-400">{payment.payment_method}</p>
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
      {selectedPaymentId !== null && (
        <UploadPopup
          paymentId={selectedPaymentId}
          onClose={handleCloseUploadPopup}
        />
      )}
    </div>
  );
}

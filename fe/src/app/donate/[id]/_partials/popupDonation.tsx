'use client';
import { showErrorAlert } from '@/components/alert/alert';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface PopupDonationProps {
  handleClosePopup: () => void;
  setShowPopup: (show: boolean) => void;
  id: string;
}

export function PopupDonation({
  handleClosePopup,
  setShowPopup,
  id,
}: PopupDonationProps) {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [paymentNumber, setPaymentNumber] = useState<string>('');

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);
    let newPaymentNumber = '';
    switch (selectedPaymentMethod) {
      case 'BNI':
        newPaymentNumber = '9920434018';
        break;
      case 'BSI':
        newPaymentNumber = '32876124234';
        break;
      case 'BRI':
        newPaymentNumber = '3287234612';
        break;
      case 'GoPay':
        newPaymentNumber = '4325132143';
        break;
      default:
        break;
    }
    setPaymentNumber(newPaymentNumber);
  };

  const handleConfirmPayment = async () => {
    try {
      if(!localStorage.getItem('token')){
        router.push('/login')
      }
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const response = await axios.post('http://localhost:8000/api/transaction', {
        id: id,
        amount: amount,
        payment_method: paymentMethod,
      },config);
      router.back();
    } catch (error) {
      await showErrorAlert(error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Konfirmasi</h2>
        <p className="mb-4">Apakah Anda yakin ingin bergabung dalam aksi?</p>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-1">
            Jumlah Pembayaran:
          </label>
          <input
            id="amount"
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            min={20000}
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-1">
            Metode Pembayaran:
          </label>
          <select
            id="paymentMethod"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option disabled value="">
              Pilih Metode Pembayaran
            </option>
            <option value="BNI">BNI</option>
            <option value="BSI">BSI</option>
            <option value="BRI">BRI</option>
            <option value="GoPay">GoPay</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="paymentNumber" className="block mb-1">
            Nomor Pembayaran:
          </label>
          <input
            id="paymentNumber"
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={paymentNumber}
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={handleClosePopup}
          >
            Batal
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={handleConfirmPayment}
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}

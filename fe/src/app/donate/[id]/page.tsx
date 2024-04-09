'use client';
import { Navbar } from '@/components/navbar/navbar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Donation } from '@/models/donation';
import axios from 'axios';
import Image from 'next/image';
import { formatDate } from '@/helpers/date';
import { HiOutlineShare } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { PopupVolunteer } from './_partials/popupVolunteer';
import { PopupDonation } from './_partials/popupDonation';

export default function DonateDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Donation | null>(null);
  const [copied, setCopied] = useState(false);
  const [showPopupVolunteer, setShowPopupVolunteer] = useState<Boolean>(false);
  const [showPopupDonation, setShowPopupDonation] = useState<Boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Donation>(
          `http://localhost:8000/api/donation/${id}`,
        );
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading</h1>;
  }

  const handlePopupVolunteer = () => {
    setShowPopupVolunteer(true);
  };

  const handleClosePopupVolunteer = () => {
    setShowPopupVolunteer(false);
  };

  const handlePopupDonation = () => {
    setShowPopupDonation(true);
  };

  const handleClosePopupDonation = () => {
    setShowPopupDonation(false);
  };

  return (
    <section>
      <Navbar />
      {showPopupVolunteer && (
        <PopupVolunteer
          handleClosePopup={handleClosePopupVolunteer}
          setShowPopup={setShowPopupVolunteer}
          id={product.id}
        />
      )}

      {showPopupDonation && (
        <PopupDonation
          handleClosePopup={handleClosePopupDonation}
          setShowPopup={setShowPopupDonation}
          id={product.id}
        />
      )}

      <div className="container mx-auto py-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <Image
              className="w-full h-96 object-cover rounded-lg"
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
            />
          </div>
          <div className="p-6">
            <div className="flex">
              <div className="pr-4 w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center w-full py-4 pb-6">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      className="rounded-full h-14 w-14"
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="text-lg font-semibold">Budi</p>
                </div>
                <p className="text-gray-700">{product.blog}</p>
              </div>
              <div className="w-80 border-l-2 pl-2 space-y-4">
                <div>
                  <h2>Lokasi: </h2>
                  <Link
                    href={'https://maps.app.goo.gl/R6k9sZXztr2hinfw9'}
                    className="underline text-blue-800"
                    target="_blank"
                  >
                    {product.location}
                  </Link>
                </div>
                <div>
                  <h2>Status : {product.status}</h2>
                </div>
                <div>
                  <h2>
                    Batas tanggal donasi : <br />{' '}
                    {formatDate(product.date_line)}
                  </h2>
                </div>
                {/* <div>
                  <h2>
                    Tanggal pelaksanaan : <br /> {formatDate(product.date_line)}
                  </h2>
                </div> */}
                <div>
                  <p>{product.collected_trees} Pohon&nbsp;</p>
                  <p className="text-gray-600">
                    terkumpul dari {product.tree_required}
                  </p>
                  <div className="w-full h-4 bg-gray-200 rounded overflow-hidden mt-2">
                    <div
                      className="h-full bg-eco"
                      style={{
                        width: `${
                          (product.collected_trees / product.tree_required) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex">
                  <p>Donatur terkini</p>
                  <p className="px-1">|</p>
                  <p>Donatur teratas</p>
                </div>
                <div className="w-full h-80 border-2 overflow-auto space-y-2 p-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                  {[1, 2, 3, 4, 5].map(() => (
                    <div className="bg-gray-200 p-2">
                      <div className="flex items-center w-full py-4 pb-6">
                        <div className="flex-shrink-0 mr-4">
                          <Image
                            className="rounded-full h-6 w-6"
                            src={product.image}
                            alt={product.title}
                            width={100}
                            height={100}
                          />
                        </div>
                        <p className="text-sm font-semibold">Budi</p>
                      </div>
                      <p className="text-xs">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quod obcaecati quidem eveniet.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-8">
              <button
                className="flex items-center bg-eco font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
                onClick={copyToClipboard}
              >
                <HiOutlineShare className="w-6 h-6 mr-2" />
                {copied ? 'Copied!' : 'Share'}
              </button>
              <button
                className="rounded-lg px-20 p-2 bg-black text-center  text-white md:text-base lg:text-lg font-semibold"
                onClick={handlePopupVolunteer}
              >
                Gabung Aksi
              </button>
              <button
                className="rounded-lg px-20 p-2 bg-black text-center  text-white md:text-base lg:text-lg font-semibold"
                onClick={handlePopupDonation}
              >
                Donasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

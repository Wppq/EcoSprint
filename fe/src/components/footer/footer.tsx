import Image from 'next/image';
import { Logo } from '@/../public/assets/img/logos';
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from 'react-icons/ci';

export function Footer() {
  return (
    <footer className="p-8 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="mt-[-60px]">
            <Image
              className="h-36"
              src={Logo}
              width={200}
              height={200}
              alt={''}
            />
            <div className='mt-[-45px]'>
              <h2 className="text-xl font-bold pl-12">Ikuti Kami</h2>
              <div className="flex space-x-4 mt-4 pl-12">
                <CiFacebook className="w-6 h-6 mr-2" />
                <CiTwitter className="w-6 h-6 mr-2" />
                <CiInstagram className="w-6 h-6 mr-2" />
                <CiLinkedin className="w-6 h-6 mr-2" />
              </div>
            </div>
          </div>
          <div className="footer-section flex justify-center">
            <div className="max-w-md">
              <h2 className="text-xl font-bold mb-4 text-eco-dark">
                Tentang Kami
              </h2>
              <p className="text-sm">
                EcoSprint adalah platform untuk menggalang dana untuk aksi-aksi
                lingkungan.
              </p>
            </div>
          </div>
          <div className="footer-section flex justify-center">
            <div className="max-w-md">
              <h2 className="text-xl font-bold mb-4 text-eco-dark">
                Link Cepat
              </h2>
              <ul className="text-sm">
                <li>
                  <a href="#">Tentang</a>
                </li>
                <li>
                  <a href="#">Aksi Lingkungan</a>
                </li>
                <li>
                  <a href="#">Donasi</a>
                </li>
                <li>
                  <a href="#">Hubungi Kami</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section flex justify-center">
            <div className="max-w-md">
              <h2 className="text-xl font-bold mb-4 text-eco-dark">
                Kontak Kami
              </h2>
              <p className="text-sm">Jl. Lorem Ipsum Dolor Sit Amet, No. 123</p>
              <p className="text-sm">Telp: (123) 456-7890</p>
              <p className="text-sm">Email: info@ecosprint.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EcoSprint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

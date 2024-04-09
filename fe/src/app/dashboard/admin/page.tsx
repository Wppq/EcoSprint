'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineAccessTime } from 'react-icons/md';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { LiaDonateSolid } from 'react-icons/lia';
import { Profile } from './_partials/profile';
import { Transaction } from './_partials/transaction';

export function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('home');

  useEffect(() => {}, []);

  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return <Profile/>;
      case 'home':
        return <h1>World</h1>;
      case 'transaction':
        return <Transaction/>;
      default:
        return <h1>Hello</h1>;
    }
  };

  const logout = () => {
    localStorage.clear();
    router.push('/');
  };

  return (
    <div className="flex px-40 h-screen">
      <div className="w-1/4 h-screen overflow-hidden">
        <div className="mt-40 rounded-xl">
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <div
                  className={`py-2 px-4 rounded-md flex ${
                    activeMenu === 'home' ? 'bg-eco' : 'text-gray-800'
                  } hover:bg-eco hover:cursor-pointer`}
                  onClick={() => setActiveMenu('home')}
                >
                  <MdOutlineAccessTime className="w-6 h-6 mr-2" />
                  Riwayat
                </div>
              </li>
              <li>
                <div
                  className={`py-2 px-4 rounded-md flex ${
                    activeMenu === 'profile' ? 'bg-eco ' : 'text-gray-800'
                  } hover:bg-eco hover:cursor-pointer`}
                  onClick={() => setActiveMenu('profile')}
                >
                  <CgProfile className="w-6 h-6 mr-2" />
                  Profile
                </div>
              </li>
              <li>
                <div
                  className={`py-2 px-4 rounded-md flex ${
                    activeMenu === 'transaction' ? 'bg-eco ' : 'text-gray-800'
                  } hover:bg-eco hover:cursor-pointer`}
                  onClick={() => setActiveMenu('transaction')}
                >
                  <LiaDonateSolid className="w-6 h-6 mr-2" />
                  Transaksi
                </div>
              </li>
              <li>
                <div
                  className={`py-2 px-4 rounded-md flex ${
                    activeMenu === 'notifications' ? 'bg-eco ' : 'text-gray-800'
                  } hover:bg-eco hover:cursor-pointer`}
                  onClick={() => logout()}
                >
                  <CgLogOut className="w-6 h-6 mr-2" />
                  logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-screen p-10 bg-eco/10 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

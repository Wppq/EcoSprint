'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineAccessTime } from 'react-icons/md';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { LiaDonateSolid } from 'react-icons/lia';
import { Transaction } from './_partials/transaction';
import { Navbar } from '@/components/navbar/navbar';
import { Profile } from '@/components/dashboard/profil';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');

  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return <Profile/>;
      case 'history':
        return <h1>History</h1>;
      case 'transaction':
        return <Transaction/>;
      default:
        return <Profile/>;
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
      router.push('/');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex px-40 h-screen">
        <div className="w-1/4 mt-20">
          <div className="rounded-xl">
            <div className="p-4">
              <ul className="space-y-2">
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
                    Transaction
                  </div>
                </li>
                <li>
                  <div
                    className={`py-2 px-4 rounded-md flex ${
                      activeMenu === 'history' ? 'bg-eco' : 'text-gray-800'
                    } hover:bg-eco hover:cursor-pointer`}
                    onClick={() => setActiveMenu('history')}
                  >
                    <MdOutlineAccessTime className="w-6 h-6 mr-2" />
                    History
                  </div>
                </li>
                <li>
                  <div
                    className={`py-2 px-4 rounded-md flex ${
                      activeMenu === 'notifications'
                        ? 'bg-eco '
                        : 'text-gray-800'
                    } hover:bg-eco hover:cursor-pointer`}
                    onClick={() => logout()}
                  >
                    <CgLogOut className="w-6 h-6 mr-2" />
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-screen p-10 overflow-y-auto pt-36">
          {renderContent()}
        </div>
      </div>
    </>
  );
}

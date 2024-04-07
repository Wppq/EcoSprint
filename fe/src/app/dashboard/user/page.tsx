'use client';
import { useEffect, useState } from 'react';
import { Profile } from './_partials/profil';
import { History } from './_partials/history';
import { useRouter } from 'next/navigation';
import { MdOutlineAccessTime, MdOutlineCampaign } from 'react-icons/md';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { LiaDonateSolid } from 'react-icons/lia';
import { Campaign } from './_partials/campaign';
import { Transaction } from './_partials/transaction';

export function UserDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {}, []);

  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return <History />;
      case 'profile':
        return <Profile />;
      case 'campaign':
        return <Campaign />;
      case 'transaction':
        return <Transaction />;
      default:
        return <History />;
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
                    activeMenu === 'campaign' ? 'bg-eco ' : 'text-gray-800'
                  } hover:bg-eco hover:cursor-pointer`}
                  onClick={() => setActiveMenu('campaign')}
                >
                  <MdOutlineCampaign className="w-6 h-6 mr-2" />
                  Kampanye
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
      <div className="w-3/4 h-screen p-10 bg-eco/20 overflow-auto">{renderContent()}</div>
    </div>
  );
}

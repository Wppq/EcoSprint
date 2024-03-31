'use client';
import { useState } from 'react';
import { Profile } from './_partials/profil';

export function UserDashboard() {
  const [activeMenu, setActiveMenu] = useState('home');

  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return <h1>Home</h1>;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <h1>Settings</h1>;
      case 'messages':
        return <h1>Message</h1>;
      case 'notifications':
        return <h1>Notification</h1>;
      default:
        return <h1>Home</h1>;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 h-screen">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Dashboard Menu</h2>
          <ul className="space-y-2">
            <li>
              <div
                className={`block py-2 px-4 rounded-md ${
                  activeMenu === 'home' ? 'bg-blue-500' : 'text-gray-800'
                } hover:bg-blue-600 hover:cursor-pointer`}
                onClick={() => setActiveMenu('home')}
              >
                Home
              </div>
            </li>
            <li>
              <div
                className={`block py-2 px-4 rounded-md${
                  activeMenu === 'profile' ? 'bg-blue-500 ' : 'text-gray-800'
                } hover:bg-blue-600 hover:cursor-pointer`}
                onClick={() => setActiveMenu('profile')}
              >
                Profile
              </div>
            </li>
            <li>
              <div
                className={`block py-2 px-4 rounded-md${
                  activeMenu === 'settings' ? 'bg-blue-500 ' : 'text-gray-800'
                } hover:bg-blue-600 hover:cursor-pointer`}
                onClick={() => setActiveMenu('settings')}
              >
                Settings
              </div>
            </li>
            <li>
              <div
                className={`block py-2 px-4 rounded-md${
                  activeMenu === 'messages' ? 'bg-blue-500 ' : 'text-gray-800'
                } hover:bg-blue-600 hover:cursor-pointer`}
                onClick={() => setActiveMenu('messages')}
              >
                Messages
              </div>
            </li>
            <li>
              <div
                className={`block py-2 px-4 rounded-md${
                  activeMenu === 'notifications'
                    ? 'bg-blue-500 '
                    : 'text-gray-800'
                } hover:bg-blue-600 hover:cursor-pointer`}
                onClick={() => setActiveMenu('notifications')}
              >
                Notifications
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 bg-gray-100 h-screen">{renderContent()}</div>
    </div>
  );
}

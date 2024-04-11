'use client';
import axios from 'axios';
import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { showErrorAlert } from '../alert/alert';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    const fertchUserData = async () => {
      try {
        let token = null;
        if (typeof window !== 'undefined') {
          token = localStorage.getItem('token');
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(
          'http://localhost:8000/api/user',
          config,
        );
        setUserData(data);
      } catch (error) {
        if (typeof window !== 'undefined') {
          localStorage.clear();
        }
        await showErrorAlert(error);
      }
    };
    fertchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updateDataUser = async () => {
      try {
        let token = null;
        if (typeof window !== 'undefined') {
          token = localStorage.getItem('token');
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.put(
          'http://localhost:8000/api/user',
          userData,
          config,
        );
        setIsEditing(false);
        Router.router?.reload;
      } catch (error) {
        await showErrorAlert(error);
      }
    };
    updateDataUser();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!userData) {
    return <h1>loading</h1>;
  }

  return (
    <section>
      <div className="flex justify-center pb-10">
        <div className="text-center space-y-4 font-extrabold text-2xl">
          <Image
            className="w-28 h-28 rounded-full"
            src={'https://via.placeholder.com/640x480.png/00dd22?text=veniam'}
            alt={userData.name}
            width={200}
            height={200}
          />
          <h2 className="text-base text-gray-600 rounded-2xl">Rank 21</h2>
        </div>
      </div>
      {isEditing ? (
        <div>
          <div className="flex space-x-2">
            <div className="mb-4 w-1/2">
              <label htmlFor="name" className=" text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4 w-1/2">
              <label
                htmlFor="username"
                className=" text-gray-700 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex justify-between">
            <button
              className="bg-eco hover:bg-eco-dark hover:text-white px-4 py-2 rounded-md"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex space-x-2">
            <div className="mb-4 w-1/2">
              <label htmlFor="name" className=" text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                readOnly
              />
            </div>
            <div className="mb-4 w-1/2">
              <label
                htmlFor="username"
                className=" text-gray-700 font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                readOnly
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your address"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
              readOnly
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              className="bg-eco hover:bg-eco-dark hover:text-white px-4 py-2 rounded-md"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

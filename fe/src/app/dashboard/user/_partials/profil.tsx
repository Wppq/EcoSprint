'use client';
import { useState } from 'react';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    username: 'johndoe',
    address: '123 Main St',
    phone: '123-456-7890',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Lakukan logika penyimpanan perubahan profil
    setIsEditing(false);
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Profile</h2>
      {isEditing ? (
        <div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
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
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
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
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
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
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Name:</p>
            <p className="text-gray-600">{userData.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Username:</p>
            <p className="text-gray-600">{userData.username}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Address:</p>
            <p className="text-gray-600">{userData.address}</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Phone:</p>
            <p className="text-gray-600">{userData.phone}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleEditClick}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

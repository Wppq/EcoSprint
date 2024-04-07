import { useState } from 'react';
export function Campaign() {
  return (
    <section className="overflow-y-auto mt-20">
      <CreateForm />
    </section>
  );
}

const CreateForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    expDate: '',
  });

  const availableLocations = ['Location 1', 'Location 2', 'Location 3'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block font-semibold text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="location" className="block font-semibold text-gray-700">
          Location
        </label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleLocationChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
        >
          <option value="" disabled>Select Location</option>
          {availableLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="expDate" className="block font-semibold text-gray-700">
          Expiry Date
        </label>
        <input
          type="date"
          id="expDate"
          name="expDate"
          value={formData.expDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-eco hover:text-white font-semibold py-2 rounded-md hover:bg-eco-dark focus:outline-none focus:ring focus:ring-indigo-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

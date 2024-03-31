export function FormRegister() {
  return (
    <form className="mt-8 space-y-6">
      <div className="flex">
        <div className="px-4">
          <div>
            <label htmlFor="name" className="block font-bold text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="py-2">
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block font-bold text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>
        <div className="px-4">
          <div>
            <label htmlFor="username" className="block font-bold text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="py-2">
            <label htmlFor="password" className="block font-bold text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-bold text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full px-4 py-3 font-bold bg-eco rounded-md hover:bg-black hover:text-white focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="flex items-center  w-11/12 justify-between p-4 bg-white shadow-sm">
      <div className="flex space-x-6">
        <Link href="/admin" className="hover:text-gray-600">Admin</Link>
        <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-gray-600">Terms and Conditions</Link>
        <Link href="/refunds" className="hover:text-gray-600">Refunds</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className={`p-2 rounded-md transition-all duration-300 ${
              isSearchFocused ? 'border-2 border-blue-500' : 'border border-gray-300'
            }`}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
        <button className="px-4 py-2 border border-[#272727] rounded-md hover:bg-gray-100 transition-colors duration-300">
          Sign Up
        </button>
        <button className="px-4 py-2 bg-[#272727] text-white rounded-md hover:bg-gray-800 transition-colors duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
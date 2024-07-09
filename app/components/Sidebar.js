import React, { useState } from 'react';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { 
  MdDashboard, MdAccountBalance, MdPerson, MdSupport, 
  MdFingerprint, MdDirectionsCar, MdHowToVote, MdCreditCard,
  MdLocalHospital, MdWork
} from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <MdDashboard /> },
    { name: 'Recharge Now', icon: <MdAccountBalance /> },
    { name: 'User Panel', icon: <MdPerson /> },
    { name: 'Whatsapp Support', icon: <FaWhatsapp /> },
    { name: 'Aadhar Advance', icon: <MdFingerprint /> },
    { name: 'DL Instant Print', icon: <MdDirectionsCar /> },
    { name: 'Manual Aadhar', icon: <MdFingerprint /> },
    { name: 'Voter Photo', icon: <MdHowToVote /> },
    { name: 'Voter Card', icon: <MdHowToVote /> },
    { name: 'PAN Card', icon: <MdCreditCard /> },
    { name: 'Advance Ayushman', icon: <MdLocalHospital /> },
    { name: 'E-Shram Card Apply', icon: <MdWork /> },
  ];

  return (
    <div className=" bg-white h-screen p-4 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Rahul Kumar</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm">4</span>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      
      <button 
        className="flex items-center justify-between w-full p-2 bg-blue-100 rounded mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Services</span>
        <FaChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`overflow-y-auto transition-all duration-300 ${isOpen ? 'max-h-[calc(100vh-250px)]' : 'max-h-0'}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
           <span className='text-orange-700'>{item.icon}</span> 
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex  items-center space-x-2 p-2">
          <FaWhatsapp className='text-green-500' />
          <span>Support</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">Demo Prototype developed by Nishant Kumar</p>
      </div>
    </div>
  );
};

export default Sidebar;
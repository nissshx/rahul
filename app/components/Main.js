import React from 'react';
import { FaWallet, FaStore, FaUsers, FaClinicMedical } from 'react-icons/fa';

const Dashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-gray-100 min-h-screen w-11/12 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">DASHBOARD</h1>
        
        <div className="mb-6">
          <p className="text-xl">{currentDate}</p>
          <p className="text-lg text-gray-600">{currentTime}</p>
        </div>

        <div className="grid grid-cols-2  gap-6 w-8/12">
          <DashboardCard 
            title="Wallet Balance"
            value="₹10,000"
            icon={<FaWallet className="text-blue-500" />}
          />
          <DashboardCard 
            title="Total Retailer Count"
            value="250"
            icon={<FaStore className="text-green-500" />}
          />
          <DashboardCard 
            title="Total Distributor Count"
            value="50"
            icon={<FaUsers className="text-purple-500" />}
          />
          <DashboardCard 
            title="Ayushman Approval Count"
            value="1,000"
            icon={<FaClinicMedical className="text-red-500" />}
          />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      <div className="mr-4 text-3xl">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Dashboard;
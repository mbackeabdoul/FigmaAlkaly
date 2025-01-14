import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Favorites from './Favorites';
import Inbox from './Inbox';
import women from './images/women.png';
import drapeau from './images/drapeau.png';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-60 bg-white h-full 
          transform transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
        `}
      >
        <div className="p-6">
          <span className="text-xl font-bold text-blue-600">DashStack</span>
        </div>

        <header className="px-4 overflow-y-auto max-h-full">
          <Link to="/" className="flex items-center px-4 py-2 mb-1 rounded-lg">
            <span className="mr-3">📊</span>
            Dashboard
          </Link>
          <Link to="/products" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📦</span>
            Products
          </Link>

          <Link to="/favorites" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">❤️</span>
            Favorites
          </Link>
          <Link to="/inbox" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📧</span>
              Inbox
              </Link>
          <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📝</span>
            Order Lists
          </Link>
          <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span className="mr-3">📈</span>
            Product Stock
          </Link>

          <div className="mt-8">
            <span className="px-4 text-xs font-semibold text-gray-500 uppercase">Pages</span>
            <div className="mt-4">
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">💰</span>
                Pricing
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📅</span>
                Calendar
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">✅</span>
                To-Do
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📞</span>
                Contact
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">📄</span>
                Invoice
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-4">
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">⚙️</span> Settings
              </Link>
              <Link to="#" className="flex items-center px-4 py-2 mb-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <span className="mr-3">🚪</span> Logout
              </Link>
            </div>
          </div>

        </header>
      </aside>

      <div className="flex flex-col flex-1">
        <nav className="bg-white border-b w-full">
          <div className="flex items-center justify-between px-2 md:px-6 py-2 md:py-4">
            <div className="hidden md:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2.5">🔍</span>
              </div>
            </div>

            <div className="flex items-center gap-3 space-x-2 ml-1 md:space-x-6 ml-auto">
              <div className="flex items-center space-x-1 md:space-x-2">
                <img src={drapeau} className="rounded-lg h-6 w-6 md:h-8 md:w-10" alt="English flag" />
                <span className="text-xs md:text-sm text-gray-600">English</span>
              </div>

              <div className="relative inline-block text-blue-500 text-xl md:text-2xl">
                <span role="img" aria-label="notification">🔔</span>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                  6
                </span>
              </div>

              <div className="flex items-center space-x-1 md:space-x-2">
                <img src={women} className="rounded-full h-8 w-8 md:h-10 md:w-10" alt="User avatar" />
                <div className="text-xs md:text-sm">
                  <p className="font-medium">Moni Roy</p>
                  <p className="text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1  bg-gray-50"> {/* Add overflow-y-auto for main content */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/inbox" element={<Inbox />} />

          </Routes>
        </main>
      </div>

      <button
        className="fixed left-2 top-0 z-30 md:hidden p-2"
        onClick={toggleSidebar}
      >
        <span className="text-3xl">☰</span>
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AppLayout;

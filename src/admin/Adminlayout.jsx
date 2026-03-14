import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- SECURITY CHECK ---
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated !== 'true') {
      console.log('Not authenticated, redirecting to login...');
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the custom login state
    localStorage.removeItem('isAdminAuthenticated');
    localStorage.removeItem('adminEmail');
    setIsSidebarOpen(false);
    navigate('/admin');
  };
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 bg-white rounded-full shadow-lg border border-gray-300"
        >
          {isSidebarOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-gray-700 flex flex-col justify-between p-6 shadow-xl border-r transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 md:flex
        `}
      >
        <div>
          <div className="mb-6 flex justify-center">
            <Link to="/" onClick={closeSidebar} className="w-[100px]">
              <img src={logo} alt="Logo" className="w-full" />
            </Link>
          </div>
          <h2 className="text-xl font-bold mb-8 text-center text-indigo-600">SDC Admin</h2>
          <nav className="space-y-2">
            <Link to="/admin/dashboard" onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-indigo-50 hover:text-indigo-600 font-medium">Dashboard</Link>
            <Link to="/admin/add-classes" onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-indigo-50 hover:text-indigo-600 font-medium">Manage Classes</Link>
            <Link to="/admin/add-news" onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-indigo-50 hover:text-indigo-600 font-medium">Manage News</Link>
            <Link to="/admin/add-products" onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-indigo-50 hover:text-indigo-600 font-medium">Manage Products</Link>
            <Link to="/admin/manage-lessons" onClick={closeSidebar} className="block py-2 px-4 rounded hover:bg-indigo-50 hover:text-indigo-600 font-medium">Manage Lessons</Link>
          </nav>
        </div>
        
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto pt-20 md:pt-8"> 
        {children}
      </div>
    </div>
  );
};
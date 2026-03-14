import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import Manoloka from './pages/Manoloka';
import NewsPage from './pages/NewsPage';
import ProductionsPage from './pages/Productions';
import ClassesPage from './pages/ClassesPage';
import MerchsPage from './pages/MerchsPage';
import ScrollToTop from './components/ScrollToTop';
// Import the admin components
import { AdminLayout } from './admin/Adminlayout';
import { AdminLoginPage } from './admin/AdminLoginPage';
import { AdminDashboardPage } from './admin/AdminDashboardPage';
import { AddClassesPage } from './admin/AddClassesPage';
import { AddNewspage } from './admin/AddNewspage';
import { AddProductPages } from './admin/AddProductPages';
import { AddMerchpage } from './admin/AddMerch';
import ArtistsPage from './pages/Artists';
import LoginPage from './pages/LoginPage';
import LessonsPage from './pages/LessonsPage';
import ComingSoonPage from './pages/CommingSoonPage';
import Wannam from './pages/18wannam';
import Services from './pages/Services';
import Services2 from './pages/Services2';
import { AddLessonsPage } from './admin/AddLessonsPage';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage setActivePage={setActivePage} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/manoloka" element={<Manoloka />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/productions" element={<ProductionsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/merchs" element={<MerchsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/18wannam" element={<Wannam/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/services2" element={<Services2/>} />
          
          <Route path="/admin" element={<AdminLoginPage />} /> 
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
          <Route path="/admin/add-classes" element={<AdminLayout><AddClassesPage /></AdminLayout>} />
          <Route path="/admin/add-news" element={<AdminLayout><AddNewspage /></AdminLayout>} />
          <Route path="/admin/add-products" element={<AdminLayout><AddProductPages /></AdminLayout>} />
          <Route path="/admin/add-merch" element={<AdminLayout><AddMerchpage /></AdminLayout>} />
          <Route path="/admin/manage-lessons" element={<AdminLayout><AddLessonsPage /></AdminLayout>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
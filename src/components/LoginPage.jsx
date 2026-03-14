// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { loginbg } from '../utils/config';
import { supabase } from '../supabaseClient';

const LoginPage = ({ onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Simple mock login logic or check against your 'users' table if you have one
        // For now, let's treat any form submission as success to match your workflow
        const userData = { email: formData.email, name: formData.email.split('@')[0] };
        
        localStorage.setItem('currentUser', JSON.stringify(userData));
        if (onSuccess) onSuccess(userData);
        onClose(); 
      } else {
        // Sign up logic...
        setIsLogin(true);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div 
        className="rounded-xl p-8 max-w-md w-full relative shadow-2xl"
        style={{
          backgroundImage: `url(${loginbg})`,
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundBlendMode: 'multiply',
          border: '2px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-white">{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        {error && <p className="text-red-500 text-center mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-800 text-white rounded-lg outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
          >
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-4 text-gray-300 text-sm">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
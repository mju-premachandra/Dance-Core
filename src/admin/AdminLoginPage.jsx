import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single();

      if (error || !data) {
        setMessage({ text: 'Invalid email or password.', type: 'error' });
      } else if (!data.is_active) {
        setMessage({ text: 'Account is disabled.', type: 'error' });
      } else {
        // Success: Store simple auth state
        localStorage.setItem('isAdminAuthenticated', 'true');
        localStorage.setItem('adminEmail', data.email);
        
        setMessage({ text: 'Success! Redirecting...', type: 'success' });
        setTimeout(() => navigate('/admin/dashboard'), 1000);
      }
    } catch (err) {
      setMessage({ text: 'Error connecting to database.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border-t-4 border-indigo-600">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all"
          >
            {isLoading ? 'Verifying...' : 'Log In'}
          </button>
        </form>
        {message.text && (
          <p className={`mt-4 text-center font-medium ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};
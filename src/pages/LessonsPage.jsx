// src/pages/LessonsPage.jsx
import React, { useState, useEffect, forwardRef } from 'react';
import { bg } from '../utils/config';
import NavBar from '../components/NavBar';
import LoginPage from '../components/LoginPage';
import { supabase } from '../supabaseClient';
import { Lock, Download } from 'lucide-react';

const LessonsPage = forwardRef((props, ref) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    checkLoginStatus();
    fetchLessons();
  }, []);

  const checkLoginStatus = () => {
    const storedUser = localStorage.getItem('currentUser');
    setIsLoggedIn(!!storedUser);
  };

  const fetchLessons = async () => {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error('Error fetching lessons:', error);
    else setLessons(data || []);
  };

  const handleDownload = async (filePath, title, id) => {
    setLoadingId(id);
    try {
      const { data, error } = await supabase.storage
        .from('lessons')
        .download(filePath);

      if (error) throw error;

      // Create a download link for the blob
      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("Error downloading file: " + error.message);
    } finally {
      setLoadingId(null);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col items-center bg-black w-full min-h-screen">
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='lessons' />
      </div>
      
      <main
        className="flex-grow w-full p-4 sm:p-8 flex flex-col items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply'
        }}
      >
        <section className="w-full max-w-7xl">
          <div className="mt-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#ffffffff' }}>
              Lessons
            </h2>
            <div className='border-t border-gray-700 pt-4' />
            <p className="text-lg sm:text-md text-gray-300 mb-4">
              Explore our wide range of dance lessons designed for all skill levels. Whether you're a beginner or an experienced dancer, we have classes that suit your needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center text-black transform hover:scale-105 transition-all">
                                    
                  <h3 className="text-xl font-bold mb-2 text-center">{lesson.title}</h3>
                  <p className="text-sm text-gray-500 mb-6 text-center">PDF Learning Material</p>

                  {(!lesson.is_private || isLoggedIn) ? (
                    <button
                      onClick={() => handleDownload(lesson.file_url, lesson.title, lesson.id)}
                      disabled={loadingId === lesson.id}
                      className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition"
                    >
                      {loadingId === lesson.id ? 'Downloading...' : 'Download'}
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowLogin(true)}
                      className="w-full py-3 border-2 border-gray-900 text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition"
                    >
                      Login to Download
                    </button>
                  )}
                </div>
              ))}
            </div>

            {lessons.length === 0 && (
              <p className="text-gray-500 italic mt-20">No lessons available at the moment.</p>
            )}
          </div>
        </section>
      </main>

      {showLogin && (
        <LoginPage 
          onClose={() => setShowLogin(false)} 
          onSuccess={handleLoginSuccess} 
        />
      )}
    </div>
  );
});

export default LessonsPage;
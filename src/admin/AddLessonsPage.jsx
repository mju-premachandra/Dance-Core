import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Trash2, FileText, Lock, Unlock, Plus } from 'lucide-react';

export const AddLessonsPage = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error('Error fetching:', error);
    else setLessons(data || []);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) {
      setMessage({ text: 'Please provide both a title and a PDF file.', type: 'error' });
      return;
    }

    setLoading(true);
    setMessage({ text: 'Uploading lesson...', type: 'info' });

    try {
      // 1. Upload PDF to Private Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `lesson-pdfs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('lessons')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Save Reference to Database (saving the Path, not the public URL)
      const { error: dbError } = await supabase.from('lessons').insert([
        { 
          title, 
          file_url: filePath, 
          is_private: isPrivate 
        }
      ]);

      if (dbError) throw dbError;

      setMessage({ text: 'Lesson added successfully!', type: 'success' });
      setTitle('');
      setFile(null);
      setIsPrivate(false);
      fetchLessons();
    } catch (error) {
      setMessage({ text: error.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const deleteLesson = async (id, filePath) => {
    if (!window.confirm("Are you sure you want to delete this lesson?")) return;

    try {
      // Delete from Storage
      await supabase.storage.from('lessons').remove([filePath]);
      // Delete from DB
      await supabase.from('lessons').delete().eq('id', id);
      
      fetchLessons();
      setMessage({ text: 'Lesson deleted.', type: 'success' });
    } catch (error) {
      setMessage({ text: 'Error deleting lesson.', type: 'error' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Lessons</h1>
        <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
          {lessons.length} Total Lessons
        </div>
      </div>

      {/* Upload Form */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plus size={20} className="text-indigo-600" /> Add New Lesson
        </h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Title</label>
              <input 
                type="text" 
                placeholder="e.g., Hip Hop Basics Module 1" 
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PDF File</label>
              <input 
                type="file" 
                accept=".pdf" 
                className="w-full p-2 border rounded-lg file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 py-2">
            <label className="flex items-center cursor-pointer gap-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
              />
              <span className="text-sm text-gray-700 font-medium">Require Login to Download</span>
            </label>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white transition-all ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200'}`}
          >
            {loading ? 'Processing...' : 'Upload Lesson'}
          </button>
        </form>

        {message.text && (
          <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700' : message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
            {message.text}
          </div>
        )}
      </div>

      {/* Lessons List */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Title</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Access</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {lessons.map(lesson => (
              <tr key={lesson.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 flex items-center gap-3">
                  <div className="bg-red-50 p-2 rounded-lg text-red-600">
                    <FileText size={18} />
                  </div>
                  <span className="font-medium text-gray-800">{lesson.title}</span>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  {lesson.is_private ? (
                    <span className="flex items-center gap-1 text-amber-600 font-medium">
                      <Lock size={14} /> Private
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <Unlock size={14} /> Public
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => deleteLesson(lesson.id, lesson.file_url)} 
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Delete Lesson"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {lessons.length === 0 && (
              <tr>
                <td colSpan="3" className="p-8 text-center text-gray-400 italic">No lessons uploaded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
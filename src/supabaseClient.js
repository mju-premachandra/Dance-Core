import { createClient } from '@supabase/supabase-js';

// supabase janitha
//const supabaseUrl = 'https://yolyihamwyavzqksahjf.supabase.co';
//const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvbHlpaGFtd3lhdnpxa3NhaGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMDQwNzMsImV4cCI6MjA4Mzg4MDA3M30.BM3y9ddZJcHa45iuVxiU0awwKqVyrt3PmbzBM5aVoRo';


// supabase kulitha
const supabaseUrl = 'https://llipysemtxqdrppilhtp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsaXB5c2VtdHhxZHJwcGlsaHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzMzg3ODQsImV4cCI6MjA4MzkxNDc4NH0.Qn5JO4mF8mwUzgt2k3vE7nlBf7_FyEtaPg0LKi7V0qo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
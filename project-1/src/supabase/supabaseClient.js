import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztvmlrtbvbklfrnwvwhb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dm1scnRidmJrbGZybnd2d2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwOTIzODIsImV4cCI6MjA2MzY2ODM4Mn0.Bs30iScgAF9ZuBiAPoxhK10FQwDYL-52847GNz32CvU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

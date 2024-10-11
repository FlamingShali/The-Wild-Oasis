import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sxhigdibbkhiczaltcwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4aGlnZGliYmtoaWN6YWx0Y3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzODM3MDYsImV4cCI6MjA0Mzk1OTcwNn0.67Cukfbe2d11pzqsBYqjTMrg6DH0eqiMFo10EdiPJf4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

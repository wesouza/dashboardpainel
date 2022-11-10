import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://scmhqetdxwoslwpabpmr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjbWhxZXRkeHdvc2x3cGFicG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4NTAyOTQsImV4cCI6MTk4MzQyNjI5NH0.jb3FSFhR9KHiTTugp_UT5OiIOBQBvLiZOhfwQcAgOmc"
);

export default supabase;

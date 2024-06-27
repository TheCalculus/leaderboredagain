import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://agtqhbnwgarjvqofsjdl.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndHFoYm53Z2FyanZxb2ZzamRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MDU5MTksImV4cCI6MjAzNDI4MTkxOX0.h2eT98XJtHYYQ2EicDHpMVJxgHVeX7K6L_wPhakEsCM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.configDotenv();

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY ?? "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
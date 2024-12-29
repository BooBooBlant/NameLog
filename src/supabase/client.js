import { config } from "@/config.json.js";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	config.creditails.SUPABASE_URL,
	config.creditails.SUPABASE_ANON_KEY
);

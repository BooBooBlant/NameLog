import { supabase } from "@/supabase/client.js";

export async function GET(request) {
	const result = await supabase.from("user_join_counter").select();
	if (result.error) {
		throw result.error;
	}
	if (result.data.length === 0) {
		await supabase.from("user_join_counter").insert({ id: 0 });
	}

	const previousCount = result.data[0]?.count || 0;
	await supabase
		.from("user_join_counter")
		.update({ count: previousCount + 1 })
		.eq("id", 0);
	return new Response(previousCount);
}

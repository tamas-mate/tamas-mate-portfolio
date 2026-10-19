import { createClient, type SupabaseClient, type SupabaseClientOptions } from "@supabase/supabase-js";

let client: SupabaseClient | undefined;

export class SupabaseConfigurationError extends Error {
	constructor(cause: unknown) {
		super("Supabase client initialization failed", { cause });
		this.name = "SupabaseConfigurationError";
	}
}

export const getSupabase = (options: SupabaseClientOptions<"public"> = {}): SupabaseClient => {
	if (client) return client;

	try {
		client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY, {
			...options,
			db: {
				...options.db,
				retry: false,
			},
		});

		return client;
	} catch (cause) {
		throw new SupabaseConfigurationError(cause);
	}
};

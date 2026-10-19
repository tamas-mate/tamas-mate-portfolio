import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { getSupabase, SupabaseConfigurationError } from "@/lib/supabase";

import rawFallbackContent from "../data/content.json";

import type { Content } from "@/types";

const fallbackContent = rawFallbackContent as Content;

export function usePortfolioContent() {
	const query = useQuery<Content, Error>({
		queryKey: ["portfolio_content"],
		queryFn: async () => {
			const { data, error } = await getSupabase().from("portfolio_content").select("content").single();

			if (error) throw error;

			return data.content;
		},
		refetchOnWindowFocus: false,
		retry: (failureCount, error) => !(error instanceof SupabaseConfigurationError) && failureCount < 3,
	});
	const content = query.data ?? fallbackContent;
	const showInitialLoader = query.isPending && !query.isFetched;
	const error = query.error;

	useEffect(() => {
		if (error) {
			console.error("Error fetching portfolio content:", error);
		}
	}, [error]);

	return {
		showInitialLoader,
		content,
	};
}

import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

import rawFallbackContent from "../data/content.json";

import type { Content } from "@/types";

const fallbackContent = rawFallbackContent as Content;

export function usePortfolioContent(enabled: boolean) {
	const {
		isFetching,
		data: content,
		error,
	} = useQuery<Content, Error>({
		enabled,
		queryKey: ["portfolio_content"],
		queryFn: async () => {
			const { data, error } = await supabase.from("portfolio_content").select("content").single();

			if (error) throw error;

			return data.content;
		},
		initialData: fallbackContent,
	});

	return {
		isFetching,
		content,
		errorMessage: error ? `Error fetching portfolio content: ${error.message}! Fallback content used!` : null,
	};
}

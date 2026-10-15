import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import rawFallbackContent from "../data/content.json";

import type { Content } from "@/types";

const fallbackContent = rawFallbackContent as Content;

export function usePortfolioContent() {
	const query = useQuery<Content, Error>({
		queryKey: ["portfolio_content"],
		queryFn: async () => {
			const { data, error } = await supabase.from("portfolio_content").select("content").single();

			if (error) throw error;

			return data.content;
		},
		refetchOnWindowFocus: false,
	});
	const content = query.data ?? fallbackContent;
	const showInitialLoader = query.isPending && !query.isFetched;
	const error = query.error;

	useEffect(() => {
		if (error) {
			console.error(`Error fetching portfolio content: ${error.message}!`);
		}
	}, [error]);

	return {
		showInitialLoader,
		content,
	};
}

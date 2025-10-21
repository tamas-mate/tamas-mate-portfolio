import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

import fallbackContent from "../data/content.json";

import { useModal } from "@/context/modal-context";
import type { Content } from "@/types";

export function usePortfolioContent() {
	const { isModalOpen } = useModal();

	const {
		data: content,
		isFetching,
		error,
	} = useQuery<Content, Error>({
		queryKey: ["portfolio_content"],
		queryFn: async () => {
			const { data, error } = await supabase.from("portfolio_content").select("content").single();

			if (error) throw error;

			return data.content;
		},
		retry: 1,
		retryDelay: 1000,
		placeholderData: fallbackContent as unknown as Content,
		enabled: !isModalOpen,
	});

	return {
		content: content || fallbackContent,
		isFetching,
		errorMessage: error ? `Error fetching portfolio content: ${error.message}! Fallback content used!` : null,
	};
}

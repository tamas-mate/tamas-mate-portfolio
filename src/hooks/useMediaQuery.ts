import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(() => {
		if (typeof window === "undefined") return false;
		return window.matchMedia(query).matches;
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const mediaQueryList = window.matchMedia(query);
		const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

		mediaQueryList.addEventListener("change", onChange);

		return () => mediaQueryList.removeEventListener("change", onChange);
	}, [query]);

	return matches;
};

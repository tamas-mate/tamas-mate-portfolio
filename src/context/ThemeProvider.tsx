import { useEffect, useMemo, useState } from "react";

import { ThemeContext } from "./theme-context";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { ChildrenProvider, Theme } from "@/types";

const STORAGE_KEY = "theme";

const ThemeProvider = ({ children }: ChildrenProvider) => {
	const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(STORAGE_KEY) as Theme) || "system");
	const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
	const isDark = theme === "dark" || (theme === "system" && prefersDark);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", isDark);
		root.setAttribute("data-theme", isDark ? "dark" : "light");
	}, [isDark]);

	const value = useMemo(() => ({ theme, setTheme, isDark }), [theme, isDark]);

	return <ThemeContext value={value}>{children}</ThemeContext>;
};

export default ThemeProvider;

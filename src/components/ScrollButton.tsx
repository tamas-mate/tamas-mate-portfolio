import { useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "./ui/SVGComponent";

import { cl } from "@/utils/utils";

import type { ScrollButtonProps } from "@/types";

const SHOW_AFTER_PX = 300;

const subscribeToScroll = (onChange: () => void) => {
	window.addEventListener("scroll", onChange, { passive: true });

	return () => window.removeEventListener("scroll", onChange);
};

// Read during render, so a page restored halfway down shows the button immediately.
const isScrolledDown = () => document.documentElement.scrollTop > SHOW_AFTER_PX;

const ScrollButton = ({ onClick }: ScrollButtonProps) => {
	const { t } = useTranslation();
	const visible = useSyncExternalStore(subscribeToScroll, isScrolledDown);

	return (
		<button
			type="button"
			aria-label={t("a11y.back_to_top")}
			onClick={onClick}
			className={cl("group fixed right-7.5 bottom-7.5 p-5 hover:cursor-pointer", !visible && "hidden")}
		>
			<SVGComponent
				className="hover:stroke-accent group-hover:stroke-accent stroke-accent h-3 w-4.5 dark:stroke-white"
				viewBox="0 0 18 12"
			>
				<path fill="none" strokeWidth="3" d="M2 10 L9 3 L16 10" />
			</SVGComponent>
		</button>
	);
};

export default ScrollButton;

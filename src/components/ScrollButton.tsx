import { useEffect, useState } from "react";

import SVGComponent from "./ui/SVGComponent";

import { cl } from "@/utils/utils";

import type { ScrollButtonProps } from "@/types";

const ScrollButton = ({ onClick }: ScrollButtonProps) => {
	const [visible, setVisible] = useState(false);
	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) setVisible(true);
		else setVisible(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
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

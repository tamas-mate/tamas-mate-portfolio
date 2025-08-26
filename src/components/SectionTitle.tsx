import SVGComponent from "./SVGComponent";

import icons from "../assets/icons/data.json";

import { cl } from "@/utils/utils";
import type { SectionTitleProps } from "@/types";

const SectionTitle = ({ title, iconName, stroke }: SectionTitleProps) => {
	return (
		<div className="flex items-center gap-x-6 pt-7.5 pl-12 sm:pl-0">
			<SVGComponent className={cl("fill-gray size-6", stroke && "stroke-gray")} {...icons[iconName]} />
			<h2 className="w-full text-xl uppercase">{title}</h2>
		</div>
	);
};

export default SectionTitle;

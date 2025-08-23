import SVGComponent from "./SVGComponent";

import icons from "../assets/icons/data.json";

import { cl } from "@/utils/utils";
import type { SectionTitleProps } from "@/types";

const SectionTitle = ({ title, iconName, stroke }: SectionTitleProps) => {
	return (
		<div className="flex items-center pt-7.5 pl-12 sm:pl-0">
			<SVGComponent
				className={cl("min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 mr-6 fill-gray", stroke && "stroke-gray")}
				{...icons[iconName]}
			/>
			<h2 className="w-full text-xl uppercase">{title}</h2>
		</div>
	);
};

export default SectionTitle;

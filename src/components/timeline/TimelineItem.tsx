import SVGComponent from "../SVGComponent";

import icons from "../../assets/icons/data.json";
import type { TimelineItemProps } from "@/types";
import { cl } from "@/utils/utils";

type Props = {
	wrapperExtraStyles: string;
	iconName: keyof typeof icons;
};

const TimelineItem = ({
	wrapperExtraStyles,
	iconName,
	title,
	subTitle,
	location,
	date,
	extraContent,
}: Props & TimelineItemProps) => {
	const renderExtraContent = () => {
		if (!extraContent || extraContent.length === 0) return null;

		return (
			<div className="max-w-xl overflow-hidden">
				<div className="outline-none group" tabIndex={1}>
					<div className="flex justify-start items-center gap-4 py-3 text-gray-500 transition duration-500 cursor-pointer group ease lg:py-0">
						<span className="text-white transition duration-500 ease group-hover:text-accent group-focus:text-accent">
							Details
						</span>
						<div className="transition duration-500 ease -rotate-180 group-focus:-rotate-360">
							<SVGComponent
								className="w-4.5 h-3 stroke-white group-hover:stroke-accent group-focus:stroke-accent"
								viewBox="0 0 18 12"
							>
								<path fill="none" strokeWidth="3" d="M2 10 L9 3 L16 10" />
							</SVGComponent>
						</div>
					</div>
					<div className="max-h-0 max-w-0 mt-2 overflow-hidden transition duration-500 group-focus:max-h-screen group-focus:max-w-screen ease">
						<ul className="flex flex-col gap-y-2">
							{extraContent.map((item, index) => (
								<li key={index} className="flex items-start gap-x-4 text-pretty">
									<span className="flex h-[1lh] items-center -ml-1">
										<SVGComponent className="size-5 flex-none fill-accent" viewBox="0 0 20 20">
											<circle cx="10" cy="10" r="5" />
										</SVGComponent>
									</span>
									<p>{item}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={cl("flex items-start py-7.5 px-12 gap-2 bg-secondary rounded-sm", wrapperExtraStyles)}>
			<div className="flex justify-around items-start gap-10">
				<div className={`bg-lighter-dark3 rounded-sm p-3 mt-1.5`}>
					<SVGComponent className={"min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 fill-accent"} {...icons[iconName]} />
				</div>
				<div className={cl("flex flex-col gap-y-2", extraContent && "lg:w-50")}>
					<p className="text-base font-bold">{title}</p>
					<span>{subTitle}</span>
					<span>{location}</span>
					<span className="text-gray">{date}</span>
					<div className="lg:hidden">{renderExtraContent()}</div>
				</div>
				<div className="hidden lg:block">{renderExtraContent()}</div>
			</div>
		</div>
	);
};

export default TimelineItem;

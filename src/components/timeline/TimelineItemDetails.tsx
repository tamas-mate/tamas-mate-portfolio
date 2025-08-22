import { useState } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";

import { cl } from "@/utils/utils";

const TimelineItemDetails = ({ extraContent }: { extraContent: string[] }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="max-w-xl overflow-hidden">
			<div className="outline-none group" tabIndex={1}>
				<div
					className="flex justify-start items-center gap-4 py-3 text-gray-500 transition duration-500 cursor-pointer group ease lg:py-0"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="text-white transition duration-500 ease group-hover:text-accent group-focus:text-accent">
						{t("main.timeline.details")}
					</span>
					<div className={cl("transition duration-500 ease -rotate-180", isOpen && "-rotate-360")}>
						<SVGComponent
							className="w-4.5 h-3 stroke-white group-hover:stroke-accent group-focus:stroke-accent"
							viewBox="0 0 18 12"
						>
							<path fill="none" strokeWidth="3" d="M2 10 L9 3 L16 10" />
						</SVGComponent>
					</div>
				</div>
				<div
					className={cl(
						"max-h-0 max-w-0 mt-2 overflow-hidden transition duration-500 ease",
						isOpen && "max-h-screen max-w-screen",
					)}
				>
					<ul className="flex flex-col gap-y-2">
						{(t(extraContent, { returnObjects: true }) as string[]).map((item, index) => (
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

export default TimelineItemDetails;

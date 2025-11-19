import { useState } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../../ui/SVGComponent";

import { cl } from "@/utils/utils";

const TimelineItemDetails = ({ extraContent }: { extraContent: string[] }) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const extraContentArray = t(extraContent, { returnObjects: true }) as string[];

	return (
		<div className="max-w-xl overflow-hidden">
			<div className="group outline-none" tabIndex={0}>
				<button
					className="group ease flex cursor-pointer items-center justify-start gap-4 py-3 text-gray-500 transition duration-500 lg:py-0"
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
				>
					<span className="text-accent ease group-hover:text-accent group-focus:text-accent transition duration-500 dark:text-white">
						{t("main.timeline.details")}
					</span>
					<div className={cl("ease -rotate-180 transition duration-500", isOpen && "rotate-0")}>
						<SVGComponent
							className="stroke-accent group-hover:stroke-accent group-focus:stroke-accent h-3 w-4.5 dark:stroke-white"
							viewBox="0 0 18 12"
						>
							<path fill="none" strokeWidth="3" d="M2 10 L9 3 L16 10" />
						</SVGComponent>
					</div>
				</button>
				<div
					className={cl(
						"ease mt-2 max-h-0 max-w-0 overflow-hidden transition duration-500",
						isOpen && "max-h-screen max-w-screen",
					)}
				>
					<ul className="flex flex-col gap-y-2">
						{extraContentArray.map((item, index) => (
							<li key={index} className="flex items-start gap-x-4 text-pretty">
								<span className="-ml-1 flex h-lh items-center">
									<SVGComponent className="fill-accent size-5 flex-none" viewBox="0 0 20 20">
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

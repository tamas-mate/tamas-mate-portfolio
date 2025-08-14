import SVGComponent from "./SVGComponent";
import icons from "../assets/icons/data.json";

type Props = {
	extraStyles: string;
	iconName: keyof typeof icons;
	title: string;
	subTitle: string;
	location: string;
	date: string;
	extraContent?: string[];
};

const TimelineItem = ({ extraStyles, iconName, title, subTitle, location, date, extraContent }: Props) => {
	const renderExtraContent = () => {
		if (!extraContent || extraContent.length === 0) return null;

		return (
			<div className="max-w-xl overflow-hidden">
				<div className="outline-none group" tabIndex={1}>
					<div className="flex justify-start items-center gap-4 py-3 text-gray-500 transition duration-500 cursor-pointer group ease lg:py-0 lg:pb-3">
						<span className="text-white transition duration-500 ease group-hover:text-accent group-focus:text-accent">
							Details
						</span>
						<div className="transition duration-500 ease group-focus:-rotate-180">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="12"
								className="stroke-white group-hover:stroke-accent group-focus:stroke-accent"
							>
								<path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
							</svg>
						</div>
					</div>
					<div className="max-h-0 max-w-0 mt-2 overflow-hidden transition duration-500 group-focus:max-h-screen group-focus:max-w-screen ease">
						<ul className="flex flex-col gap-y-2">
							{extraContent.map((item, index) => (
								<li key={index} className="flex items-start gap-x-4 text-pretty">
									<span className="flex h-[1lh] items-center -ml-1">
										<svg className="size-5 flex-none fill-accent" viewBox="0 0 20 20" aria-hidden="true">
											<circle cx="10" cy="10" r="5" />
										</svg>
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
		<div className={`${extraStyles} flex items-start py-7.5 px-12 gap-2 bg-secondary rounded-sm`}>
			<div className="flex justify-around items-start gap-10">
				<div className="bg-lighter-dark3 rounded-sm p-3 mt-1">
					<SVGComponent className={"min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 fill-accent"} {...icons[iconName]} />
				</div>
				<div className={`flex flex-col gap-y-2 ${extraContent && "lg:w-50"}`}>
					<h3>{title}</h3>
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

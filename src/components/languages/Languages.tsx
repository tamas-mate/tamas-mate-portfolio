import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import type { LanguagesProps } from "@/types";

const Languages = ({ languages }: LanguagesProps) => {
	return (
		<section id="languages" className="py-15 sm:px-7.5">
			<SectionTitle title="Languages" iconName="languages" />
			<div className="flex bg-secondary rounded-sm py-7.5 px-12">
				{languages.map((language, index) => {
					return (
						<div className="flex justify-start items-center w-1/3 gap-2" key={index}>
							<span className="flex h-[1lh] items-center">
								<SVGComponent className="size-5 flex-none stroke-accent" viewBox="0 0 20 20">
									<circle cx="10" cy="10" r="5" fill="none" strokeWidth="5" />
								</SVGComponent>
							</span>
							<div className="flex flex-col w-full">
								<span>{language.name}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Languages;

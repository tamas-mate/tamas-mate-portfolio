import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import type { LanguagesProps } from "@/types";

const Languages = ({ languages }: LanguagesProps) => {
	return (
		<section id="languages" className="py-4 sm:px-7.5">
			<SectionTitle title="Languages" iconName="languages" />
			<div className="bg-secondary rounded-sm py-7.5 px-12">
				{languages.map((language, index) => {
					return (
						<div className="flex justify-start items-center gap-2 mt-3.5" key={index}>
							<span className="flex h-[1lh] items-center">
								<SVGComponent className="size-5 flex-none stroke-accent" viewBox="0 0 20 20">
									<circle cx="10" cy="10" r="5" fill="none" strokeWidth="5" />
								</SVGComponent>
							</span>
							<div className="flex flex-col w-full">
								<span>{language.name}</span>
								<div className="w-full h-2.5 bg-lighter-dark3">
									<div className={`h-full bg-accent ${language.level.rating}`}></div>
								</div>
								<span>{language.level.stage}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Languages;

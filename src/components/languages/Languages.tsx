import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import type { LanguagesProps } from "@/types";

const Languages = ({ languages }: LanguagesProps) => {
	const { t } = useTranslation();

	return (
		<section id="languages">
			<SectionTitle title={t("main.sections.languages")} iconName="languages" />
			<div className="flex flex-col bg-secondary rounded-sm py-7.5 px-12 gap-y-6 xsl:flex-row xsl:gap-y-0">
				{(t(languages, { returnObjects: true }) as string[]).map((language, index) => {
					return (
						<div className="flex justify-start items-center w-1/3 gap-2" key={index}>
							<span className="flex h-[1lh] items-center">
								<SVGComponent className="size-5 flex-none stroke-accent" viewBox="0 0 20 20">
									<circle cx="10" cy="10" r="5" fill="none" strokeWidth="5" />
								</SVGComponent>
							</span>
							<div className="flex flex-col w-full">
								<span>{language}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Languages;

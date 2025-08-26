import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import type { LanguagesProps } from "@/types";

const Languages = ({ languages }: LanguagesProps) => {
	const { t } = useTranslation();

	return (
		<section id="languages" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.languages")} iconName="languages" />
			<div className="bg-secondary border-border-gray xsl:flex-row xsl:gap-y-0 flex flex-col gap-y-6 rounded-sm border border-solid px-12 py-7.5">
				{(t(languages, { returnObjects: true }) as string[]).map((language, index) => {
					return (
						<div className="flex w-1/3 items-center justify-start gap-2" key={"language-" + index}>
							<span className="flex h-[1lh] items-center">
								<SVGComponent className="stroke-accent size-5 flex-none" viewBox="0 0 20 20">
									<circle cx="10" cy="10" r="5" fill="none" strokeWidth="5" />
								</SVGComponent>
							</span>
							<div className="flex w-full flex-col">
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

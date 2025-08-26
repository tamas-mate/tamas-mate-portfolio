import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";

import type { SummaryProps } from "@/types";

const Summary = ({ summary }: SummaryProps) => {
	const { t } = useTranslation();

	return (
		<section id="summary" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.summary")} iconName="summary" />
			<SectionWrapper>
				<p className="leading-relaxed text-pretty">{t(summary)}</p>
			</SectionWrapper>
		</section>
	);
};

export default Summary;

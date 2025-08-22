import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";

import type { SummaryProps } from "@/types";

const Summary = ({ summary }: SummaryProps) => {
	const { t } = useTranslation();

	return (
		<section id="summary">
			<SectionTitle title={t("main.sections.summary")} iconName="summary" />
			<SectionWrapper>
				<p className="text-pretty leading-relaxed">{t(summary)}</p>
			</SectionWrapper>
		</section>
	);
};

export default Summary;

import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";

import type { SummaryProps } from "@/types";

const Summary = ({ summary }: SummaryProps) => {
	return (
		<section id="summary">
			<SectionTitle title="Summary" iconName="summary" />
			<SectionWrapper>
				<p className="text-pretty leading-relaxed">{summary}</p>
			</SectionWrapper>
		</section>
	);
};

export default Summary;

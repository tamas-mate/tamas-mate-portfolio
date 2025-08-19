import type { SummaryProps } from "@/types";
import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";

const Summary = ({ summary }: SummaryProps) => {
	return (
		<section id="summary" className="py-15 sm:px-7.5">
			<SectionTitle title="Summary" iconName="summary" />
			<SectionWrapper>
				<p className="text-pretty leading-relaxed">{summary}</p>
			</SectionWrapper>
		</section>
	);
};

export default Summary;

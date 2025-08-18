import SectionTitle from "../SectionTitle";
import OverviewContent from "./OverviewContent";
import type { OverviewProps } from "@/types";

const Overview = ({ overview }: OverviewProps) => {
	return (
		<section id="overview" className="py-4 sm:px-7.5">
			<SectionTitle title="Overview" iconName="overview" />
			<div className="flex flex-col">
				{overview.map((item, index) => {
					return <OverviewContent key={index} content={item} className="last:mt-7.5" />;
				})}
			</div>
		</section>
	);
};
export default Overview;

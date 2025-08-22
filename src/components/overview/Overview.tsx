import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import OverviewContent from "./OverviewContent";

import type { OverviewProps } from "@/types";

const Overview = ({ overview }: OverviewProps) => {
	const { t } = useTranslation();

	return (
		<section id="overview">
			<SectionTitle title={t("main.sections.overview")} iconName="overview" />
			<div className="flex flex-col">
				{overview.map((item, index) => {
					return <OverviewContent key={index} className="last:mt-7.5" {...item} />;
				})}
			</div>
		</section>
	);
};
export default Overview;

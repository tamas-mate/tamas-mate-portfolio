import { useTranslation } from "react-i18next";

import SectionTitle from "../../ui/SectionTitle";
import OverviewContent from "./OverviewContent";

import type { OverviewProps } from "@/types";

const Overview = ({ overview }: OverviewProps) => {
	const { t } = useTranslation();

	return (
		<section id="overview" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.overview")} iconName="overview" />
			<div className="flex flex-col gap-y-7.5">
				{overview.map((item, index) => {
					return <OverviewContent key={"overview-content-" + index} {...item} />;
				})}
			</div>
		</section>
	);
};
export default Overview;

import { useTranslation } from "react-i18next";

import SectionTitle from "../../ui/SectionTitle";
import Skill from "./Skill";

import type { SkillsProps } from "@/types";

const Skills = ({ skills }: SkillsProps) => {
	const { t } = useTranslation();

	return (
		<section id="skills" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.skills")} iconName="skills" />
			<div className="bg-secondary border-border-gray rounded-sm border border-solid px-12 py-7.5">
				<ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
					{(t(skills, { returnObjects: true }) as string[]).map((skill, index) => {
						return <Skill key={"skill-" + index} skill={skill} />;
					})}
				</ul>
			</div>
		</section>
	);
};

export default Skills;

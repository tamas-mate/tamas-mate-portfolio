import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import Skill from "./Skill";

import type { SkillsProps } from "@/types";

const Skills = ({ skills }: SkillsProps) => {
	const { t } = useTranslation();

	return (
		<section id="skills">
			<SectionTitle title={t("main.sections.skills")} iconName="skills" />
			<div className="bg-secondary rounded-sm py-7.5 px-12">
				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
					{(t(skills, { returnObjects: true }) as string[]).map((skill, index) => {
						return <Skill key={index} skill={skill} />;
					})}
				</ul>
			</div>
		</section>
	);
};

export default Skills;

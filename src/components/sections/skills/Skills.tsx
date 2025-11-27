import { useTranslation } from "react-i18next";

import SectionTitle from "../../ui/SectionTitle";
import Skill from "./Skill";

import type { SkillsProps } from "@/types";

const Skills = ({ skills }: SkillsProps) => {
	const { t } = useTranslation();
	const skillsArray = t(skills, { returnObjects: true }) as string[];

	return (
		<section id="skills" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.skills")} iconName="skills" />
			<div className="bg-secondary border-border-gray rounded-sm border border-solid px-12 py-7.5">
				<ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
					{skillsArray.map((skill) => {
						return <Skill key={skill} skill={skill} />;
					})}
				</ul>
			</div>
		</section>
	);
};

export default Skills;

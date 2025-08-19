import type { SkillsProps } from "@/types";

import SectionTitle from "../SectionTitle";
import Skill from "./Skill";

const Skills = ({ skills }: SkillsProps) => {
	return (
		<section id="skills" className="py-15 sm:px-7.5">
			<SectionTitle title="Skills" iconName="skills" />
			<div className="bg-secondary rounded-sm py-7.5 px-12">
				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
					{skills.map((skill, index) => {
						return <Skill key={index} skill={skill} />;
					})}
				</ul>
			</div>
		</section>
	);
};

export default Skills;

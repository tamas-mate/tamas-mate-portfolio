import SVGComponent from "../SVGComponent";

const Skill = ({ skill }: { skill: string }) => {
	return (
		<li className="flex justify-start items-start gap-2">
			<span className="flex h-[1lh] items-center">
				<SVGComponent className="size-5 flex-none stroke-accent" viewBox="0 0 20 20">
					<circle cx="10" cy="10" r="5" fill="none" strokeWidth="5" />
				</SVGComponent>
			</span>
			<span>{skill}</span>
		</li>
	);
};

export default Skill;

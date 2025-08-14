import SVGComponent from "./SVGComponent";
import icons from "../assets/icons/data.json";

type Props = {
	title: string;
	iconName: keyof typeof icons;
};

const SectionTitle = ({ title, iconName }: Props) => {
	return (
		<div className="flex items-center mb-8">
			<SVGComponent className={"min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 mr-6 fill-gray"} {...icons[iconName]} />
			<h2 className="w-full text-xl uppercase">{title}</h2>
		</div>
	);
};

export default SectionTitle;

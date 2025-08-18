type Props = {
	className?: string;
	content: {
		years: string;
		description: string;
	};
};

const OverviewContent = ({ className: classNamne, content }: Props) => {
	return (
		<div className={`relative py-7.5 px-12 overflow-hidden bg-secondary rounded-sm ${classNamne}`}>
			<div className="absolute left-0 top-0 w-full h-full">
				<div className="absolute -top-18 -right-10 text-[12rem] font-bold text-lighter-dark2">{content.years}</div>
			</div>
			<div className="flex items-center uppercase text-xl">
				<span className="text-8xl font-semibold text-accent mr-10 pb-3">{content.years}</span>{" "}
				<span>{content.description}</span>
			</div>
		</div>
	);
};

export default OverviewContent;

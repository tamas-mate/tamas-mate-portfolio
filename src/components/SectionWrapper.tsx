const SectionWrapper = ({ children, extraStyles }: { children: React.ReactNode; extraStyles?: string }) => {
	return <div className={`${extraStyles ?? ""}py-7.5 px-12 bg-secondary rounded-sm`}>{children}</div>;
};

export default SectionWrapper;

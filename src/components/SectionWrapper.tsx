import type { ReactNode } from "react";

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return <div className="bg-secondary border-border-gray rounded-sm border border-solid px-12 py-7.5">{children}</div>;
};

export default SectionWrapper;

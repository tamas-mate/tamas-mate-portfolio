import type { ReactNode } from "react";

const SectionWrapper = ({ children }: { children: ReactNode }) => {
	return <div className="py-7.5 px-12 bg-secondary border border-solid border-border-gray rounded-sm">{children}</div>;
};

export default SectionWrapper;

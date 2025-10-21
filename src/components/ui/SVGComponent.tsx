import type { SVGComponentProps } from "@/types";

const SVGComponent = ({ className, viewBox, path, children }: SVGComponentProps) => {
	return (
		<svg className={className} viewBox={viewBox} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
			{children ?? (path ? <path fillRule="evenodd" clipRule="evenodd" d={path} /> : null)}
		</svg>
	);
};

export default SVGComponent;

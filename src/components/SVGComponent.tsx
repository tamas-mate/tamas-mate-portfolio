const SVGComponent = ({ className = "", viewBox = "", path = "" }) => {
	return (
		<svg className={className} viewBox={viewBox}>
			<path d={path}></path>
		</svg>
	);
};

export default SVGComponent;

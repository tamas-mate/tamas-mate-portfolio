const LoadingSpinner = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="h-20 w-20 border-t-4 border-b-4 border-accent rounded-full animate-spin "></div>
		</div>
	);
};

export default LoadingSpinner;

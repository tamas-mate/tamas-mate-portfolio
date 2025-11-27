import { lazy, Suspense } from "react";

import { useTheme } from "@/context/theme/theme-context";
import { toastContainerConfig } from "@/utils/utils";

const LazyToastContainer = lazy(() => import("react-toastify").then((module) => ({ default: module.ToastContainer })));
const ToastHost = () => {
	const { isDark } = useTheme();
	return (
		<Suspense fallback={null}>
			<LazyToastContainer theme={isDark ? "dark" : "light"} {...toastContainerConfig} />
		</Suspense>
	);
};

export default ToastHost;

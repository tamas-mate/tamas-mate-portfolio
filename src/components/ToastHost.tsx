import { ToastContainer } from "react-toastify";

import { useTheme } from "@/context/theme/theme-context";
import { toastContainerConfig } from "@/utils/utils";

const ToastHost = () => {
	const { isDark } = useTheme();
	return <ToastContainer theme={isDark ? "dark" : "light"} {...toastContainerConfig} />;
};

export default ToastHost;

import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";
import "./index.css";

import App from "./App.tsx";
import ModalProvider from "./context/ModalProvider.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";

import { toastContainerConfig } from "./utils/utils.ts";

const queryClient = new QueryClient();

const LazyToastContainer = lazy(() => import("react-toastify").then((module) => ({ default: module.ToastContainer })));

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalProvider>
				<ThemeProvider>
					<App />
					<Suspense fallback={null}>
						<LazyToastContainer {...toastContainerConfig} />
					</Suspense>
				</ThemeProvider>
			</ModalProvider>
		</QueryClientProvider>
	</StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";
import "./index.css";

import App from "./App.tsx";
import ModalProvider from "./context/ModalProvider.tsx";
import { toastContainerConfig } from "./utils/utils.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<ModalProvider>
				<App />
				<ToastContainer {...toastContainerConfig} />
			</ModalProvider>
		</QueryClientProvider>
	</StrictMode>,
);

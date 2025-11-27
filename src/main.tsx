import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";

import App from "./App.tsx";
import ToastHost from "./components/ToastHost.tsx";
import MobileMenuProvider from "./context/menu/MobileMenuProvider.tsx";
import ModalProvider from "./context/modal/ModalProvider.tsx";
import ThemeProvider from "./context/theme/ThemeProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalProvider>
				<ThemeProvider>
					<MobileMenuProvider>
						<App />
						<ToastHost />
					</MobileMenuProvider>
				</ThemeProvider>
			</ModalProvider>
		</QueryClientProvider>
	</StrictMode>,
);

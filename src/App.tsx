import { useTranslation } from "react-i18next";

import ScrollButton from "./components/ScrollButton";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Main from "./components/ui/Main";

import { usePortfolioContent } from "./hooks/usePortfolioContent";

const App = () => {
	const { showInitialLoader, content } = usePortfolioContent();
	const { t } = useTranslation();

	const handleScrollToTop = () => {
		// No behavior option: <html>'s CSS decides (smooth, or instant with reduced motion).
		window.scrollTo({ top: 0 });
		// Keyboard focus follows the visitor to the top instead of staying on the button that is about to hide.
		document.getElementById("page-title")?.focus({ preventScroll: true });
	};

	if (showInitialLoader) return <LoadingSpinner />;

	return (
		<>
			<div className="flex w-full flex-col items-center gap-y-15">
				<title>{t("page_title")}</title>
				<Header {...content.header} />
				<Main {...content.main} />
				<ScrollButton onClick={handleScrollToTop} />
				<Footer name={content.header.name} role={content.header.role} copyright={content.footer.copyright} />
			</div>
		</>
	);
};

export default App;

import { lazy, Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";

import ScrollButton from "./components/ScrollButton";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Main from "./components/ui/Main";

import { useModal } from "./context/modal/modal-context";
import { usePortfolioContent } from "./hooks/usePortfolioContent";

const ContactModal = lazy(() => import("./components/contact-modal/ContactModal"));

const App = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const { isModalOpen } = useModal();
	const { isFetching, content, errorMessage } = usePortfolioContent(!isModalOpen);
	const { t } = useTranslation();

	const handleScrollToTop = () => {
		divRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	if (isFetching) return <LoadingSpinner />;
	if (errorMessage) console.error(errorMessage);

	return (
		<>
			<div ref={divRef} className="flex w-full flex-col items-center gap-y-15">
				<title>{t("page_title")}</title>
				<Header {...content.header} />
				<Main {...content.main} />
				<ScrollButton onClick={handleScrollToTop} />
				<Footer
					name={content.header.name}
					role={content.header.role}
					cta={content.header.cta}
					copyright={content.footer.copyright}
				/>
			</div>
			{isModalOpen && (
				<Suspense fallback={null}>
					<ContactModal />
				</Suspense>
			)}
		</>
	);
};

export default App;

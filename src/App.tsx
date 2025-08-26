import { lazy, Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";

import LoadingSpinner from "./components/ui/LoadingSpinner";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import ScrollButton from "./components/ScrollButton";

import { usePortfolioContent } from "./hooks/usePortfolioContent";
import { useModal } from "./context/modal-context";

const ContactModal = lazy(() => import("./components/contact-modal/ContactModal"));

const App = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const { content, isFetching, errorMessage } = usePortfolioContent();
	const { isModalOpen } = useModal();
	const { t } = useTranslation();

	const scrollToTop = () => divRef.current!.scrollIntoView({ behavior: "smooth" });

	if (errorMessage) console.log(errorMessage);
	if (isFetching) return <LoadingSpinner />;

	return (
		<>
			<div ref={divRef} className="flex w-full flex-col items-center gap-y-15">
				<title>{t("page-title")}</title>
				<Header {...content.header} />
				<Main {...content.main} />
				<ScrollButton scrollToTop={scrollToTop} />
				<Footer
					name={content.header.name}
					role={content.header.role}
					cta={content.header.cta}
					copyright={content.footer.copyright}
				/>
			</div>

			<Suspense fallback={null}>{isModalOpen && <ContactModal {...content["contact-modal"]} />}</Suspense>
		</>
	);
};

export default App;

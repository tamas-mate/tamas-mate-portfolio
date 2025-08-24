import { lazy, Suspense } from "react";

import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";
import { usePortfolioContent } from "./hooks/usePortfolioContent";
import { useModal } from "./context/modal-context";

const ContactModal = lazy(() => import("./components/contact-modal/ContactModal"));

const App = () => {
	const { content, isFetching, errorMessage } = usePortfolioContent();
	const { isModalOpen } = useModal();

	if (errorMessage) console.log(errorMessage);
	if (isFetching) return <LoadingSpinner />;

	return (
		<>
			<div className="w-full flex flex-col items-center gap-y-15">
				<Header {...content.header} />
				<Main {...content.main} />
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

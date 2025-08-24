import LoadingSpinner from "./components/LoadingSpinner";
import ContactModal from "./components/contact-modal/ContactModal";
import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Footer from "./components/ui/Footer";

import { usePortfolioContent } from "./hooks/usePortfolioContent";

const App = () => {
	const { content, isFetching, errorMessage } = usePortfolioContent();

	if (errorMessage) console.log(errorMessage);

	if (isFetching) return <LoadingSpinner />;

	return (
		<>
			<ContactModal {...content["contact-modal"]} />
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
		</>
	);
};

export default App;

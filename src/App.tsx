import { ToastContainer } from "react-toastify";

import ContactModal from "./components/contact-modal/ContactModal";
import Header from "./components/ui/Header";
import Main from "./components/Main";
import Footer from "./components/ui/Footer";

import ModalProvider from "./context/ModalProvider";
import content from "./data/content.json";
import { toastContainerConfig } from "./utils/utils";

function App() {
	return (
		<ModalProvider>
			<ContactModal {...content["contact-modal"]} />
			<Header {...content.header} />
			<Main {...content.main} />
			<Footer
				name={content.header.name}
				role={content.header.role}
				cta={content.header.cta}
				copyright={content.footer.copyright}
			/>
			<ToastContainer {...toastContainerConfig} />
		</ModalProvider>
	);
}

export default App;

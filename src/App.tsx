import { ToastContainer } from "react-toastify";

import ContactModal from "./components/contact-modal/ContactModal";
import Header from "./components/ui/Header";
import Main from "./components/Main";
import Footer from "./components/ui/Footer";

import ModalProvider from "./context/ModalProvider";
import { toastContainerConfig } from "./utils/utils";

function App() {
	return (
		<ModalProvider>
			<ContactModal />
			<Header />
			<Main />
			<Footer />
			<ToastContainer {...toastContainerConfig} />
		</ModalProvider>
	);
}

export default App;

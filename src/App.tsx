import { Bounce, ToastContainer } from "react-toastify";

import ModalProvider from "./context/ModalProvider";
import ContactModal from "./components/contact-modal/ContactModal";
import Header from "./components/ui/Header";
import Main from "./components/Main";
import Footer from "./components/ui/Footer";

function App() {
	return (
		<ModalProvider>
			<div className="relative w-full font-sans text-white bg-primary">
				<ContactModal />
				<div className="max-w-260 mx-auto">
					<Header />
					<Main />
				</div>
				<Footer />
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Bounce}
			/>
		</ModalProvider>
	);
}

export default App;

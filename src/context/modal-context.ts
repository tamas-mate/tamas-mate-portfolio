import { createContext, useContext } from "react";

type ModalContextType = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
	const modalCtx = useContext(ModalContext);

	if (!modalCtx) {
		throw new Error("useModal must be used within a ModalProvider");
	}

	return modalCtx;
};

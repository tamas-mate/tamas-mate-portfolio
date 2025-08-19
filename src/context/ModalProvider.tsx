import { useEffect, useState } from "react";

import { ModalContext } from "./modal-context";

type ModalProviderProps = {
	children: React.ReactNode;
};

const ModalProvider = ({ children }: ModalProviderProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isModalOpen ? "hidden" : "auto";
	}, [isModalOpen]);

	const value = {
		isModalOpen,
		openModal: () => {
			setIsModalOpen(true);
		},
		closeModal: () => setIsModalOpen(false),
	};

	return <ModalContext value={value}>{children}</ModalContext>;
};

export default ModalProvider;

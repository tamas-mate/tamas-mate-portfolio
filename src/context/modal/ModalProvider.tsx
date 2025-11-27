import { useEffect, useState } from "react";

import { ModalContext } from "./modal-context";

import type { ChildrenProvider } from "@/types";

const ModalProvider = ({ children }: ChildrenProvider) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isModalOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isModalOpen]);

	const value = {
		isModalOpen,
		openModal: () => setIsModalOpen(true),
		closeModal: () => setIsModalOpen(false),
	};

	return <ModalContext value={value}>{children}</ModalContext>;
};

export default ModalProvider;

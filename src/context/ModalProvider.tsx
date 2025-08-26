import { useEffect, useMemo, useState } from "react";

import { ModalContext } from "./modal-context";

import type { ChildrenProvider } from "@/types";

const ModalProvider = ({ children }: ChildrenProvider) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isModalOpen ? "hidden" : "auto";
	}, [isModalOpen]);

	const value = useMemo(
		() => ({
			isModalOpen,
			openModal: () => setIsModalOpen(true),
			closeModal: () => setIsModalOpen(false),
		}),
		[isModalOpen],
	);

	return <ModalContext value={value}>{children}</ModalContext>;
};

export default ModalProvider;

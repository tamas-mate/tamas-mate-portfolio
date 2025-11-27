import { createContext, useContext } from "react";

import type { ModalContextType } from "@/types";

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
	const modalCtx = useContext(ModalContext);

	if (!modalCtx) {
		throw new Error("useModal must be used within a ModalProvider");
	}

	return modalCtx;
};

import { useEffect, useMemo, useRef, useState } from "react";

import { MobileMenuContext } from "./mobile-menu-context";

import type { ChildrenProvider } from "@/types";

const MobileMenuProvider = ({ children }: ChildrenProvider) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const triggerRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
	}, [isMenuOpen]);

	const value = useMemo(
		() => ({
			isMenuOpen,
			openMenu: () => setIsMenuOpen(true),
			closeMenu: () => setIsMenuOpen(false),
			triggerRef,
			setTriggerRef: (el: HTMLButtonElement) => (triggerRef.current = el),
		}),
		[isMenuOpen],
	);

	return <MobileMenuContext value={value}>{children}</MobileMenuContext>;
};

export default MobileMenuProvider;

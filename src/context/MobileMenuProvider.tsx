import { useMemo, useState } from "react";

import { MobileMenuContext } from "./mobile-menu-context";

import type { ChildrenProvider } from "@/types";

const MobileMenuProvider = ({ children }: ChildrenProvider) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const value = useMemo(
		() => ({
			isMenuOpen,
			openMenu: () => setIsMenuOpen(true),
			closeMenu: () => setIsMenuOpen(false),
		}),
		[isMenuOpen],
	);

	return <MobileMenuContext value={value}>{children}</MobileMenuContext>;
};

export default MobileMenuProvider;

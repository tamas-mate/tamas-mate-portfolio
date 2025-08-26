import { useMobileMenu } from "@/context/mobile-menu-context";

import { cl } from "@/utils/utils";

import type { SwitcherProps } from "@/types";

const HamburgerButton = ({ extraClasses }: SwitcherProps) => {
	const { isMenuOpen, openMenu, closeMenu } = useMobileMenu();

	const handleMenuBtnClick = () => {
		if (isMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	return (
		<button
			id="menu-btn"
			className={cl("3xl:hidden focus-outline-none hamburger block", extraClasses, isMenuOpen && "open")}
			onClick={handleMenuBtnClick}
		>
			<span className="hamburger-top"></span>
			<span className="hamburger-middle"></span>
			<span className="hamburger-bottom"></span>
		</button>
	);
};

export default HamburgerButton;

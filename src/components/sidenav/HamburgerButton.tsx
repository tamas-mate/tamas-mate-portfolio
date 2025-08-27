import { useMobileMenu } from "@/context/mobile-menu-context";

import { cl } from "@/utils/utils";

import type { SwitcherProps } from "@/types";

const HamburgerButton = ({ extraClasses }: SwitcherProps) => {
	const { isMenuOpen, openMenu, closeMenu, setTriggerRef } = useMobileMenu();

	const setRef = (el: HTMLButtonElement | null) => setTriggerRef(el!);

	const handleMenuBtnClick = () => {
		if (isMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	return (
		<button
			ref={setRef}
			id="menu-btn"
			className={cl("3xl:hidden hamburger block focus:outline-none", extraClasses, isMenuOpen && "open")}
			onClick={handleMenuBtnClick}
			aria-label="Hamburger button"
		>
			<span className="hamburger-top"></span>
			<span className="hamburger-middle"></span>
			<span className="hamburger-bottom"></span>
		</button>
	);
};

export default HamburgerButton;

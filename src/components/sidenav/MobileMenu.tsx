import { useTranslation } from "react-i18next";
import ScrollSpy from "react-scrollspy-navigation";

import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import HamburgerButton from "./HamburgerButton";

import { useMobileMenu } from "@/context/mobile-menu-context";

import { cl } from "@/utils/utils";

import type { SideNavProps } from "@/types";

const MobileMenu = ({ navItems }: SideNavProps) => {
	const { t } = useTranslation();
	const { isMenuOpen, closeMenu } = useMobileMenu();

	return (
		<nav
			className={cl(
				"bg-secondary md:max-3xl:w-1/3 3xl:hidden position fixed top-0 left-0 z-50 h-screen w-full",
				isMenuOpen ? "block opacity-90" : "hidden",
			)}
		>
			<div className="relative flex h-full pt-4 pr-4 pb-4 pl-8">
				<div className="flex flex-col items-start gap-y-2">
					<div className="flex items-center justify-start gap-x-1">
						<LanguageSwitcher />
						<ThemeSwitcher extraClasses="hover:bg-lighter-dark3" />
					</div>
					<ScrollSpy activeClass="text-accent">
						<ul className="flex flex-col items-start gap-y-4">
							{navItems.map((item, index) => (
								<li key={"nav-item-" + index} className="pl-0.5">
									<a
										href={item.href}
										className="hover:text-accent uppercase hover:underline hover:underline-offset-4"
										onClick={closeMenu}
									>
										{t(item.label)}
									</a>
								</li>
							))}
						</ul>
					</ScrollSpy>
				</div>
				<HamburgerButton extraClasses="absolute top-6 right-8" />
			</div>
		</nav>
	);
};

export default MobileMenu;

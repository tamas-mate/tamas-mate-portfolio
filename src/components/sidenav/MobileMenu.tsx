import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollSpy from "react-scrollspy-navigation";

import HamburgerButton from "./HamburgerButton";

import { useMobileMenu } from "@/context/mobile-menu-context";

import { cl } from "@/utils/utils";

import type { SideNavProps } from "@/types";

const MobileMenu = ({ navItems }: SideNavProps) => {
	const { t } = useTranslation();
	const { isMenuOpen, closeMenu, triggerRef } = useMobileMenu();

	useEffect(() => {
		if (!isMenuOpen && triggerRef && "current" in triggerRef) requestAnimationFrame(() => triggerRef.current?.focus());
	}, [isMenuOpen, triggerRef]);

	return (
		<>
			<div
				className={cl(
					"bg-primary fixed inset-0 z-40 backdrop-blur-sm",
					isMenuOpen ? "block opacity-30 dark:opacity-50" : "hidden",
				)}
				aria-hidden="true"
				onClick={closeMenu}
			/>
			<nav
				role="dialog"
				aria-modal="true"
				aria-label="Mobile navigation"
				className={cl(
					"bg-secondary md:max-3xl:w-1/3 3xl:hidden position fixed top-0 left-0 z-50 h-screen w-full",
					isMenuOpen ? "block" : "hidden",
				)}
			>
				<div className="relative flex h-full pt-5.5 pl-8">
					<ScrollSpy activeClass="text-accent">
						<ul className="flex flex-col items-start gap-y-4">
							{navItems.map((item) => (
								<li key={item.href} className="pl-0.5">
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
					<HamburgerButton extraClasses="absolute top-6 right-8" />
				</div>
			</nav>
		</>
	);
};

export default MobileMenu;

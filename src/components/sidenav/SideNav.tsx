import { useTranslation } from "react-i18next";
import ScrollSpy from "react-scrollspy-navigation";

import type { SideNavProps } from "@/types";

const SideNav = ({ navItems }: SideNavProps) => {
	const { t } = useTranslation();

	return (
		<ScrollSpy activeClass="text-accent">
			<nav
				aria-label="Section navigation"
				className="bg-secondary 3xl:block 4xl:left-88 fixed top-30 left-5 hidden w-78 p-4"
			>
				<ul className="flex flex-col items-end gap-y-4">
					{navItems.map((item) => (
						<li key={item.href}>
							<a href={item.href} className="hover:text-accent uppercase hover:underline hover:underline-offset-4">
								{t(item.label)}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</ScrollSpy>
	);
};

export default SideNav;

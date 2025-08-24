import { useTranslation } from "react-i18next";
import ScrollSpy from "react-scrollspy-navigation";

import type { SideNavProps } from "@/types";

const SideNav = ({ navItems }: SideNavProps) => {
	const { t } = useTranslation();
	return (
		<ScrollSpy activeClass="text-accent">
			<nav className="hidden fixed top-30 left-5 p-4 bg-secondary w-78 3xl:block 4xl:left-88">
				<ul className="flex flex-col items-end gap-y-4">
					{navItems.map((item, index) => (
						<li key={"nav-item-" + index}>
							<a href={item.href} className="uppercase hover:text-accent">
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

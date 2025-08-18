import type { SideNavProps } from "@/types";

const SideNav = ({ navItems }: SideNavProps) => {
	return (
		<div className="hidden fixed top-30 left-5 p-4 bg-secondary w-78 3xl:block 4xl:left-88">
			<ul className="flex flex-col items-end gap-y-4">
				{navItems.map((item, index) => (
					<li key={index} className="">
						<a href={item.href} className="text-white uppercase hover:text-accent">
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideNav;

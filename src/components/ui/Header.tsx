import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import HamburgerButton from "../sidenav/HamburgerButton";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import SVGComponent from "./SVGComponent";

import { useMobileMenu } from "@/context/menu/mobile-menu-context";
import { useModal } from "@/context/modal/modal-context";
import { useTheme } from "@/context/theme/theme-context";
import type { HeaderProps } from "@/types";
import icons from "../../assets/icons/data.json";
import profileBackgroundCoffee from "../../assets/images/bgcoffee.avif";
import profileBackgroundDark from "../../assets/images/bgdark.png";
import profileBackgroundLight from "../../assets/images/bglight.png";
import profilePicture from "../../assets/images/profile.avif";

const rndNr = Math.floor(Math.random() * 2);

const Header = ({ name, role, location, cta }: HeaderProps) => {
	const { t } = useTranslation();
	const { openModal } = useModal();
	const { isMenuOpen } = useMobileMenu();
	const { isDark } = useTheme();

	const decideBackground = () => {
		const options = isDark
			? [profileBackgroundDark, profileBackgroundCoffee]
			: [profileBackgroundLight, profileBackgroundCoffee];

		return options[rndNr];
	};

	return (
		<header className="bg-primary w-full max-w-260 sm:px-7.5 xl:px-0">
			<div className="bg-secondary sm:border-border-gray flex flex-col items-center justify-between gap-y-36 rounded-b-sm sm:border-x sm:border-b sm:border-solid lg:gap-y-18">
				<div className="relative h-87.5 w-full">
					<img src={decideBackground()} alt="profile-background" className="h-full w-full object-cover" />
					<LanguageSwitcher />
					<ThemeSwitcher />
					{!isMenuOpen && <HamburgerButton extraClasses="absolute top-12 right-[11px]" />}
					<div className="absolute inset-0 m-auto h-60 w-60 translate-y-42.5 transform overflow-hidden rounded-full border-6 border-solid border-white lg:top-auto lg:right-auto lg:-bottom-8.5 lg:left-12 lg:translate-y-0 lg:transform-none">
						<img src={profilePicture} alt="profile-picture" className="h-full w-full object-contain" />
					</div>
				</div>
				<div className="flex w-full flex-col justify-between gap-y-2 lg:flex-row lg:px-12 lg:pb-12">
					<div className="flex w-full flex-col justify-center gap-y-4.5 lg:w-3/4 lg:justify-start">
						<h1 className="text-center text-3xl font-bold lg:text-left">{t(name)}</h1>
						<div className="flex flex-col justify-center gap-y-2 lg:flex-row lg:justify-start lg:gap-18">
							<div className="flex flex-row items-center justify-center gap-x-3 lg:justify-start">
								<SVGComponent className={"fill-accent size-4"} {...icons["work"]} />
								<span>{t(role)}</span>
							</div>
							<div className="flex flex-row items-center justify-center gap-x-3 lg:justify-start">
								<SVGComponent className={"fill-accent size-4"} {...icons["location"]} />
								<span>{t(location)}</span>
							</div>
						</div>
					</div>
					<div className="border-border-gray flex justify-center border-t border-solid py-7.5 lg:self-end lg:border-none lg:py-0">
						<button
							className="bg-accent text-primary decoration-none hover:bg-accent/50 rounded-full border-none px-5 py-3 text-lg font-semibold uppercase transition-all duration-300 hover:cursor-pointer hover:text-white"
							onClick={openModal}
						>
							{t(cta)}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

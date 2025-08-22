import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import { useModal } from "@/context/modal-context";
import profileBackground from "../../assets/images/bg-profile.avif";
import profilePicture from "../../assets/images/profile.avif";
import icons from "../../assets/icons/data.json";
import type { HeaderProps } from "@/types";

const Header = ({ name, role, location, cta }: HeaderProps) => {
	const { t } = useTranslation();
	const { openModal } = useModal();

	return (
		<header className="max-w-260 w-full flex flex-col gap-y-36 justify-between items-center bg-secondary border border-solid border-lighter-dark rounded-b-sm lg:gap-y-18">
			<div className="relative w-full h-87.5">
				<img src={profileBackground} alt="profile-background" className="w-full h-full object-cover" />
				<LanguageSwitcher />
				<div
					className="w-60 h-60 m-auto absolute inset-0 overflow-hidden border-6 border-solid border-white 
						rounded-full transform translate-y-42.5 lg:transform-none lg:translate-y-0 lg:top-auto lg:right-auto lg:-bottom-8.5 lg:left-8.5"
				>
					<img src={profilePicture} alt="profile-picture" className="w-full h-full object-contain" />
				</div>
			</div>
			<div className="w-full flex flex-col lg:flex-row justify-between lg:h-42 lg:px-12 lg:pb-12">
				<div className="w-full flex flex-col justify-center gap-y-4.5 lg:w-3/4 lg:justify-start">
					<h1 className="text-center text-2xl font-bold lg:text-left">{t(name)}</h1>
					<div className="flex flex-col justify-center lg:flex-row lg:justify-start lg:gap-18">
						<div className="flex flex-row mb-2 justify-center items-center lg:justify-start">
							<SVGComponent className={"min-w-4 max-w-4 w-4 min-h-4 max-h-4 h-4 mr-3 fill-accent"} {...icons["work"]} />
							<span>{t(role)}</span>
						</div>
						<div className="flex flex-row mb-2 justify-center items-center lg:justify-start">
							<SVGComponent
								className={"min-w-4 max-w-4 w-4 min-h-4 max-h-4 h-4 mr-3 fill-accent"}
								{...icons["location"]}
							/>
							<span>{t(location)}</span>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-7.5 border-t border-solid border-lighter-dark lg:self-end lg:py-0 lg:border-none">
					<button
						className="py-3 px-5 border-none rounded-full bg-accent text-lg font-semibold text-primary decoration-none 
							uppercase hover:cursor-pointer hover:bg-accent/50 hover:text-white transition-all duration-300 "
						onClick={openModal}
					>
						{t(cta)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

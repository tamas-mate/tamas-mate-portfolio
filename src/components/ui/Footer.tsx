import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";

import { useModal } from "@/context/modal-context";
import icons from "../../assets/icons/data.json";

import type { FooterProps } from "@/types";

const Footer = ({ name, role, copyright, cta }: FooterProps) => {
	const { t } = useTranslation();
	const { openModal } = useModal();

	return (
		<footer className="flex flex-col items-center w-full bg-black py-8 xsl:p-8 gap-y-2 lg:flex-row lg:justify-center lg:gap-y-0 2xl:px-80">
			<span className="text-white border-solid border-gray lg:pr-7 lg:border-r">
				© {new Date().getFullYear()} {t(name)}. {t(copyright)}.
			</span>
			<span className="text-white border-solid border-gray lg:px-7 lg:border-r">{t(role)}</span>
			<div className="flex justify-center items-center gap-x-5 border-solid border-gray lg:px-7 lg:border-r">
				<a
					href="https://www.linkedin.com/in/tamasmate/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn Profile"
				>
					<SVGComponent
						className="min-w-5 max-w-5 w-5 min-h-5 max-h-5 h-5 fill-white hover:fill-accent"
						{...icons["linkedin"]}
					/>
				</a>
				<a href="https://github.com/tamas-mate" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
					<SVGComponent
						className="min-w-5 max-w-5 w-5 min-h-5 max-h-5 h-5 fill-white hover:fill-accent"
						{...icons["github"]}
					/>
				</a>
			</div>
			<button className="group flex items-center text-white hover:cursor-pointer lg:pl-7" onClick={openModal}>
				<SVGComponent
					className="min-w-3 max-w-3 w-3 min-h-3 max-h-3 h-3 mr-3 fill-white group-hover:fill-accent"
					{...icons["phone"]}
				/>
				<span className="group-hover:text-accent group-hover:underline group-hover:underline-offset-4">{t(cta)}</span>
			</button>
		</footer>
	);
};

export default Footer;

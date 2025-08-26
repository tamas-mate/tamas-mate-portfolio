import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";

import { useModal } from "@/context/modal-context";
import icons from "../../assets/icons/data.json";

import type { FooterProps } from "@/types";

const Footer = ({ name, role, copyright, cta }: FooterProps) => {
	const { t } = useTranslation();
	const { openModal } = useModal();

	return (
		<footer className="xsl:p-8 flex w-full flex-col items-center gap-y-2 bg-black py-8 lg:flex-row lg:justify-center lg:gap-y-0 2xl:px-80">
			<span className="border-gray border-solid text-white lg:border-r lg:pr-7">
				© {new Date().getFullYear()} {t(name)}. {t(copyright)}.
			</span>
			<span className="border-gray border-solid text-white lg:border-r lg:px-7">{t(role)}</span>
			<div className="flex-center border-gray gap-x-5 border-solid lg:border-r lg:px-7">
				<a
					href="https://www.linkedin.com/in/tamasmate/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn Profile"
				>
					<SVGComponent className="hover:fill-accent size-5 fill-white" {...icons["linkedin"]} />
				</a>
				<a href="https://github.com/tamas-mate" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
					<SVGComponent className="hover:fill-accent size-5 fill-white" {...icons["github"]} />
				</a>
			</div>
			<button className="group flex items-center gap-x-3 text-white hover:cursor-pointer lg:pl-7" onClick={openModal}>
				<SVGComponent className="group-hover:fill-accent size-3 fill-white" {...icons["phone"]} />
				<span className="group-hover:text-accent group-hover:underline group-hover:underline-offset-4">{t(cta)}</span>
			</button>
		</footer>
	);
};

export default Footer;

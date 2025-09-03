import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../ui/SVGComponent";

import icons from "../../assets/icons/data.json";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const handleLanguageChange = useCallback(
		async (lang: string) => {
			await i18n.changeLanguage(lang).then(() => {
				localStorage.setItem("i18nextLng", lang);
			});
		},
		[i18n],
	);

	return (
		<div className="group flex-center dark:text-accent absolute top-1.5 right-12 gap-x-1 bg-transparent text-blue-300 outline-none">
			<SVGComponent className="dark:fill-accent size-6 fill-blue-300" {...icons["localization"]} />
			<select
				defaultValue={i18n.language}
				name="language"
				className="outline-none group-hover:cursor-pointer"
				onChange={(e) => handleLanguageChange(e.target.value)}
			>
				<option value="en" className="bg-primary text-accent">
					EN
				</option>
				<option value="hu" className="bg-primary text-accent">
					HU
				</option>
				<option value="ro" className="bg-primary text-accent">
					RO
				</option>
			</select>
		</div>
	);
};

export default LanguageSwitcher;

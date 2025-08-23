import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../SVGComponent";
import icons from "../../assets/icons/data.json";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		const storedLanguage = localStorage.getItem("i18nextLng");
		if (storedLanguage) selectRef.current!.value = storedLanguage;
	}, [i18n]);

	const handleLanguageChange = useCallback(
		async (lang: string) => {
			await i18n.changeLanguage(lang).then(() => {
				localStorage.setItem("i18nextLng", lang);
			});
		},
		[i18n],
	);

	return (
		<div className="absolute top-7.5 right-7.5 flex justify-center items-center gap-x-1 z-1000 bg-transparent text-accent text-bold outline-none hover:cursor-pointer">
			<SVGComponent className="min-w-6 max-w-6 w-6 min-h-6 max-h-6 h-6 fill-accent" {...icons["localization"]} />
			<select id="language" ref={selectRef} name="language" onChange={(e) => handleLanguageChange(e.target.value)}>
				<option value="en" className="bg-primary text-accent hover:cursor-pointer">
					EN
				</option>
				<option value="hu" className="bg-primary text-accent hover:cursor-pointer">
					HU
				</option>
				<option value="ro" className="bg-primary text-accent hover:cursor-pointer">
					RO
				</option>
			</select>
		</div>
	);
};

export default LanguageSwitcher;

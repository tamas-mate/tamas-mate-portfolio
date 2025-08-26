import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../ui/SVGComponent";

import icons from "../../assets/icons/data.json";

import { cl } from "@/utils/utils";

import type { SwitcherProps } from "@/types";

const LanguageSwitcher = ({ extraClasses }: SwitcherProps) => {
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
		<div className={cl("group flex-center text-accent gap-x-1 bg-transparent outline-none", extraClasses)}>
			<SVGComponent className="fill-accent size-6" {...icons["localization"]} />
			<select
				ref={selectRef}
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

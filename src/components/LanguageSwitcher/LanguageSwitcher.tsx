import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		const storedLanguage = localStorage.getItem("i18nextLng");
		if (storedLanguage) {
			selectRef.current!.value = storedLanguage;
		}
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
		<div className="">
			<select ref={selectRef} name="language" id="language" onChange={(e) => handleLanguageChange(e.target.value)}>
				<option value="en" className="text-black">
					EN
				</option>
				<option value="hu" className="text-black">
					HU
				</option>
				<option value="ro" className="text-black">
					RO
				</option>
			</select>
		</div>
	);
};

export default LanguageSwitcher;

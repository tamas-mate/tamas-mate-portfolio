import { useState } from "react";
import { useTranslation } from "react-i18next";

import SVGComponent from "../ui/SVGComponent";

import { cl } from "@/utils/utils";

import icons from "../../assets/icons/data.json";

const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation();
	// Chromium treats a focused <select> as :focus-visible even after a mouse click, so track how focus arrived.
	const [focusedByPointer, setFocusedByPointer] = useState(false);

	return (
		<div className="group flex-center dark:text-accent absolute top-1.5 right-12 gap-x-1 bg-transparent text-blue-300">
			<SVGComponent className="dark:fill-accent size-6 fill-blue-300" {...icons["localization"]} />
			<label htmlFor="language-select" className="sr-only">
				{t("a11y.language")}
			</label>
			<select
				id="language-select"
				name="language"
				value={i18n.resolvedLanguage ?? "en"}
				className={cl(
					"rounded-sm group-hover:cursor-pointer",
					focusedByPointer ? "outline-none" : "focus-ring-on-image",
				)}
				onPointerDown={() => setFocusedByPointer(true)}
				onKeyDown={() => setFocusedByPointer(false)}
				onBlur={() => setFocusedByPointer(false)}
				onChange={(event) => void i18n.changeLanguage(event.target.value)}
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

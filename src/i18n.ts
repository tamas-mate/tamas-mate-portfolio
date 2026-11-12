import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/src/i18n/en.json";
import translationHU from "./locales/src/i18n/hu.json";
import translationRO from "./locales/src/i18n/ro.json";

// Save every language change, wherever it comes from. B7 extends this listener.
i18n.on("languageChanged", (language) => localStorage.setItem("i18nextLng", language));

void i18n.use(initReactI18next).init({
	debug: import.meta.env.MODE === "development",
	lng: localStorage.getItem("i18nextLng") ?? "en",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: translationEN,
		},
		hu: {
			translation: translationHU,
		},
		ro: {
			translation: translationRO,
		},
	},
});

export default i18n;

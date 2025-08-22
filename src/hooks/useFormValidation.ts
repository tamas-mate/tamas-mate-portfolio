import { useState } from "react";
import { useTranslation } from "react-i18next";

type FormFields = "name" | "email" | "subject" | "message";

type FormErrors = Record<`${FormFields}Error`, string>;

export const useFormValidation = (
	nameInput: string,
	emailInput: string,
	subjectInput: string,
	messageInput: string,
	inputAtLeastError: string,
	inputLessThanError: string,
	inputCharactersError: string,
	inputEmailFormatError: string,
	inputRequired: string,
	article: string,
) => {
	const { t } = useTranslation();
	const [formErrors, setFormErrors] = useState<FormErrors>({
		nameError: "",
		emailError: "",
		subjectError: "",
		messageError: "",
	});
	const lang = localStorage.getItem("i18nextLng") ?? "en";

	const returnRequiredError = (field: string) => {
		if (lang === "hu") field = field.toLowerCase();
		return `${t(article)} ${field} ${t(inputRequired)}`;
	};

	const validateLength = (field: string, value: string, max: number, min?: number): string => {
		if (lang === "hu") field = field.toLowerCase();
		if (min && value.length < min)
			return `${t(article)} ${field} ${t(inputAtLeastError)} ${min} ${t(inputCharactersError)}`;
		if (value.length > max) return `${t(article)} ${field} ${t(inputLessThanError)} ${max} ${t(inputCharactersError)}`;
		return "";
	};

	const validateInputs = (name: string, email: string, subject: string, message: string) => {
		const trimmed = {
			name: name.trim(),
			email: email.trim(),
			subject: subject.trim(),
			message: message.trim(),
		};
		const newErrors: FormErrors = {
			nameError: "",
			emailError: "",
			subjectError: "",
			messageError: "",
		};
		let isValid = true;

		if (!trimmed.name) {
			newErrors.nameError = returnRequiredError(t(nameInput));
		} else {
			newErrors.nameError = validateLength(t(nameInput), trimmed.name, 50);
		}

		if (!trimmed.email) {
			newErrors.emailError = returnRequiredError(t(emailInput));
		} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed.email)) {
			newErrors.emailError = t(inputEmailFormatError);
		} else {
			newErrors.emailError = validateLength(t(emailInput), trimmed.email, 100, 3);
		}

		if (!trimmed.subject) {
			newErrors.subjectError = returnRequiredError(t(subjectInput));
		} else {
			newErrors.subjectError = validateLength(t(subjectInput), trimmed.subject, 100);
		}

		if (!trimmed.message) {
			newErrors.messageError = returnRequiredError(t(messageInput));
		} else {
			newErrors.messageError = validateLength(t(messageInput), trimmed.message, 1000, 10);
		}

		setFormErrors(newErrors);
		isValid = Object.values(newErrors).every((err) => err === "");

		return isValid;
	};

	const resetFormError = (field: FormFields) => setFormErrors({ ...formErrors, [`${field}Error`]: "" });

	const resetFormErrors = () =>
		setFormErrors({
			nameError: "",
			emailError: "",
			subjectError: "",
			messageError: "",
		});

	return {
		formErrors,
		validateInputs,
		resetFormError,
		resetFormErrors,
	};
};

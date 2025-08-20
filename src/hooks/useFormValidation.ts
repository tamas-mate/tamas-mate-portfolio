import { useState } from "react";

type FormFields = "name" | "email" | "subject" | "message";

type FormErrors = Record<`${FormFields}Error`, string>;

export const useFormValidation = () => {
	const [formErrors, setFormErrors] = useState<FormErrors>({
		nameError: "",
		emailError: "",
		subjectError: "",
		messageError: "",
	});

	const validateLength = (field: string, value: string, max: number, min?: number): string => {
		if (min && value.length < min) return `${field} must be at least ${min} characters!`;
		if (value.length > max) return `${field} must be less than ${max} characters!`;
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
			newErrors.nameError = "Name is required!";
		} else {
			newErrors.nameError = validateLength("Name", trimmed.name, 50);
		}

		if (!trimmed.email) {
			newErrors.emailError = "Email is required!";
		} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed.email)) {
			newErrors.emailError = "Invalid email format!";
		} else {
			newErrors.emailError = validateLength("Email", trimmed.email, 100, 3);
		}

		if (!trimmed.subject) {
			newErrors.subjectError = "Subject is required!";
		} else {
			newErrors.subjectError = validateLength("Subject", trimmed.subject, 100);
		}

		if (!trimmed.message) {
			newErrors.messageError = "Message is required!";
		} else {
			newErrors.messageError = validateLength("Message", trimmed.message, 1000, 10);
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

import { useTranslation } from "react-i18next";
import { useState, useRef, useMemo } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { useModal } from "@/context/modal-context";
import { getFormattedDate, initObserver } from "@/utils/utils";
import type { ContactModalProps, FormData } from "@/types";
import { useTheme } from "@/context/theme-context";

const returnRequiredError = (article: string, field: string, inputRequired: string) => {
	if ((localStorage.getItem("i18nextLng") ?? "en") === "hu") field = field.toLowerCase();
	return `${article} ${field} ${inputRequired}`;
};

const returnTrimmedValueOrLength = (type: "value" | "length", value: string) =>
	type === "value" ? value.trim() : value.trim().length;

const ContactModal = ({
	"name-input": nameInput,
	"name-input-placeholder": nameInputPlaceholder,
	"email-input": emailInput,
	"email-input-placeholder": emailInputPlaceholder,
	"subject-input": subjectInput,
	"subject-input-placeholder": subjectInputPlaceholder,
	"message-input": messageInput,
	"message-input-placeholder": messageInputPlaceholder,
	"button-send": buttonSend,
	"button-sending": buttonSending,
	"check-inputs-toast": checkInputsToast,
	"failed-recaptcha-toast": failedRecaptchaToast,
	"failed-message-toast": failedMessageToast,
	"success-message-toast": successMessageToast,
	"input-at-least-error": inputAtLeastError,
	"input-less-than-error": inputLessThanError,
	"input-characters-error": inputCharactersError,
	"input-email-format-error": inputEmailFormatError,
	"input-required": inputRequired,
	article,
}: ContactModalProps) => {
	const recaptcha = useRef<ReCAPTCHA | null>(null);
	const [isPending, setIsPending] = useState(false);
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			name: "",
			email: "",
			title: "",
			message: "",
		},
	});
	const { isModalOpen, closeModal } = useModal();
	const { isDark } = useTheme();
	const toastTheme = useMemo(
		() => ({
			theme: isDark ? "dark" : "light",
		}),
		[isDark],
	);

	const onSubmit = async (data: FormData) => {
		try {
			setIsPending(true);

			if (errors.name || errors.email || errors.title || errors.message) {
				toast.error(t(checkInputsToast), toastTheme);
				setIsPending(false);
				return;
			}

			initObserver();
			const token = await recaptcha.current!.executeAsync();

			if (!token) {
				toast.error(t(failedRecaptchaToast), toastTheme);
				setIsPending(false);
				return;
			}

			const templateParams = {
				title: returnTrimmedValueOrLength("value", data.title),
				name: returnTrimmedValueOrLength("value", data.name),
				email: returnTrimmedValueOrLength("value", data.email),
				time: getFormattedDate(),
				message: returnTrimmedValueOrLength("value", data.message),
				"g-recaptcha-response": token,
			};

			const response = await emailjs.send("contact_service", "contact_me", templateParams, {
				publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			});

			if (response.status === 200) {
				toast.success(t(successMessageToast), toastTheme);
				setIsPending(false);
				reset();
				closeModal();
			}
		} catch (error) {
			toast.error(t(failedMessageToast), toastTheme);
			console.error("Failed to send the message! Error:", error);
			setIsPending(false);
			closeModal();
		}

		recaptcha.current?.reset();
	};

	if (!isModalOpen) {
		return null;
	}

	return (
		<>
			<div
				className="bg-gray-2/95 fixed top-0 right-0 bottom-0 left-0 z-100"
				onClick={(e) => {
					if (e.target === e.currentTarget && !isPending) closeModal();
				}}
			>
				<ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} size="invisible" />
			</div>
			<div className="bg-primary dark:bg-secondary xsl:w-120 fixed top-1/2 left-1/2 z-105 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-md p-7.5">
				<form className="relative flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
					<span
						className="text-gray/50 absolute -top-3 right-0 text-xl hover:cursor-pointer dark:text-white"
						onClick={closeModal}
					>
						X
					</span>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="name" className="text-accent text-xl font-bold">
							{t(nameInput)}
						</label>
						<input
							{...register("name", {
								required: returnRequiredError(t(article), t(nameInput), t(inputRequired)),
								validate: (value) => {
									if (+returnTrimmedValueOrLength("length", value) === 0)
										return returnRequiredError(t(article), t(nameInput), t(inputRequired));
									if (+returnTrimmedValueOrLength("length", value) > 50)
										return `${t(article)} ${t(nameInput)} ${t(inputLessThanError)} 50 ${t(inputCharactersError)}`;
								},
							})}
							id="name"
							className="input"
							type="text"
							autoComplete="name"
							placeholder={t(nameInputPlaceholder)}
						/>
						{errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email" className="text-accent text-xl font-bold">
							{t(emailInput)}
						</label>
						<input
							{...register("email", {
								required: returnRequiredError(t(article), t(emailInput), t(inputRequired)),
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: `${t(inputEmailFormatError)}`,
								},
								validate: (value) => {
									if (+returnTrimmedValueOrLength("length", value) === 0)
										return returnRequiredError(t(article), t(emailInput), t(inputRequired));
									if (+returnTrimmedValueOrLength("length", value) < 3)
										return `${t(article)} ${t(emailInput)} ${t(inputAtLeastError)} 3 ${t(inputCharactersError)}`;
									if (+returnTrimmedValueOrLength("length", value) > 100)
										return `${t(article)} ${t(emailInput)} ${t(inputLessThanError)} 100 ${t(inputCharactersError)}`;
								},
							})}
							id="email"
							className="input"
							type="email"
							autoComplete="email"
							placeholder={t(emailInputPlaceholder)}
						/>
						{errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="title" className="text-accent text-xl font-bold">
							{t(subjectInput)}
						</label>
						<input
							{...register("title", {
								required: returnRequiredError(t(article), t(subjectInput), t(inputRequired)),
								validate: (value) => {
									if (+returnTrimmedValueOrLength("length", value) === 0)
										return returnRequiredError(t(article), t(subjectInput), t(inputRequired));
									if (+returnTrimmedValueOrLength("length", value) > 100)
										return `${t(article)} ${t(subjectInput)} ${t(inputLessThanError)} 100 ${t(inputCharactersError)}`;
								},
							})}
							id="title"
							className="input"
							type="text"
							autoComplete="off"
							placeholder={t(subjectInputPlaceholder)}
						/>
						{errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="message" className="text-accent text-xl font-bold">
							{t(messageInput)}
						</label>
						<textarea
							{...register("message", {
								required: returnRequiredError(t(article), t(messageInput), t(inputRequired)),
								validate: (value) => {
									if (+returnTrimmedValueOrLength("length", value) === 0)
										return returnRequiredError(t(article), t(messageInput), t(inputRequired));
									if (+returnTrimmedValueOrLength("length", value) < 10)
										return `${t(article)} ${t(messageInput)} ${t(inputAtLeastError)} 10 ${t(inputCharactersError)}`;
									if (+returnTrimmedValueOrLength("length", value) > 1000)
										return `${t(article)} ${t(messageInput)} ${t(inputLessThanError)} 1000 ${t(inputCharactersError)}`;
								},
							})}
							id="message"
							className="input resize-y"
							autoComplete="off"
							placeholder={t(messageInputPlaceholder)}
						/>
						{errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
					</div>
					<div className="flex-center">
						<button
							type="submit"
							disabled={isPending}
							className="group flex-center bg-accent hover:bg-accent/50 w-1/3 rounded-full px-4 py-2 hover:cursor-pointer disabled:cursor-not-allowed"
						>
							<span className="text-primary text-lg leading-10 font-bold group-hover:text-white">
								{isPending ? t(buttonSending) : t(buttonSend)}
							</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactModal;

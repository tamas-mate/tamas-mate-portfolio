import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useModal } from "@/context/modal-context";
import { useTheme } from "@/context/theme-context";
import type { FormData } from "@/types";
import { collapseTrim, getFormattedDate, initObserver, INPUTLIMITS } from "@/utils/utils";
import FieldErrorMessage from "./FieldErrorMessage";

const ContactModal = () => {
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
			subject: "",
			message: "",
		},
	});
	const { isModalOpen, closeModal } = useModal();
	const { isDark } = useTheme();
	const toastTheme = {
		theme: isDark ? "dark" : "light",
	};

	const onSubmit = async (data: FormData) => {
		try {
			setIsPending(true);

			if (errors.name || errors.email || errors.subject || errors.message) {
				toast.error(t("contact_modal.validation.check_inputs"), toastTheme);
				setIsPending(false);
				return;
			}

			initObserver();
			const token = await recaptcha.current?.executeAsync();

			if (!token) {
				toast.error(t("contact_modal.validation.recaptcha_failed"), toastTheme);
				setIsPending(false);
				return;
			}

			const templateParams = {
				name: data.name,
				email: data.email,
				title: data.subject,
				message: data.message,
				time: getFormattedDate(),
				"g-recaptcha-response": token,
			};

			const response = await emailjs.send("contact_service", "contact_me", templateParams, {
				publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			});

			if (response.status === 200) {
				toast.success(t("contact_modal.validation.success"), toastTheme);
				setIsPending(false);
				reset();
				closeModal();
			}
		} catch (error) {
			toast.error(t("contact_modal.validation.send_failed"), toastTheme);
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
				<div id="captcha-help" className="sr-only">
					{t("contact_modal.form.recaptcha")}
				</div>
				<ReCAPTCHA
					ref={recaptcha}
					sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
					size="invisible"
					aria-describedby="captcha-help"
				/>
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
							{t("contact_modal.form.name")}
						</label>
						<input
							{...register("name", {
								setValueAs: collapseTrim,
								required: { value: true, message: "contact_modal.validation.name_required" },
								maxLength: { value: INPUTLIMITS.name.max, message: "contact_modal.validation.name_max" },
							})}
							id="name"
							className="input"
							type="text"
							autoComplete="name"
							placeholder={t("contact_modal.form.name_placeholder")}
							aria-invalid={!!errors.name}
							aria-describedby={errors.name ? "name-error" : undefined}
						/>
						<FieldErrorMessage id="name-error" field="name" error={errors.name} t={t} />
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email" className="text-accent text-xl font-bold">
							{t("contact_modal.form.e_mail")}
						</label>
						<input
							{...register("email", {
								setValueAs: collapseTrim,
								required: { value: true, message: "contact_modal.validation.e_mail_required" },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "contact_modal.validation.e_mail_invalid",
								},
								minLength: { value: INPUTLIMITS.email.min, message: "contact_modal.validation.e_mail_min" },
								maxLength: { value: INPUTLIMITS.email.max, message: "contact_modal.validation.e_mail_max" },
							})}
							id="email"
							className="input"
							type="email"
							autoComplete="email"
							placeholder={t("contact_modal.form.e_mail_placeholder")}
							aria-invalid={!!errors.email}
							aria-describedby={errors.email ? "email-error" : undefined}
						/>
						<FieldErrorMessage id="email-error" field="email" error={errors.email} t={t} />
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="subject" className="text-accent text-xl font-bold">
							{t("contact_modal.form.subject")}
						</label>
						<input
							{...register("subject", {
								setValueAs: collapseTrim,
								required: "contact_modal.validation.subject_required",
								maxLength: { value: INPUTLIMITS.subject.max, message: "contact_modal.validation.subject_max" },
							})}
							id="subject"
							className="input"
							type="text"
							autoComplete="off"
							placeholder={t("contact_modal.form.subject")}
							aria-invalid={!!errors.subject}
							aria-describedby={errors.subject ? "subject-error" : undefined}
						/>
						<FieldErrorMessage id="subject-error" field="subject" error={errors.subject} t={t} />
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="message" className="text-accent text-xl font-bold">
							{t("contact_modal.form.message")}
						</label>
						<textarea
							{...register("message", {
								required: "contact_modal.validation.message_required",
								setValueAs: collapseTrim,
								minLength: { value: INPUTLIMITS.message.min, message: "contact_modal.validation.message_min" },
								maxLength: { value: INPUTLIMITS.message.max, message: "contact_modal.validation.message_max" },
							})}
							id="message"
							className="input resize-y"
							autoComplete="off"
							placeholder={t("contact_modal.form.message_placeholder")}
							aria-invalid={!!errors.message}
							aria-describedby={errors.message ? "message-error" : undefined}
						/>
						<FieldErrorMessage id="message-error" field="message" error={errors.message} t={t} />
					</div>
					<span id="form-status" aria-live="polite" className="sr-only">
						{isPending ? t("contact_modal.button.sending") : ""}
					</span>
					<div className="flex-center">
						<button
							type="submit"
							disabled={isPending}
							aria-disabled={isPending}
							className="group flex-center bg-accent hover:bg-accent/50 w-1/3 rounded-full px-4 py-2 hover:cursor-pointer disabled:cursor-not-allowed"
						>
							<span className="text-primary text-lg leading-10 font-bold group-hover:text-white">
								{isPending ? t("contact_modal.button.sending") : t("contact_modal.button.send")}
							</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactModal;

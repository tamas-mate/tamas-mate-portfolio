import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState, type SubmitEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import type { FormData } from "@/types";

import FieldErrorMessage from "./FieldErrorMessage";

import SectionTitle from "@/components/ui/SectionTitle";
import { cl, collapseTrim, getFormattedDate, INPUTLIMITS } from "@/utils/utils";

const ContactForm = () => {
	const recaptcha = useRef<ReCAPTCHA | null>(null);
	const sectionRef = useRef<HTMLElement | null>(null);
	const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
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

	useEffect(() => {
		const sectionRefCurrent = sectionRef.current;

		const createObserver = () => {
			const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
				if (entries[0].isIntersecting) {
					setHasEnteredViewport(true);
					observer.unobserve(entries[0].target);
				}
			};

			const options = {
				root: null,
				rootMargin: "0px",
				threshold: 0.25,
			};

			const observer = new IntersectionObserver(handleIntersect, options);

			if (sectionRefCurrent) {
				observer.observe(sectionRefCurrent);
			}

			return observer;
		};

		const observer = createObserver();

		return () => {
			if (sectionRefCurrent) {
				observer.unobserve(sectionRefCurrent);
			}
		};
	}, []);

	const onSubmit = async (data: FormData) => {
		try {
			setIsPending(true);

			const token = await recaptcha.current?.executeAsync();

			if (!token) {
				toast.error(t("contact_modal.validation.recaptcha_failed"));
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
				toast.success(t("contact_modal.validation.success"));
				setIsPending(false);
				reset();
			}
		} catch (error) {
			toast.error(t("contact_modal.validation.send_failed"));
			console.error("Failed to send the message! Error:", error);
			setIsPending(false);
		}

		recaptcha.current?.reset();
	};

	const handleFormSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		handleSubmit(onSubmit)(event);
	};

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="flex flex-col gap-y-7.5"
			onFocusCapture={() => setHasEnteredViewport(true)}
		>
			<SectionTitle title={t("main.sections.contact")} iconName="contact" />
			<div
				className={cl(
					"bg-secondary border-border-gray flex justify-center rounded-sm border border-solid px-12 py-7.5 duration-1000 motion-safe:transition-opacity motion-reduce:opacity-100 motion-reduce:transition-none",
					hasEnteredViewport ? "opacity-100" : "opacity-0",
				)}
			>
				<div className="w-9/12">
					<form className="relative flex flex-col gap-y-4" onSubmit={handleFormSubmit}>
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
								rows={4}
								aria-invalid={!!errors.message}
								aria-describedby={errors.message ? "message-error" : undefined}
							/>
							<FieldErrorMessage id="message-error" field="message" error={errors.message} t={t} />
						</div>
						<span id="form-status" aria-live="polite" className="sr-only">
							{isPending ? t("contact_modal.button.sending") : ""}
						</span>
						<div className="flex flex-col gap-y-4">
							<div id="captcha-help" className="sr-only">
								{t("contact_modal.form.recaptcha")}
							</div>
							<ReCAPTCHA
								ref={recaptcha}
								sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
								size="invisible"
								badge="inline"
								aria-describedby="captcha-help"
							/>
							<button
								type="submit"
								disabled={isPending}
								aria-disabled={isPending}
								className="group flex-center bg-accent hover:bg-accent/50 w-full rounded-full px-4 py-2 hover:cursor-pointer disabled:cursor-not-allowed md:w-1/3"
							>
								<span className="text-primary text-lg leading-10 font-bold group-hover:text-white">
									{isPending ? t("contact_modal.button.sending") : t("contact_modal.button.send")}
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;

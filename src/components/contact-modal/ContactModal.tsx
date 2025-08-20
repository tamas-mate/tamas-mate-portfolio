import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { useModal } from "@/context/modal-context";
import { getFormattedDate, initObserver, toastConfig } from "@/utils/utils";
import { useFormValidation } from "@/hooks/useFormValidation";

const ContactModal = () => {
	const [isPending, setIsPending] = useState(false);
	const form = useRef<HTMLFormElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const subjectRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const recaptcha = useRef<ReCAPTCHA | null>(null);
	const { isModalOpen, closeModal } = useModal();
	const { formErrors, validateInputs, resetFormError, resetFormErrors } = useFormValidation();

	const handleCloseModal = () => {
		resetFormErrors();
		closeModal();
	};

	const sendEmail = async () => {
		setIsPending(true);

		if (
			!validateInputs(
				nameRef.current!.value,
				emailRef.current!.value,
				subjectRef.current!.value,
				messageRef.current!.value
			)
		) {
			toast.error("Please check your inputs!", toastConfig);
			setIsPending(false);
			return;
		}

		initObserver();
		const token = await recaptcha.current!.executeAsync();

		if (!token) {
			toast.error("Failed to verify reCAPTCHA!", toastConfig);
			setIsPending(false);
			return;
		}

		if (form.current) {
			form.current["g-recaptcha-response"].value = token;
		}

		try {
			const response = await emailjs.sendForm("contact_service", "contact_me", form.current!, {
				publicKey: "TnYzHr-fPUZUp9y-h",
			});

			if (response.status === 200) {
				toast.success("Message successfully sent!", toastConfig);
				setIsPending(false);
				handleCloseModal();
			}
		} catch (error) {
			toast.error("Failed to send the message!", toastConfig);
			console.error("FAILED...", error);
			setIsPending(false);
			handleCloseModal();
		}

		recaptcha.current?.reset();
	};

	if (!isModalOpen) {
		return null;
	}

	return (
		<>
			<div
				className="fixed top-0 left-0 bottom-0 right-0 bg-lighter-dark3/95 z-100"
				onClick={(e) => {
					if (e.target === e.currentTarget && !isPending) handleCloseModal();
				}}
			>
				<ReCAPTCHA ref={recaptcha} sitekey="6LcIeaorAAAAAMsbMHFg4SOBcSbWsowd8fG-CUci" size="invisible" />
			</div>
			<div
				className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-7.5 bg-secondary rounded-md z-105 xsl:w-120"
				onClick={(e) => e.stopPropagation()}
			>
				<form
					ref={form}
					className="relative flex flex-col gap-y-4"
					onSubmit={async (e) => {
						e.preventDefault();
						await sendEmail();
					}}
				>
					<span className="absolute -top-3 right-0 text-xl hover:cursor-pointer" onClick={handleCloseModal}>
						X
					</span>
					<input type="hidden" name="time" value={getFormattedDate()}></input>
					<input id="g-recaptcha-response" type="hidden" name="g-recaptcha-response" />
					<div className="flex flex-col gap-y-2">
						<label htmlFor="name" className="text-xl font-bold text-accent">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent"
							placeholder="Your Name"
							autoComplete="name"
							required
							max={50}
							ref={nameRef}
							onBlur={() => resetFormError("name")}
						/>
						{formErrors.nameError && <span className="text-xs text-red-500">{formErrors.nameError}</span>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email" className="text-xl font-bold text-accent">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent"
							placeholder="Your Email"
							autoComplete="email"
							required
							min={3}
							max={100}
							ref={emailRef}
							onBlur={() => resetFormError("email")}
						/>
						{formErrors.emailError && <span className="text-xs text-red-500">{formErrors.emailError}</span>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="title" className="text-xl font-bold text-accent">
							Subject:
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent"
							placeholder="Subject"
							autoComplete="off"
							required
							max={100}
							ref={subjectRef}
							onBlur={() => resetFormError("subject")}
						/>
						{formErrors.subjectError && <span className="text-xs text-red-500">{formErrors.subjectError}</span>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="message" className="text-xl font-bold text-accent">
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent resize-y"
							placeholder="Your Message"
							autoComplete="off"
							required
							minLength={10}
							maxLength={1000}
							ref={messageRef}
							onBlur={() => resetFormError("message")}
						/>
						{formErrors.messageError && <span className="text-xs text-red-500">{formErrors.messageError}</span>}
					</div>
					<div className="flex justify-center items-center">
						<button
							type="submit"
							disabled={isPending}
							className="group flex justify-center items-center bg-accent w-1/3 py-2 px-4 rounded-full hover:cursor-pointer hover:bg-accent/50 disabled:cursor-not-allowed"
						>
							<span className="text-lg leading-10 text-primary font-bold group-hover:text-white">
								{isPending ? "Sending" : "Send"}
							</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactModal;

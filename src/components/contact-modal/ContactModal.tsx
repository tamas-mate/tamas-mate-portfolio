import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { useModal } from "@/context/modal-context";
import { getFormattedDate, initObserver, toastConfig } from "@/utils/utils";

const ContactModal = () => {
	const [isPending, setIsPending] = useState(false);
	const form = useRef<HTMLFormElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const subjectRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const recaptcha = useRef<ReCAPTCHA | null>(null);
	const { isModalOpen, closeModal } = useModal();

	const validateInputs = () => {
		let formValid = true;

		if (nameRef.current?.value.trim() === "") {
			formValid = false;
		}

		if (emailRef.current?.value.trim() === "") {
			formValid = false;
		}

		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!regex.test(emailRef.current!.value)) {
			formValid = false;
		}

		if (subjectRef.current?.value.trim() === "") {
			formValid = false;
		}

		if (messageRef.current?.value.trim() === "") {
			formValid = false;
		}

		return formValid;
	};

	const sendEmail = async () => {
		setIsPending(true);

		if (!validateInputs()) {
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
				closeModal();
			}
		} catch (error) {
			toast.error("Failed to send the message!", toastConfig);
			console.error("FAILED...", error);
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
				className="fixed top-0 left-0 bottom-0 right-0 bg-lighter-dark3/95 z-100"
				onClick={(e) => {
					if (e.target === e.currentTarget && !isPending) closeModal();
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
					className="flex flex-col gap-y-2"
					onSubmit={async (e) => {
						e.preventDefault();
						await sendEmail();
					}}
				>
					<input type="hidden" name="time" value={getFormattedDate()}></input>
					<input id="g-recaptcha-response" type="hidden" name="g-recaptcha-response" />
					<div className="flex flex-col mb-2">
						<label htmlFor="name" className="text-xl font-bold text-accent mb-2">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent"
							placeholder="Your Name"
							autoComplete="name"
							ref={nameRef}
						/>
					</div>
					<div className="flex flex-col mb-2">
						<label htmlFor="email" className="text-xl font-bold text-accent mb-2">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent"
							placeholder="Your Email"
							autoComplete="email"
							ref={emailRef}
						/>
					</div>
					<div className="flex flex-col mb-2">
						<label htmlFor="title" className="text-xl font-bold text-accent mb-2">
							Subject:
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent"
							placeholder="Subject"
							autoComplete="off"
							ref={subjectRef}
						/>
					</div>
					<div className="flex flex-col mb-4">
						<label htmlFor="message" className="text-xl font-bold text-accent mb-2">
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							className="px-2 py-3 bg-white text-black outline-none focus:border focus:border-accent resize-y"
							placeholder="Your Message"
							autoComplete="off"
							ref={messageRef}
						/>
					</div>
					<div className="flex justify-center items-center">
						<button
							type="submit"
							disabled={isPending}
							className="group flex justify-center items-center bg-accent w-1/3 py-2 px-4 rounded-full hover:cursor-pointer hover:bg-accent/50 disabled:cursor-not-allowed"
						>
							<span className="text-xl leading-10 text-primary font-bold group-hover:text-white">
								{isPending ? "Sending ..." : "Send"}
							</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactModal;

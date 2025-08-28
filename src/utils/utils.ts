import clsx, { type ClassValue } from "clsx";
import { Bounce, type ToastPosition } from "react-toastify";
import { twMerge } from "./../../node_modules/tailwind-merge/src/lib/tw-merge";

import macweb1 from "../assets/images/macweb1.png";
import macweb2 from "../assets/images/macweb2.png";

export const imageMap: Record<string, string> = {
	"macweb1.png": macweb1,
	"macweb2.png": macweb2,
};

export function cl(...classes: ClassValue[]) {
	return twMerge(clsx(...classes));
}

export const toastContainerConfig = {
	position: "bottom-center" as ToastPosition,
	autoClose: 5000,
	hideProgressBar: false,
	newestOnTop: false,
	closeOnClick: true,
	rtl: false,
	pauseOnFocusLoss: true,
	draggable: true,
	pauseOnHover: true,
	transition: Bounce,
};

export const getFormattedDate = () => {
	const now = new Date();
	return now
		.toLocaleString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
		})
		.replace(",", "");
};

// Function that initializes a MutationObserver for the captcha
export const initObserver = () => {
	// Find the captcha window by first getting a list of iFrames.
	// After that we find the correct iFrame based on the src attribute
	// The actualy DIV that hides it, is a grandparent. So we get the
	// parentNode prop 2 times.
	const recaptchaWindow = [...document.getElementsByTagName("iframe")]?.find((x) =>
		x.src.includes("google.com/recaptcha/api2/bframe"),
	)?.parentNode?.parentNode as HTMLDivElement;

	// Make sure it is defined (it was found in the doc) before we add the observer
	if (recaptchaWindow) {
		new MutationObserver(() => {
			// ReCaptcha changes these 3 props when going invisible.
			// To solve this, we put an observer on the attributes and
			// check if one of these 3 properties changed from their
			// initial value.
			if (
				recaptchaWindow.style.visibility !== "visible" ||
				recaptchaWindow.style.opacity !== "1" ||
				recaptchaWindow.style.top !== "10px"
			) {
				console.log("restoring ReCaptcha visibility");
				// If changed, put back on default values.
				recaptchaWindow.style.opacity = "1";
				recaptchaWindow.style.visibility = "visible";
				recaptchaWindow.style.top = "10px";
			}
		}).observe(recaptchaWindow, {
			attributeFilter: ["style"],
		});
	}
};

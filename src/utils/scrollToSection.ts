import type { MouseEvent } from "react";

/**
 * Click handler for in-page navigation links, passed to ScrollSpy's onClickEach.
 * It replaces the library's own scrolling, which guesses the scroll container from overflow.
 */
export const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
	const { hash } = event.currentTarget;
	const target = document.getElementById(hash.slice(1));

	if (!target) return;

	if (window.location.hash !== hash) history.pushState(null, "", hash);

	// No behavior option: the browser uses <html>'s CSS scroll-behavior (smooth, or instant with reduced motion).
	target.scrollIntoView();

	// Like a native anchor jump: keyboard navigation continues from the section, not from the menu.
	if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
	target.focus({ preventScroll: true });
};

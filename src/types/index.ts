import type { ReactNode, Ref } from "react";
import type { FieldError } from "react-hook-form";
import type Swiper from "swiper";

import type icons from "@/assets/icons/data.json";
import type { INPUTLIMITS } from "@/utils/utils";

export type Theme = "light" | "dark" | "system";

export type ThemeContextType = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	isDark: boolean;
};

export type MobileMenuContextType = {
	isMenuOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
	triggerRef: Ref<HTMLButtonElement>;
	setTriggerRef: (el: HTMLButtonElement | null) => void;
};

export type ModalContextType = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export type SwiperContextType = {
	lockSwiper: () => void;
	unlockSwiper: () => void;
	outerSwiperRef: Ref<Swiper>;
	setSwiperRef: (el: Swiper | null) => void;
};

export type ScrollButtonProps = {
	onClick: () => void;
};

export type SwitcherProps = {
	extraClasses?: string;
};

export type ChildrenProvider = {
	children: ReactNode;
};

export type FormData = {
	name: string;
	email: string;
	subject: string;
	message: string;
	time: string;
	"g-recaptcha-response": string;
};

export type FieldErrorMessageProps = {
	id: string;
	field: keyof typeof INPUTLIMITS;
	error?: FieldError;
	t: (key: string, option?: { value: number }) => string;
};

export type IconName = keyof typeof icons;

export type Content = {
	header: HeaderProps;
	main: {
		navItems: NavItem[];
		summary: string;
		projects: ProjectProps[];
		overview: OverviewContentProps[];
		timeline: Timeline;
		skills: string;
		languages: string;
		quote: QuoteProps;
	};
	footer: FooterProps;
};

export type SectionTitleProps = {
	title: string;
	iconName: keyof typeof icons;
	stroke?: boolean;
};

export type SVGComponentProps = {
	className: string;
	viewBox: string;
	path?: string;
	children?: ReactNode;
};

export type HeaderProps = {
	name: string;
	role: string;
	location: string;
	cta: string;
};

export type MainProps = Content["main"];

type NavItem = {
	label: string;
	href: string;
};

export type SideNavProps = {
	navItems: NavItem[];
};

export type SummaryProps = {
	summary: string;
};

export type ProjectCarouselProps = {
	images: string[];
	title: string;
};

export type ProjectProps = {
	title: string;
	description: string;
	images: string[];
	technologies: string[];
	status: {
		text: string;
		link: string | null;
	};
};

export type ProjectsProps = {
	projects: ProjectProps[];
};

export type OverviewContentProps = {
	years: string;
	description: string;
	className?: string;
};

export type OverviewProps = {
	overview: OverviewContentProps[];
};

type Timeline = {
	work: TimelineItemProps[];
	education: TimelineItemProps[];
};

export type TimelineItemProps = {
	title: string;
	subTitle: string;
	location: string;
	date: string;
	icon: string;
	iconName?: keyof typeof icons;
	extra_content?: string | string[];
	sectionId: string;
};

export type TimeLineProps = {
	ref: Ref<HTMLElement>;
	sectionId: string;
	title: string;
	iconName: "work" | "education";
	timelineContent: TimelineItemProps[];
};

export type SkillsProps = {
	skills: string | string[];
};

export type LanguagesProps = {
	languages: string | string[];
};

export type QuoteProps = {
	text: string;
	author: string;
};

export type HistoryProps = {
	timeline: {
		[K in keyof Timeline]: TimelineItemProps[];
	};
	onClick: (id: string) => void;
};

export type HistoryRowProps = {
	index: number;
	item: TimelineItemProps;
	onClick: (id: string) => void;
};

export type FooterProps = Omit<HeaderProps, "location"> & { copyright: string };

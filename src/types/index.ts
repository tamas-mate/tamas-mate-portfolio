import type { ReactNode, Ref } from "react";

import type icons from "@/assets/icons/data.json";

export type Theme = "light" | "dark" | "system";

export type ThemeContextType = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	isDark: boolean;
};

export type ModalContextType = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};

export type ChildrenProvider = {
	children: ReactNode;
};

export type ContactModalProps = {
	"name-input": string;
	"name-input-placeholder": string;
	"email-input": string;
	"email-input-placeholder": string;
	"subject-input": string;
	"subject-input-placeholder": string;
	"message-input": string;
	"message-input-placeholder": string;
	"button-send": string;
	"button-sending": string;
	"check-inputs-toast": string;
	"failed-recaptcha-toast": string;
	"failed-message-toast": string;
	"success-message-toast": string;
	"input-at-least-error": string;
	"input-less-than-error": string;
	"input-characters-error": string;
	"input-email-format-error": string;
	"input-required": string;
	article: string;
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
	"contact-modal": ContactModalProps;
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
	status: string;
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
	extraContent?: string | string[];
	sectionId?: string;
};

export type TimeLineScrollHandle = {
	scrollIntoView: () => void;
};

export type TimeLineProps = {
	handleRef: Ref<TimeLineScrollHandle>;
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

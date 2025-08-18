import type icons from "@/assets/icons/data.json";

export type IconName = keyof typeof icons;

export type SVGComponentProps = {
	className: string;
	viewBox: string;
	path?: string;
	children?: React.ReactNode;
};

export type SummaryProps = {
	summary: string;
};

export type OverviewProps = {
	overview: {
		years: string;
		description: string;
	}[];
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

type WorkEducationType = "work" | "education";

export type TimelineItemProps = {
	title: string;
	shortTitle?: string;
	subTitle: string;
	location: string;
	date: string;
	icon: string;
	extraContent?: string[];
	sectionId?: string;
};

export type TimeLineProps = {
	sectionId: string;
	title: string;
	iconName: WorkEducationType;
	timelineContent: TimelineItemProps[];
};

export type SkillsProps = {
	skills: string[];
};

export type LanguagesProps = {
	languages: {
		name: string;
		level: {
			stage: string;
			rating: string;
		};
	}[];
};

export type QuoteProps = {
	quote: string;
	author: string;
};

export type HistoryProps = {
	timeline: {
		[key: string]: TimelineItemProps[];
	};
};

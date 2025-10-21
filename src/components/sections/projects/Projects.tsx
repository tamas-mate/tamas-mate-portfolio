import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../ui/SectionTitle";
import SectionWrapper from "../../ui/SectionWrapper";
import ProjectItemWrapper from "./ProjectItemWrapper";

import { useTheme } from "@/context/theme-context";
import type { ProjectsProps } from "@/types";
import { cl } from "@/utils/utils";

const Projects = ({ projects }: ProjectsProps) => {
	const { isDark } = useTheme();
	const { t } = useTranslation();

	return (
		<section id="projects" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.projects")} iconName="projects" />
			<SectionWrapper>
				<Swiper
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className={cl("", isDark && "project-swiper-dark")}
				>
					{projects.map((project, index) => (
						<SwiperSlide key={"project-" + index + "-slide"} className="w-full px-2">
							<ProjectItemWrapper {...project} />
						</SwiperSlide>
					))}
				</Swiper>
			</SectionWrapper>
		</section>
	);
};

export default Projects;

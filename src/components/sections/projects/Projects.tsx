import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../ui/SectionTitle";
import SectionWrapper from "../../ui/SectionWrapper";
import ProjectItemWrapper from "./ProjectItemWrapper";

import { useSwiper } from "@/context/swiper-context";
import { useTheme } from "@/context/theme-context";
import type { ProjectsProps } from "@/types";
import { cl } from "@/utils/utils";

const Projects = ({ projects }: ProjectsProps) => {
	const { isDark } = useTheme();
	const { t } = useTranslation();
	const { setSwiperRef } = useSwiper();

	return (
		<section id="projects" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.projects")} iconName="projects" />
			<SectionWrapper>
				{projects.length === 1 ? (
					<ProjectItemWrapper {...projects[0]} />
				) : (
					<Swiper
						onSwiper={(swiper) => setSwiperRef(swiper)}
						modules={[Autoplay, Pagination]}
						autoplay={{
							delay: 60000,
							disableOnInteraction: true,
						}}
						pagination={{ clickable: true }}
						grabCursor
						autoHeight
						spaceBetween={5}
						className={cl("", isDark && "project-swiper-dark")}
					>
						{projects.map((project, index) => (
							<SwiperSlide key={"project-" + index + "-slide"} className="w-full">
								<ProjectItemWrapper {...project} />
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</SectionWrapper>
		</section>
	);
};

export default Projects;

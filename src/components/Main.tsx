import SectionTitle from "./SectionTitle";
import OverviewContent from "./OverviewContent";
import TimelineItem from "./TimelineItem";

const Main = () => {
	return (
		<>
			<section id="summary" className="py-4 px-7.5">
				<SectionTitle title="Summary" iconName="summary" />
				<div className="py-7.5 px-12 bg-secondary rounded-sm">
					<p className="text-pretty">
						React & React Native developer with growing expertise in TypeScript and Tailwind CSS. Passionate about
						building user-focused web and mobile applications, solving problems efficiently, and contributing to
						collaborative teams in remote or hybrid environments.
					</p>
				</div>
			</section>
			<section id="overview" className="py-4 px-7.5">
				<SectionTitle title="Overview" iconName="overview" />
				<div className="flex flex-col">
					<OverviewContent content={{ years: "5", description: "years of professional experience" }} />
					<OverviewContent className="mt-7.5" content={{ years: "3", description: "languages" }} />
				</div>
			</section>
			<section id="work-history" className="py-4 px-7.5">
				<SectionTitle title="Work History" iconName="work" />
				<TimelineItem
					extraStyles="flex-[1_1_0] mb-8"
					iconName="work"
					title="Programmer"
					subTitle="Pegazus Soft"
					location="Gheorgheni, Romania"
					date="11.2024 - 06.2025"
					extraContent={[
						"Developed modular React + TypeScript features embedded in a Yii (PHP) web app",
						"Implemented dynamic forms, 3D visualizations and building simulations using Three.js",
						"Collaborated with backend using PostgreSQL & Yii, including 2FA and database migrations",
					]}
				/>
				<TimelineItem
					extraStyles="flex-[1_1_0]"
					iconName="work"
					title="Programmer"
					subTitle="CamelCoding"
					location="Miercurea Ciuc, Romania"
					date="08.2019 - 10.2024"
					extraContent={[
						"Built and deployed mobile applications using React Native and Redux state manager",
						"Developed Vue.js web applications with Laravel and MySQL backend",
						"Developed Python and Node.js scripts for NFT generation, metadata processing, and backend services",
						"Integrated and debugged multiple systems in production environments",
						"Adapted quickly to project needs while continuously upskilling through self-guided learning",
					]}
				/>
			</section>
			<section id="education" className="py-4 px-7.5">
				<SectionTitle title="Education" iconName="education" />
				<TimelineItem
					extraStyles="w-full mb-8"
					iconName="education"
					title="Bachelor's degree (BSc) - Business Informatics"
					subTitle="Sapientia Hungarian University of Transylvania"
					location="Miercurea Ciuc, Romania"
					date="09.2016 - 06.2019"
				/>
				<TimelineItem
					extraStyles="w-full"
					iconName="education"
					title="Graduation Diploma - English bilingual track specializing in mathematics and computer science"
					subTitle="Székely Mikó College"
					location="Sfantu Gheorghe, Romania"
					date="09.2011 - 09.2015"
				/>
			</section>
		</>
	);
};

export default Main;

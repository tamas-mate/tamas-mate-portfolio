import SVGComponent from "../SVGComponent";

import { useModal } from "@/context/modal-context";
import profileBackground from "../../assets/images/bg-profile.avif";
import profilePicture from "../../assets/images/profile.avif";
import icons from "../../assets/icons/data.json";

const Header = () => {
	const { openModal } = useModal();

	return (
		<header className="sm:px-7.5">
			<div className="pb-4 bg-primary">
				<div className="p-7.5 bg-secondary border border-solid rounded-sm border-lighter-dark">
					<div className="relative h-87.5 mt-negative-margin mr-negative-margin mb-0 ml-negative-margin">
						<img
							src={profileBackground}
							alt="profile-background"
							className="w-full h-full object-cover text-transparent"
						/>
						<div
							className="absolute inset-0 overflow-hidden w-60 h-60 m-auto border-6 border-solid border-white 
						rounded-full transform translate-y-42.5 lg:transform-none lg:translate-y-0 lg:top-auto lg:right-auto lg:-bottom-8.5 lg:left-8.5"
						>
							<img
								src={profilePicture}
								alt="profile-picture"
								className="absolute w-full h-full inset-0 object-contain text-transparent"
							/>
						</div>
					</div>
					<div className="flex flex-col items-end pt-7.5 mr-negative-margin ml-negative-margin lg:flex-row lg:justify-between lg:items-center lg:h-50 lg:pt-15 lg:pb-5 lg:px-1 lg:mx-0">
						<div className="w-full mt-27.5 text-center lg:flex-[1_1_0] lg:mt-0 lg:text-left">
							<h1 className="text-2xl font-bold lg:mb-2">Tamás Máté</h1>
							<div className="flex flex-col justify-center mt-2.5 lg:flex-row lg:justify-start lg:gap-18 lg:mt-0">
								<div className="flex flex-row mb-2 justify-center items-center lg:justify-start">
									<SVGComponent
										className={"min-w-4 max-w-4 w-4 min-h-4 max-h-4 h-4 mr-3 fill-accent"}
										{...icons["work"]}
									/>
									<span>Front-End & React Native Developer</span>
								</div>
								<div className="flex flex-row mb-2 justify-center items-center lg:justify-start">
									<SVGComponent
										className={"min-w-4 max-w-4 w-4 min-h-4 max-h-4 h-4 mr-3 fill-accent"}
										{...icons["location"]}
									/>
									<span>Saint George, Romania</span>
								</div>
							</div>
						</div>
						<div className="flex justify-center w-full mt-2 -mb-7.5 px-7.5 py-5 border-t border-solid border-lighter-dark lg:w-auto lg:self-end lg:m-0 lg:p-0 lg:border-none">
							<button
								className="inline-block py-3 px-5 border-none rounded-4xl text-lg font-semibold decoration-none 
							uppercase bg-accent text-primary hover:cursor-pointer hover:bg-accent/50 hover:text-white transition-all duration-300
							lg:px-18"
								onClick={openModal}
							>
								Contact Me
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import icons from "../../assets/icons/data.json";
import type { QuoteProps } from "@/types";

const Quote = ({ text, author }: QuoteProps) => {
	const { t } = useTranslation();

	return (
		<section id="quote">
			<SectionTitle title={t("main.sections.quote")} iconName="quote" />
			<div className="py-7.5 px-12 bg-secondary rounded-sm">
				<div className="relative w-full min-h-15">
					<div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
						<SVGComponent
							className={"min-w-25 max-w-25 w-25 min-h-25 max-h-25 h-25 fill-lighter-dark3/50"}
							{...icons["quote"]}
						/>
					</div>
					<figure className="relative flex flex-col text-center">
						<blockquote className="mt-12 mb-8">
							<p className="text-pretty text-xl italic">{t(text)}</p>
						</blockquote>
						<figcaption className=" text-sm text-gray">{author}</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Quote;

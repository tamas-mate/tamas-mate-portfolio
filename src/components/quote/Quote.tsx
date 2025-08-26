import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle";
import SVGComponent from "../SVGComponent";

import icons from "../../assets/icons/data.json";
import type { QuoteProps } from "@/types";

const Quote = ({ text, author }: QuoteProps) => {
	const { t } = useTranslation();

	return (
		<section id="quote" className="flex flex-col gap-y-7.5">
			<SectionTitle title={t("main.sections.quote")} iconName="quote" />
			<div className="bg-secondary border-border-gray rounded-sm border border-solid px-12 py-7.5">
				<div className="relative min-h-15 w-full">
					<div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"}>
						<SVGComponent className={"fill-lighter-dark3/50 size-25"} {...icons["quote"]} />
					</div>
					<figure className="relative flex flex-col text-center">
						<blockquote className="pt-12 pb-8">
							<p className="text-xl text-pretty italic">{t(text)}</p>
						</blockquote>
						<figcaption className="text-gray text-sm">{author}</figcaption>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Quote;

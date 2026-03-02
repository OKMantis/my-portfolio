import { HeadingDivider } from "components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
								Hi, I'm Owen, a Rails developer with a background that most engineers don't have: five years as a financial auditor at Big Four firms before moving into software.
						</p>
						<p className="my-3.5">
								That combination turns out to be genuinely useful in fintech. I understand how financial data flows, what reconciliation actually means, why accuracy and audit trails matter, not because I read about it, but because I spent years inside those processes at PwC and Crowe Horwath.
						</p>
						<p>
								On the engineering side, I build and maintain production Rails applications, work with background jobs and REST APIs, and integrate AI features using the OpenAI API. My two main platforms are IBICASA.com, a real estate marketplace I've been sole engineer on since 2025, and True Trek, an AI travel platform built during a team sprint at Le Wagon.
						</p>
						<p className="my-3.5">
								I'm looking to join a fintech team where the domain depth I bring from auditing is actually an asset, and where I can keep growing as an engineer with people who take their craft seriously.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

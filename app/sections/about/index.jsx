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
							Hi, I’m Owen — a full-stack software engineer specializing in Ruby on Rails, backend development, and AI-powered features. I build clean, efficient applications from end to end, with a strong focus on automation, performance, and intuitive user experiences.
						</p>
						<p className="my-3.5">
							My journey into tech started in 2018 when I discovered how much impact a well-designed system can have on real-world processes. Since then, I’ve built two production platforms: IBICASA.com, a real-estate system that automated listings and reduced manual work by 50%, and True Trek, an AI-driven travel platform that transforms traveler insights into personalized recommendations.
						</p>
						<p>
							I enjoy solving complex problems, designing thoughtful architectures, and turning ideas into scalable products. With a background in finance and business operations, I bring a unique blend of technical ability, analytical thinking, and product intuition to every project.
						</p>
						<p className="my-3.5">
							I’m always excited to collaborate on meaningful products—especially those involving Rails, AI, automation, or workflow improvement.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

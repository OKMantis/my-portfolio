import { AiFillGithub, AiFillGitlab, AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { FaBitbucket, FaFigma, FaReact, FaTrello, FaWordpressSimple } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiFlutterFill } from "react-icons/ri";
import { AiOutlineRuby } from "react-icons/ai";
import { SiRubyonrails } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiCopilotFill } from "react-icons/ri";
import { RiClaudeFill } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";
import {
	SiAdobexd,
	SiAndroidstudio,
	SiChakraui,
	SiFirebase,
	SiJira,
	SiMui,
	SiStyledcomponents,
	SiWebstorm,
	SiXcode
} from "react-icons/si";
import { TbBrandHeadlessui, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export const TECHNOLOGIES = [
	// {
	// 	category: "Mobile",
	// 	items: [
	// 		{ name: "Flutter", icon: <RiFlutterFill size={32} /> },
	// 		{ name: "Firebase", icon: <SiFirebase size={32} /> }
	// 	]
	// },
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
		]
	},
	{
		category: "Back-end & AI",
		items: [
			{ name: "Ruby", icon: <AiOutlineRuby size={32} /> },
			{ name: "Ruby on Rails", icon: <SiRubyonrails size={32} /> },
			{ name: "PostgreSQL", icon: <BiLogoPostgresql size={32} /> },
			{ name: "Heroku", icon: <GrHeroku size={32} /> },
			{ name: "OpenAI", icon: <AiOutlineOpenAI size={32} /> },
			{ name: "Copilot", icon: <RiCopilotFill size={32} /> },
			{ name: "Claude", icon: <RiClaudeFill size={32} /> },
		]
	},
	// {
	// 	category: "UI tools",
	// 	items: [
	// 		{ name: "Figma", icon: <FaFigma size={32} /> }
	// 	]
	// },
	{
		category: "Other tools",
		items: [
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> }
		]
	}
];

const author = "Owen Moss";
const description =
	"Full-stack software engineer specializing in Ruby on Rails, backend development, and AI-powered features. Building clean, efficient applications with a focus on automation, performance, and intuitive user experiences.";
const url = "https://owenmoss.dev"; // Update this with your actual Vercel URL after deployment
export const AppMetadata = {
	metadataBase: new URL("https://owenmoss.dev/"), // Update this with your actual Vercel URL
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Owen Moss",
		"Owen Moss - software engineer",
		"Full-stack developer",
		"Ruby on Rails developer",
		"AI developer",
		"Portfolio website",
		"Software Engineer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "/screenshot.png", // Update with your own screenshot
				width: 800,
				height: 600,
				alt: "Owen Moss portfolio website"
			},
			{
				url: "/screenshot.png", // Update with your own screenshot
				width: 1800,
				height: 1600,
				alt: "Owen Moss portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};

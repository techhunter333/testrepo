import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Moon, c as Linkedin, d as Camera, f as Calendar, h as ArrowUpRight, i as Newspaper, l as Instagram, m as BookOpen, n as Sun, o as MapPin, p as BriefcaseBusiness, r as ShoppingBag, s as Mail, u as Github } from "../_libs/lucide-react.mjs";
import { o as useTheme } from "./router-Dv2wSnrg.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9kMbPg6.js
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	name: "Maya Chen",
	handle: "@mayachen",
	title: "Product designer & photographer",
	bio: "I design calm digital products and photograph quiet light. Based in Lisbon — open for select collaborations.",
	location: "Lisbon, Portugal",
	avatarSrc: "/avatar.jpg",
	avatarAlt: "Portrait of Maya Chen"
};
var socialLinks = [
	{
		id: "instagram",
		label: "Instagram",
		href: "https://instagram.com",
		icon: Instagram
	},
	{
		id: "github",
		label: "GitHub",
		href: "https://github.com",
		icon: Github
	},
	{
		id: "linkedin",
		label: "LinkedIn",
		href: "https://linkedin.com",
		icon: Linkedin
	},
	{
		id: "email",
		label: "Email",
		href: "mailto:hello@mayachen.studio",
		icon: Mail
	}
];
var featuredLinks = [
	{
		id: "portfolio",
		title: "Portfolio",
		description: "Selected product design work",
		href: "https://example.com/portfolio",
		icon: BriefcaseBusiness
	},
	{
		id: "photos",
		title: "Photo archive",
		description: "Film notes & travel frames",
		href: "https://example.com/photos",
		icon: Camera
	},
	{
		id: "newsletter",
		title: "Quiet Notes",
		description: "Monthly design essays",
		href: "https://example.com/newsletter",
		icon: Newspaper
	},
	{
		id: "shop",
		title: "Print shop",
		description: "Limited edition photo prints",
		href: "https://example.com/shop",
		icon: ShoppingBag
	},
	{
		id: "blog",
		title: "Journal",
		description: "Process, tools, and travel",
		href: "https://example.com/blog",
		icon: BookOpen
	},
	{
		id: "book",
		title: "Book a call",
		description: "30-minute intro chat",
		href: "https://example.com/book",
		icon: Calendar
	}
];
function LinkButton({ link, className, style }) {
	const Icon = link.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: link.href,
		target: "_blank",
		rel: "noopener noreferrer",
		style,
		className: cn("group relative flex w-full items-center gap-3.5 overflow-hidden", "rounded-2xl border border-border-strong bg-bg-elevated px-4 py-3.5 sm:px-5 sm:py-4", "shadow-soft", "transition-[transform,background-color,border-color,box-shadow] duration-fast ease-[var(--ease-smooth)]", "hover:-translate-y-0.5 hover:border-fg-subtle hover:bg-bg-subtle hover:shadow-lift", "active:scale-[0.98]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex size-11 shrink-0 items-center justify-center rounded-xl", "bg-bg-subtle text-fg", "transition-[background-color,color,transform] duration-fast ease-[var(--ease-smooth)]", "group-hover:bg-accent group-hover:text-accent-fg group-hover:scale-[1.03]"),
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					strokeWidth: 1.75
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[0.95rem] font-semibold tracking-tight text-fg sm:text-base",
					children: link.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block truncate text-sm text-fg-muted",
					children: link.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: cn("size-4 shrink-0 text-fg-subtle", "transition-[transform,color] duration-fast ease-[var(--ease-smooth)]", "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"),
				strokeWidth: 1.75,
				"aria-hidden": "true"
			})
		]
	});
}
function SocialRow({ links, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("flex flex-wrap items-center justify-center gap-2.5", className),
		children: links.map((link) => {
			const Icon = link.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				target: link.href.startsWith("mailto:") ? void 0 : "_blank",
				rel: link.href.startsWith("mailto:") ? void 0 : "noopener noreferrer",
				"aria-label": link.label,
				className: cn("inline-flex size-11 items-center justify-center rounded-full", "border border-border-strong bg-bg-elevated text-fg shadow-soft", "transition-[transform,color,background-color,border-color,box-shadow] duration-fast ease-[var(--ease-smooth)]", "hover:-translate-y-0.5 hover:border-fg-subtle hover:bg-bg-subtle hover:shadow-lift", "active:scale-[0.96]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-[18px]",
					strokeWidth: 1.75
				})
			}) }, link.id);
		})
	});
}
function ThemeToggle({ className }) {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
		className: cn("relative inline-flex size-11 items-center justify-center rounded-full", "border border-border-strong bg-bg-elevated text-fg shadow-soft", "transition-[transform,background-color,border-color,box-shadow] duration-fast ease-[var(--ease-smooth)]", "hover:-translate-y-0.5 hover:border-fg-subtle hover:shadow-lift", "active:scale-[0.96]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative flex size-5 items-center justify-center",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
				className: cn("absolute size-5 transition-[opacity,transform,filter] duration-fast ease-[var(--ease-smooth)]", isDark ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
				strokeWidth: 1.75
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
				className: cn("absolute size-5 transition-[opacity,transform,filter] duration-fast ease-[var(--ease-smooth)]", isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
				strokeWidth: 1.75
			})]
		})
	});
}
function LinkInBio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-[calc(var(--grok-banner-h,0px)+1.25rem)] sm:px-6 sm:pb-14 sm:pt-[calc(var(--grok-banner-h,0px)+2rem)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-5 top-[calc(var(--grok-banner-h,0px)+0.75rem)] z-10 sm:right-6 sm:top-[calc(var(--grok-banner-h,0px)+1.25rem)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enter-stagger relative mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("size-[6.5rem] overflow-hidden rounded-full sm:size-28", "bg-bg-subtle shadow-lift", "ring-[3px] ring-bg-elevated outline outline-1 outline-border-strong"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.avatarSrc,
								alt: profile.avatarAlt,
								width: 112,
								height: 112,
								className: "size-full object-cover object-top",
								decoding: "async",
								fetchPriority: "high"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1 right-1 size-3.5 rounded-full bg-accent ring-[3px] ring-bg shadow-soft",
							"aria-label": "Available for work",
							title: "Available for work"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enter-stagger space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[1.75rem] font-medium leading-tight tracking-[-0.02em] text-fg sm:text-[2rem]",
							children: profile.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-accent",
							children: profile.handle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-stagger mt-3 max-w-[20rem] text-pretty text-[0.95rem] leading-relaxed text-fg-muted sm:max-w-sm sm:text-base",
						children: profile.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "enter-stagger mt-3 inline-flex items-center gap-1.5 text-sm text-fg-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-3.5 shrink-0",
							strokeWidth: 1.75,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.location })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, {
						links: socialLinks,
						className: "enter-stagger mt-6"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Featured links",
				className: "mt-8 flex flex-col gap-3 sm:mt-9 sm:gap-3.5",
				children: featuredLinks.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButton, {
					link,
					className: "enter-stagger",
					style: { animationDelay: `${240 + index * 50}ms` }
				}, link.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "enter-stagger mt-auto pt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tracking-wide text-fg-subtle",
					children: ["Designed with care · ", (/* @__PURE__ */ new Date()).getFullYear()]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkInBio, {})
	});
}
//#endregion
export { Home as component };

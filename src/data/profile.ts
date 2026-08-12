import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  Camera,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Newspaper,
  ShoppingBag,
} from "lucide-react";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FeaturedLink = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Maya Chen",
  handle: "@mayachen",
  title: "Product designer & photographer",
  bio: "I design calm digital products and photograph quiet light. Based in Lisbon — open for select collaborations.",
  location: "Lisbon, Portugal",
  avatarSrc: "/avatar.jpg",
  avatarAlt: "Portrait of Maya Chen",
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@mayachen.studio",
    icon: Mail,
  },
];

export const featuredLinks: FeaturedLink[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Selected product design work",
    href: "https://example.com/portfolio",
    icon: BriefcaseBusiness,
  },
  {
    id: "photos",
    title: "Photo archive",
    description: "Film notes & travel frames",
    href: "https://example.com/photos",
    icon: Camera,
  },
  {
    id: "newsletter",
    title: "Quiet Notes",
    description: "Monthly design essays",
    href: "https://example.com/newsletter",
    icon: Newspaper,
  },
  {
    id: "shop",
    title: "Print shop",
    description: "Limited edition photo prints",
    href: "https://example.com/shop",
    icon: ShoppingBag,
  },
  {
    id: "blog",
    title: "Journal",
    description: "Process, tools, and travel",
    href: "https://example.com/blog",
    icon: BookOpen,
  },
  {
    id: "book",
    title: "Book a call",
    description: "30-minute intro chat",
    href: "https://example.com/book",
    icon: Calendar,
  },
];

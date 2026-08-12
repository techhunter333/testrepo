import { MapPin } from "lucide-react";
import { featuredLinks, profile, socialLinks } from "@/data/profile";
import { LinkButton } from "@/components/link-button";
import { SocialRow } from "@/components/social-row";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function LinkInBio() {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-[calc(var(--grok-banner-h,0px)+1.25rem)] sm:px-6 sm:pb-14 sm:pt-[calc(var(--grok-banner-h,0px)+2rem)]">
      <div className="absolute right-5 top-[calc(var(--grok-banner-h,0px)+0.75rem)] z-10 sm:right-6 sm:top-[calc(var(--grok-banner-h,0px)+1.25rem)]">
        <ThemeToggle />
      </div>

      <header className="flex flex-col items-center text-center">
        <div className="enter-stagger relative mb-5">
          <div
            className={cn(
              "size-[6.5rem] overflow-hidden rounded-full sm:size-28",
              "bg-bg-subtle shadow-lift",
              "ring-[3px] ring-bg-elevated outline outline-1 outline-border-strong",
            )}
          >
            <img
              src={profile.avatarSrc}
              alt={profile.avatarAlt}
              width={112}
              height={112}
              className="size-full object-cover object-top"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 size-3.5 rounded-full bg-accent ring-[3px] ring-bg shadow-soft"
            aria-label="Available for work"
            title="Available for work"
          />
        </div>

        <div className="enter-stagger space-y-1.5">
          <h1 className="font-display text-[1.75rem] font-medium leading-tight tracking-[-0.02em] text-fg sm:text-[2rem]">
            {profile.name}
          </h1>
          <p className="text-sm font-medium text-accent">{profile.handle}</p>
        </div>

        <p className="enter-stagger mt-3 max-w-[20rem] text-pretty text-[0.95rem] leading-relaxed text-fg-muted sm:max-w-sm sm:text-base">
          {profile.bio}
        </p>

        <p className="enter-stagger mt-3 inline-flex items-center gap-1.5 text-sm text-fg-subtle">
          <MapPin className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span>{profile.location}</span>
        </p>

        <SocialRow links={socialLinks} className="enter-stagger mt-6" />
      </header>

      <nav
        aria-label="Featured links"
        className="mt-8 flex flex-col gap-3 sm:mt-9 sm:gap-3.5"
      >
        {featuredLinks.map((link, index) => (
          <LinkButton
            key={link.id}
            link={link}
            className="enter-stagger"
            style={{ animationDelay: `${240 + index * 50}ms` }}
          />
        ))}
      </nav>

      <footer className="enter-stagger mt-auto pt-10 text-center">
        <p className="text-xs tracking-wide text-fg-subtle">
          Designed with care · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

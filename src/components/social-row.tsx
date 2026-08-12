import type { SocialLink } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SocialRow({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-2.5",
        className,
      )}
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full",
                "border border-border-strong bg-bg-elevated text-fg shadow-soft",
                "transition-[transform,color,background-color,border-color,box-shadow] duration-fast ease-[var(--ease-smooth)]",
                "hover:-translate-y-0.5 hover:border-fg-subtle hover:bg-bg-subtle hover:shadow-lift",
                "active:scale-[0.96]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

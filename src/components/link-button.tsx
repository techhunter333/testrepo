import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedLink } from "@/data/profile";
import { cn } from "@/lib/utils";

export function LinkButton({
  link,
  className,
  style,
}: {
  link: FeaturedLink;
  className?: string;
  style?: CSSProperties;
}) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={cn(
        "group relative flex w-full items-center gap-3.5 overflow-hidden",
        "rounded-2xl border border-border-strong bg-bg-elevated px-4 py-3.5 sm:px-5 sm:py-4",
        "shadow-soft",
        "transition-[transform,background-color,border-color,box-shadow] duration-fast ease-[var(--ease-smooth)]",
        "hover:-translate-y-0.5 hover:border-fg-subtle hover:bg-bg-subtle hover:shadow-lift",
        "active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-xl",
          "bg-bg-subtle text-fg",
          "transition-[background-color,color,transform] duration-fast ease-[var(--ease-smooth)]",
          "group-hover:bg-accent group-hover:text-accent-fg group-hover:scale-[1.03]",
        )}
        aria-hidden="true"
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[0.95rem] font-semibold tracking-tight text-fg sm:text-base">
          {link.title}
        </span>
        <span className="mt-0.5 block truncate text-sm text-fg-muted">
          {link.description}
        </span>
      </span>

      <ArrowUpRight
        className={cn(
          "size-4 shrink-0 text-fg-subtle",
          "transition-[transform,color] duration-fast ease-[var(--ease-smooth)]",
          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg",
        )}
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </a>
  );
}

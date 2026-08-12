import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-full",
        "border border-border-strong bg-bg-elevated text-fg shadow-soft",
        "transition-[transform,background-color,border-color,box-shadow] duration-fast ease-[var(--ease-smooth)]",
        "hover:-translate-y-0.5 hover:border-fg-subtle hover:shadow-lift",
        "active:scale-[0.96]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <span className="relative flex size-5 items-center justify-center" aria-hidden="true">
        <Sun
          className={cn(
            "absolute size-5 transition-[opacity,transform,filter] duration-fast ease-[var(--ease-smooth)]",
            isDark
              ? "scale-[0.25] opacity-0 blur-[4px]"
              : "scale-100 opacity-100 blur-none",
          )}
          strokeWidth={1.75}
        />
        <Moon
          className={cn(
            "absolute size-5 transition-[opacity,transform,filter] duration-fast ease-[var(--ease-smooth)]",
            isDark
              ? "scale-100 opacity-100 blur-none"
              : "scale-[0.25] opacity-0 blur-[4px]",
          )}
          strokeWidth={1.75}
        />
      </span>
    </button>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 py-12 pt-[calc(var(--grok-banner-h,0px)+3rem)]">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8">
        <div className="mb-6 space-y-1.5 text-center">
          <h1 className="font-display text-2xl font-medium tracking-tight text-fg">
            Sign in
          </h1>
          <p className="text-sm text-fg-muted">
            Access your account to manage links.
          </p>
        </div>

        {authEnabled ? (
          <div className="space-y-2.5">
            {GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className={cn(
                  "flex w-full items-center justify-center rounded-xl border border-border-strong",
                  "bg-bg px-4 py-3 text-sm font-semibold text-fg",
                  "transition-[transform,background-color,border-color] duration-fast ease-[var(--ease-smooth)]",
                  "hover:bg-bg-subtle active:scale-[0.98]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
              >
                Continue with {p.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-fg-muted">
            Sign-in is disabled.
          </p>
        )}

        <p className="mt-6 text-center text-sm text-fg-subtle">
          <Link
            to="/"
            className="font-medium text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            Back to profile
          </Link>
        </p>
      </div>
    </main>
  );
}

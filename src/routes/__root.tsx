import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <p className="font-mono text-xs text-accent">404</p>
        <h1 className="mt-4 font-mono text-2xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That route doesn&apos;t exist. Nothing was logged, nothing broke — it&apos;s just not here.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-mono text-xs text-accent-foreground transition-opacity duration-150 hover:opacity-90"
        >
          go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <p className="font-mono text-xs text-accent">error</p>
        <h1 className="mt-4 font-mono text-2xl text-foreground">This page didn&apos;t load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can retry or head back home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-mono text-xs text-accent-foreground transition-opacity duration-150 hover:opacity-90"
          >
            try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center rounded-md border border-border px-5 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            go home
          </a>
        </div>
      </div>
    </div>
  );
}

function PendingComponent() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
        <span className="h-3 w-3 animate-spin rounded-full border border-border border-t-accent" />
        loading
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Muhammad Naqi — Full-Stack Developer" },
      {
        name: "description",
        content: "Full-stack developer. Auth systems, approval workflows, admin dashboards.",
      },
      { name: "author", content: "Muhammad Naqi" },
      { property: "og:site_name", content: "Muhammad Naqi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  pendingComponent: PendingComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

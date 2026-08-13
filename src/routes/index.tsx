import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

const title = "Muhammad Naqi — Full-Stack Developer";
const description =
  "Self-taught full-stack developer in Karachi. Auth systems with refresh-token rotation, maker-checker approval workflows, and admin dashboards in TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </>
  );
}

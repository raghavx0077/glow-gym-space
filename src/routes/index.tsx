import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ironforge — Premium Strength & Performance Gym" },
      { name: "description", content: "Elite coaching, science-backed programs, and a community built to push your limits. Join Ironforge." },
      { property: "og:title", content: "Ironforge — Premium Strength & Performance Gym" },
      { property: "og:description", content: "Elite coaching, science-backed programs, and a community built to push your limits." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Landing />
      <Toaster />
    </>
  );
}

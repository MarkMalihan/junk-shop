import type { Route } from "./+types/home";
import Landing from "@/features/landing/components/landing";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Junk Shop" },
    { name: "description", content: "A tiny collection for my random projects." },
  ];
}

export default function Home() {
  return <Landing />;
}

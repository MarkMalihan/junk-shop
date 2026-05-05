import type { Route } from "./+types/home";
import Landing from "@/features/landing/components/landing";
import { APP } from "@/shared/configs/app";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: `${APP.name} — Random projects` },
    {
      name: "description",
      content: `${APP.name} — ${APP.description}`,
    },
  ];
}

export default function Home() {
  return <Landing />;
}

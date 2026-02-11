import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/myths/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/myths/"!</div>;
}

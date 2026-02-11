import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cultures/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cultures/"!</div>;
}

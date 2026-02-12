import { createFileRoute } from "@tanstack/react-router";
import GridView from "../../components/gridView/GridView";

export const Route = createFileRoute("/characters/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <GridView />
    </div>
  );
}

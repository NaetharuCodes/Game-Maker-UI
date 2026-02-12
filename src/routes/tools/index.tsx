import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tools/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Dice Roller</div>
      <div>Character Sheet</div>
      <div>Map Maker</div>
      <div>Name Generator</div>
      <div>Planner Board</div>
      <div>Note Taker</div>
      <div>Mind Map</div>
    </div>
  );
}

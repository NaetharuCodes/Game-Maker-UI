import { createFileRoute } from "@tanstack/react-router";
import Article from "../../components/article/Article";

export const Route = createFileRoute("/article/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Article
      title="The Title"
      mainText="This is the text of the article"
      lastUpdated="12th June 2025"
      imageURL="123"
    />
  );
}

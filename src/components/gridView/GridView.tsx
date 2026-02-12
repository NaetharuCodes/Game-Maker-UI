import { useState } from "react";
import Card, { type CardProps } from "../card/Card";
import styles from "./GridView.module.css";

const testCards: CardProps[] = [
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
  {
    name: "name",
    imageURL: "123",
    linkURL: "url",
  },
];

const GridView = () => {
  const [items, setItems] = useState<CardProps[]>(testCards);

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card name={item.name} imageURL="123" linkURL="123" />
      ))}
    </div>
  );
};

export default GridView;

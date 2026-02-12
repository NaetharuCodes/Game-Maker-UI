import { Link } from "@tanstack/react-router";
import styles from "./Card.module.css";

export interface CardProps {
  imageURL: string;
  linkURL: string;
  name: string;
}

const Card = ({ imageURL, linkURL, name }: CardProps) => {
  return (
    <div>
      <Link to={linkURL}>
        <div className={styles.card}>
          <img className={styles.image} src={imageURL} alt="card image" />
          <div className={styles.name}>{name}</div>
          <div className={styles.overlay} />
        </div>
      </Link>
    </div>
  );
};

export default Card;

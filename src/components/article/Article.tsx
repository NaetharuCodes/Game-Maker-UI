import styles from "./Article.module.css";
import picture from "../../assets/man-1.png";

interface ArticleProps {
  title: string;
  mainText: string;
  lastUpdated: string;
  imageURL?: string;
}

const placeholder =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const Article = ({ title, mainText, lastUpdated, imageURL }: ArticleProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{placeholder}</p>
        {imageURL && (
          <img className={styles.image} src={picture} alt="placeholder" />
        )}

        <p className={styles.text}>{placeholder}</p>
        <p className={styles.text}>{placeholder}</p>
        <p className={styles.text}>{placeholder}</p>
        <p className={styles.date}>Late Update: {lastUpdated}</p>
      </div>
    </div>
  );
};

export default Article;

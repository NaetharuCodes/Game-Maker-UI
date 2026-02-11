import { Link } from "@tanstack/react-router";
import styles from "./StyledLink.module.css";

interface StyledLinkProps {
  to: string;
  children: React.ReactNode;
}

const StyledLink = ({ to, children }: StyledLinkProps) => {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  );
};

export default StyledLink;

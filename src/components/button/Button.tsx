import styles from "./Button.module.css";

interface ButtonProps {
  buttonType: "primary" | "secondary" | "alert" | "warning";
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ buttonType, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[buttonType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

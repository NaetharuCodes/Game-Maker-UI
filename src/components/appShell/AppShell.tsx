import StyledLink from "../styledLink/StyledLink";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div id="header-nav-links" className={styles.headerGroup}>
          <StyledLink to="/cultures">Cultures</StyledLink>
          <StyledLink to="/history">History</StyledLink>
          <StyledLink to="/myths">Myths</StyledLink>
          <StyledLink to="/characters">Characters</StyledLink>
          <StyledLink to="/locations">Locations</StyledLink>
          <StyledLink to="/items">Items</StyledLink>
          <StyledLink to="/hooks">Hooks</StyledLink>
          <StyledLink to="/tools">Tools</StyledLink>
        </div>
        <div id="header-nav-links" className={styles.headerGroup}>
          <StyledLink to="/settings">Settings</StyledLink>
          <StyledLink to="/help">Help</StyledLink>
        </div>
      </header>
      <div className={styles.bar} />
      <section className={styles.content}>{children}</section>
      <div className={styles.bar} />
      <footer className={styles.footer}>Created by Naetharu (2025)</footer>
    </div>
  );
};

export default AppShell;

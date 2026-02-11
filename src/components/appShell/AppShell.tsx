import { Link } from "@tanstack/react-router";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div>
      <header>
        <Link to="/about" />
        <p>Some more content here</p>
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default AppShell;

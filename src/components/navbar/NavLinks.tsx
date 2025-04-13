
import { Link, useLocation } from "react-router-dom";

interface NavLinkItem {
  name: string;
  path: string;
}

interface NavLinksProps {
  navItems: NavLinkItem[];
}

const NavLinks = ({ navItems }: NavLinksProps) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left ${
            location.pathname === item.path ? "text-primary after:scale-x-100" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;


import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import NavbarLogo from "./navbar/NavbarLogo";
import NavLinks from "./navbar/NavLinks";
import CategoryDropdown from "./navbar/CategoryDropdown";
import NavbarActions from "./navbar/NavbarActions";
import MobileMenu from "./navbar/MobileMenu";

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 w-full border-b transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm" 
        : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Nav Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <NavbarLogo />
          
          {/* Desktop Navigation */}
          <NavLinks navItems={navItems} />
          
          {/* Categories Dropdown */}
          <div className="hidden md:flex">
            <CategoryDropdown />
          </div>
        </div>
        
        {/* Right Side Items */}
        <div className="flex items-center gap-3">
          <NavbarActions isMobile={isMobile} />
          
          {/* Mobile Menu Button and Content */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

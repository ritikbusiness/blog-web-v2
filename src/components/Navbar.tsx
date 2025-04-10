
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";
import { Menu, X, Search, Shuffle } from "lucide-react";
import { categories } from "@/data/mockData";
import GlobalSearch from "./GlobalSearch";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getRandomPost = () => {
    // Navigate to a random blog post
    navigate("/posts?random=true");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm" 
        : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Nav Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold">Thoughtscape</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-md font-medium px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === item.path ? "text-primary bg-secondary/50" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Categories Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2">Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/categories/${category.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-primary">{category.icon}</span>
                            <div className="text-sm font-medium leading-none">
                              {category.name}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            {category.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        
        {/* Right Side Items */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <GlobalSearch />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full transition-transform duration-300 hover:scale-105"
            onClick={getRandomPost}
            title="Discover Random Post"
          >
            <Shuffle className="h-4 w-4" />
            <span className="sr-only">Random Post</span>
          </Button>
          
          <ThemeToggle />
          
          {isAuthenticated ? (
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex hover:bg-accent transition-colors duration-300"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : null}
          
          {user?.isAdmin && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden md:inline-flex hover:bg-accent transition-colors duration-300"
            >
              <Link to="/admin/dashboard">Admin</Link>
            </Button>
          )}
          
          {/* Mobile Menu Button */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 transform bg-background md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <span className="font-serif text-xl font-bold">Thoughtscape</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="px-6 py-8 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="mb-6">
            <GlobalSearch />
          </div>
          
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="py-4 border-t border-b my-4">
              <h3 className="font-medium text-lg mb-3">Categories</h3>
              <div className="grid grid-cols-1 gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/categories/${category.slug}`}
                    className="flex items-center text-md py-2 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3 text-primary">{category.icon}</span>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {user?.isAdmin && (
              <Link 
                to="/admin/dashboard"
                className="flex items-center text-md font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
            
            {isAuthenticated && (
              <Button 
                variant="ghost"
                className="justify-start p-0 mt-2 text-md hover:text-primary transition-colors"
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
              >
                Logout
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "./ui/input";
import { Menu, X, Search, Shuffle } from "lucide-react";
import { categories } from "@/data/mockData";
import GlobalSearch from "./GlobalSearch";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const getRandomPost = () => {
    // Navigate to a random blog post
    navigate("/posts?random=true");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold">Thoughtscape</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-md font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
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
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <GlobalSearch />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full"
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
              className="hidden md:inline-flex"
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
              className="hidden md:inline-flex"
            >
              <Link to="/admin/dashboard">Admin</Link>
            </Button>
          )}
          
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container md:hidden py-4 animate-fade-in">
          <div className="mb-4">
            <GlobalSearch />
          </div>
          
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="grid grid-cols-1 gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/categories/${category.slug}`}
                    className="flex items-center text-sm py-1 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {user?.isAdmin && (
              <Link 
                to="/admin/dashboard"
                className="mt-2 flex items-center text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
            
            {isAuthenticated && (
              <Button 
                variant="ghost"
                className="justify-start p-0 mt-2"
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
      )}
    </header>
  );
};

export default Navbar;

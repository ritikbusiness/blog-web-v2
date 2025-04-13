
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import { categories } from "@/data/mockData";
import GlobalSearch from "@/components/GlobalSearch";
import { useAuth } from "@/contexts/AuthContext";

interface MobileMenuProps {
  navItems: Array<{ name: string; path: string }>;
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>
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
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 transform bg-background/95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <span className="text-primary">
              <BookOpen className="h-5 w-5" />
            </span>
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
    </>
  );
};

export default MobileMenu;

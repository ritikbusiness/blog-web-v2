
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Shuffle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import GlobalSearch from "@/components/GlobalSearch";

interface NavbarActionsProps {
  isMobile: boolean;
}

const NavbarActions = ({ isMobile }: NavbarActionsProps) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const getRandomPost = () => {
    // Navigate to a random blog post
    navigate("/posts?random=true");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center gap-3">
      <div className="hidden md:flex">
        <GlobalSearch />
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 rounded-full transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground"
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
    </div>
  );
};

export default NavbarActions;

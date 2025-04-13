
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="text-primary">
        <BookOpen className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span className="font-serif text-2xl font-bold">Thoughtscape</span>
    </Link>
  );
};

export default NavbarLogo;

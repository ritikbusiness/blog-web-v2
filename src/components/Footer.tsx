
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    
    if (emailInput.value) {
      toast.success("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    }
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Thoughtscape</h3>
            <p className="text-sm text-muted-foreground">
              Personal blog sharing thoughts, stories, and ideas about technology,
              life lessons, love & emotions, and career.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/technology" className="hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/categories/life-lessons" className="hover:text-primary">
                  Life Lessons
                </Link>
              </li>
              <li>
                <Link to="/categories/love-emotions" className="hover:text-primary">
                  Love & Emotions
                </Link>
              </li>
              <li>
                <Link to="/categories/career" className="hover:text-primary">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest posts and updates.
            </p>
            <form className="flex space-x-2" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                className="max-w-[220px]"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-sm md:flex-row md:space-y-0">
          <p>© {new Date().getFullYear()} Thoughtscape. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

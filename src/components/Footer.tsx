import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Github, Rss, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { categories } from "@/data/mockData";

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
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/", label: "YouTube" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/", label: "Instagram" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@thoughtscape.com", label: "Email" },
    { icon: <Rss className="h-5 w-5" />, href: "/rss.xml", label: "RSS Feed" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Thoughtscape</h3>
            <p className="text-sm text-muted-foreground">
              Personal blog sharing insights on tech, cloud computing, poetry, and motivation
              from the perspective of a Computer Engineer and creative writer.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.slice(0, 5).map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/posts" className="hover:text-primary transition-colors">
                  All Posts
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link to={`/categories/${category.slug}`} className="hover:text-primary transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest posts and updates directly in your inbox.
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
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-sm md:flex-row md:space-y-0">
          <p>© {new Date().getFullYear()} Thoughtscape. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

interface AuthorBioProps {
  compact?: boolean;
}

const AuthorBio = ({ compact = false }: AuthorBioProps) => {
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, href: "#", label: "Email" },
  ];

  return compact ? (
    <div className="flex items-center gap-4">
      <Avatar className="h-10 w-10">
        <AvatarImage src="/author-ritik-shah.png" alt="Ritik Shah" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">Ritik Shah</p>
        <p className="text-xs text-muted-foreground">Blog Author</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row gap-6 items-start p-6 bg-accent/50 rounded-lg">
      <Avatar className="h-24 w-24">
        <AvatarImage src="/author-ritik-shah.png" alt="Ritik Shah" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">Ritik Shah</h3>
          <p className="text-sm text-muted-foreground">Blog Author</p>
        </div>
        <p>
          Hello there! I'm passionate about sharing my thoughts and experiences on technology, 
          life lessons, relationships, and career growth. Through this blog, I hope to connect 
          with like-minded individuals and inspire meaningful conversations.
        </p>
        <div className="flex gap-2">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              aria-label={link.label}
            >
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                {link.icon}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;


import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

const About = () => {
  useEffect(() => {
    document.title = "About Me | Thoughtscape";
  }, []);

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-accent via-background to-background">
        <div className="container max-w-3xl text-center">
          <h1 className="mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Learn more about the person behind the blog and my journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
            <div className="w-full md:w-1/3">
              <img 
                src="/placeholder.svg" 
                alt="Author" 
                className="rounded-lg w-full"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h2 className="text-3xl font-serif">Your Name</h2>
              <p className="text-muted-foreground">Writer & Content Creator</p>
              
              <div className="flex space-x-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    aria-label={link.label}
                    className="hover:text-primary"
                  >
                    <Button variant="outline" size="icon" className="rounded-full">
                      {link.icon}
                    </Button>
                  </a>
                ))}
              </div>
              
              <p>
                Hello! I'm a passionate writer and storyteller who loves exploring the intersection 
                of technology, personal development, and human emotions. Through my blog, I share insights, 
                experiences, and lessons learned throughout my journey.
              </p>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">My Story</h3>
              <p className="mb-4">
                I started this blog as a way to document my thoughts and share ideas that I found valuable. 
                What began as a personal project has grown into a community of like-minded individuals 
                who enjoy thoughtful discussions on topics ranging from cutting-edge technology to the 
                nuances of human relationships.
              </p>
              <p>
                With a background in [your background], I bring a unique perspective to the subjects I 
                write about. I believe in the power of storytelling to connect people, inspire change, 
                and foster understanding across different viewpoints.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">What I Write About</h3>
              <p className="mb-4">
                My content typically falls into four main categories:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Technology</strong> - Exploring innovations, digital trends, and how tech shapes our future
                </li>
                <li>
                  <strong>Life Lessons</strong> - Sharing insights from personal experiences and observations
                </li>
                <li>
                  <strong>Love & Emotions</strong> - Discussing relationships, emotional intelligence, and human connection
                </li>
                <li>
                  <strong>Career</strong> - Professional development, workplace dynamics, and finding fulfillment in work
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">My Approach</h3>
              <p>
                I strive to create content that is thoughtful, well-researched, and accessible. Whether I'm 
                breaking down complex technological concepts or exploring the subtleties of human emotions, 
                my goal is to present ideas in a way that resonates and provides value. I believe in honesty, 
                authenticity, and maintaining an open mind – qualities that I hope shine through in my writing.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">Let's Connect</h3>
              <p className="mb-6">
                I love hearing from readers and engaging in meaningful conversations. Whether you have 
                feedback, questions, or just want to say hello, feel free to reach out through social 
                media or the contact page.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">Read My Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};

export default About;

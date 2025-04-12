
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import AuthorBio from "@/components/AuthorBio";

const About = () => {
  useEffect(() => {
    // Set document title
    document.title = "About Ritik Shah | Thoughtscape";
    
    // Log component mounting for debugging
    console.log("About component mounted");
    
    return () => {
      console.log("About component unmounted");
    };
  }, []);

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ];

  // Schema data for Ritik Shah - safe string values without window object
  const personSchemaData = {
    name: "Ritik Shah",
    url: "/about",
    image: "/author-ritik-shah.png",
    jobTitle: "Computer Engineer | DevOps & Cloud Enthusiast | Motivational Writer & Poet",
    description: "Passionate about technology, personal development, and creative writing. I combine my technical expertise with a love for storytelling.",
    socialLinks: ["https://twitter.com/ritikshah", "https://linkedin.com/in/ritikshah", "https://github.com/ritikshah"]
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* SEO Schema Markup */}
      <SchemaMarkup type="person" data={personSchemaData} />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-accent via-background to-background">
        <div className="container max-w-3xl text-center">
          <h1 className="mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Learn more about my journey in technology and writing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
            <div className="w-full md:w-1/3">
              <img 
                src="/author-ritik-shah.png" 
                alt="Ritik Shah - Author" 
                className="rounded-xl w-full shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h2 className="text-3xl font-serif">Ritik Shah</h2>
              <p className="text-muted-foreground">Computer Engineer | DevOps & Cloud Enthusiast | Motivational Writer & Poet</p>
              
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
                I'm a passionate computer engineer with expertise in DevOps and cloud technologies.
                Beyond my technical background, I find joy in writing motivational content and poetry
                that connects with readers on a deeper level.
              </p>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">My Story</h3>
              <p className="mb-4">
                My journey began in the world of technology, where I developed a strong foundation in 
                computer engineering. Over the years, I've specialized in DevOps practices and cloud 
                infrastructure, helping organizations build scalable and efficient systems.
              </p>
              <p>
                Alongside my technical career, I discovered a passion for writing. What started as 
                personal reflections evolved into motivational pieces and poetry that resonated with 
                readers. Through this blog, I aim to bridge the gap between technology and human 
                experience, sharing insights that inspire and educate.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">What I Write About</h3>
              <p className="mb-4">
                My content typically falls into four main categories:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Technology</strong> - Exploring cloud technologies, DevOps best practices, and emerging tech trends
                </li>
                <li>
                  <strong>Life Lessons</strong> - Sharing insights from personal experiences and observations
                </li>
                <li>
                  <strong>Motivational Content</strong> - Encouraging personal and professional growth through inspiring stories
                </li>
                <li>
                  <strong>Poetry</strong> - Creative expressions that reflect on human emotions and experiences
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">My Approach</h3>
              <p>
                I believe in creating content that balances technical accuracy with accessibility.
                Whether I'm explaining complex cloud concepts or crafting a piece of motivational poetry,
                my goal is to connect with readers in a meaningful way. I value authenticity, continuous
                learning, and the power of words to inspire change—qualities that I hope shine through in
                my writing.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-4">Let's Connect</h3>
              <p className="mb-6">
                I love hearing from readers and engaging in meaningful conversations about technology,
                writing, or anything that sparks curiosity. Whether you have feedback, questions, or just
                want to say hello, feel free to reach out through social media or the contact page.
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

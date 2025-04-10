
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    
    if (emailInput.value) {
      toast.success("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    }
  };

  return (
    <section className="py-12 bg-accent">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4">Stay in the Loop</h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to my newsletter and get the latest posts delivered right to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              name="email"
              placeholder="Your email address" 
              className="flex-grow" 
              required 
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

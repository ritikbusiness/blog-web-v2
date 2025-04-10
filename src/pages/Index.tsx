
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shuffle } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSection from "@/components/NewsletterSection";
import AuthorBio from "@/components/AuthorBio";
import { getFeaturedPosts, getRecentPosts, categories } from "@/data/mockData";

const Index = () => {
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(6);

  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Thoughtscape | Personal Blog - Tech, DevOps, Poetry & Motivation";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Personal blog of a Computer Engineer, DevOps & Cloud Computing enthusiast sharing tech insights, code tutorials, motivational writing, and poetry.');
    
    // Add OpenGraph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Thoughtscape | Personal Tech & Poetry Blog');
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Explore tech trends, cloud computing, poetry, and motivation from a computer engineer and writer.');
  }, []);

  const getRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * recentPosts.length);
    return `/posts/${recentPosts[randomIndex].slug}`;
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-serif">
              Welcome to <span className="text-primary">Thoughtscape</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground">
              Where technology meets creativity — from Cloud Computing & DevOps to Poetry & Motivation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/categories">Explore Categories</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to={getRandomPost()}>
                  <Shuffle className="mr-2 h-4 w-4" />
                  Discover Random Post
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Featured Posts</h2>
            <Button variant="ghost" asChild>
              <Link to="/posts" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/20">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Categories</h2>
            <Button variant="ghost" asChild>
              <Link to="/categories" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 8).map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Recent Posts</h2>
            <Button variant="ghost" asChild>
              <Link to="/posts" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-12 bg-accent/10">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-serif mb-8 text-center">About the Author</h2>
          <AuthorBio />
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};

export default Index;

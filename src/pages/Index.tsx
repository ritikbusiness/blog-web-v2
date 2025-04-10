
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSection from "@/components/NewsletterSection";
import AuthorBio from "@/components/AuthorBio";
import { getFeaturedPosts, getRecentPosts, categories } from "@/data/mockData";

const Index = () => {
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(3);

  useEffect(() => {
    // Set meta tags for SEO
    document.title = "Thoughtscape | Personal Blog";
  }, []);

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-serif">Welcome to Thoughtscape</h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground">
              A personal blog sharing thoughts, stories, and ideas about technology, 
              life lessons, love & emotions, and career.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/categories">Explore Categories</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/about">About Me</Link>
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
              <Link to="/posts">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Categories</h2>
            <Button variant="ghost" asChild>
              <Link to="/categories">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
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
              <Link to="/posts">View All</Link>
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
      <section className="py-12 bg-background">
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

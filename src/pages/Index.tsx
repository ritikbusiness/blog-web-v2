
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shuffle, TrendingUp, Sparkles } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSection from "@/components/NewsletterSection";
import AuthorBio from "@/components/AuthorBio";
import { getFeaturedPosts, getRecentPosts, categories, getTrendingPosts } from "@/data/mockData";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Index = () => {
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(6);
  const trendingPosts = getTrendingPosts ? getTrendingPosts(3) : recentPosts.slice(0, 3);

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
    <div className="min-h-screen">
      {/* Hero Section with animated gradient background */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-accent/30 via-background to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Welcome to my thoughts
            </span>
            <h1 className="mb-6 font-serif animate-slide-up [animation-delay:0.2s]">
              Welcome to <span className="text-primary">Thoughtscape</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground animate-slide-up [animation-delay:0.3s] text-balance">
              Where technology meets creativity — from Cloud Computing & DevOps to Poetry & Motivation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up [animation-delay:0.4s]">
              <Button size="lg" className="rounded-full">
                <Link to="/categories">Explore Categories</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link to={getRandomPost()}>
                  <Shuffle className="mr-2 h-4 w-4" />
                  Discover Random Post
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Featured Posts</h2>
            <Button variant="ghost" asChild>
              <Link to="/posts" className="flex items-center group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <BlogCard post={post} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 rounded-full" />
              <CarouselNext className="relative static right-0 translate-y-0 rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-16 bg-accent/10">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              <h2 className="text-3xl font-serif">Trending Now</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post) => (
              <BlogCard key={post.id} post={{...post, trending: true}} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Categories</h2>
            <Button variant="ghost" asChild>
              <Link to="/categories" className="flex items-center group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="py-16 bg-accent/10">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif">Recent Posts</h2>
            <Button variant="ghost" asChild>
              <Link to="/posts" className="flex items-center group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="py-16 bg-background">
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

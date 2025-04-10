
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import NewsletterSection from "@/components/NewsletterSection";
import { posts, categories } from "@/data/mockData";
import { Post } from "@/data/mockData";

const AllPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    document.title = "All Posts | Thoughtscape";
    
    // Extract search query from URL if present
    const queryParams = new URLSearchParams(location.search);
    const queryFromUrl = queryParams.get("search");
    if (queryFromUrl) {
      setSearchQuery(queryFromUrl);
    }
  }, [location.search]);

  useEffect(() => {    
    // Filter posts based on search query, category, and tags
    const filtered = posts.filter((post) => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesCategory = selectedCategory === "all" || post.categorySlug === selectedCategory;
      
      const matchesTags = activeTags.length === 0 || 
        activeTags.every(tag => post.tags.includes(tag));
        
      return matchesSearch && matchesCategory && matchesTags;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, activeTags]);

  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  const removeTag = (tag: string) => {
    setActiveTags(activeTags.filter(t => t !== tag));
  };

  const addTag = (tag: string) => {
    if (!activeTags.includes(tag)) {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-serif">All Blog Posts</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Explore articles across technology, motivation, poetry, and more
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <div className="w-full md:w-1/3">
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </form>
            </div>
            <div className="flex gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active Tags */}
          {activeTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {activeTags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {tag}
                  <button 
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:bg-secondary-foreground/10 rounded-full"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {tag} filter</span>
                  </button>
                </Badge>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setActiveTags([])}
                className="text-xs h-7"
              >
                Clear all
              </Button>
            </div>
          )}
          
          {/* Popular Tags */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Popular Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 15).map(tag => (
                <Badge 
                  key={tag}
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary"
                  onClick={() => addTag(tag)}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-6 text-muted-foreground">
                Showing {filteredPosts.length} of {posts.length} posts
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl mb-4">No posts found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setActiveTags([]);
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};

export default AllPosts;

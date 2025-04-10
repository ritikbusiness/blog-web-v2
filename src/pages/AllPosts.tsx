
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import NewsletterSection from "@/components/NewsletterSection";
import { posts, categories } from "@/data/mockData";
import { Post } from "@/data/mockData";

const AllPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    document.title = "All Posts | Thoughtscape";
    
    // Filter posts based on search query and category
    const filtered = posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory =
        selectedCategory === "all" || post.categorySlug === selectedCategory;
        
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-serif">All Blog Posts</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Browse the complete collection of articles, stories, and insights
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full md:w-1/3">
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
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

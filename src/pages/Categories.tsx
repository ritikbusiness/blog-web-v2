
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryCard from "@/components/CategoryCard";
import BlogCard from "@/components/BlogCard";
import NewsletterSection from "@/components/NewsletterSection";
import { categories, getCategoryBySlug, getPostsByCategory } from "@/data/mockData";
import { Category, Post } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

const Categories = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (categorySlug) {
      const category = getCategoryBySlug(categorySlug);
      if (category) {
        setActiveCategory(category);
        setPosts(getPostsByCategory(categorySlug));
        document.title = `${category.name} Posts | Thoughtscape`;
      }
    } else {
      setActiveCategory(null);
      document.title = "Categories | Thoughtscape";
    }
  }, [categorySlug]);

  const handleCategoryChange = (slug: string) => {
    navigate(`/categories/${slug}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/30 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {activeCategory && (
              <Button variant="ghost" onClick={() => navigate('/categories')} className="mb-4 -ml-2 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                All Categories
              </Button>
            )}
            
            <div className="inline-flex items-center justify-center mb-2">
              {activeCategory && (
                <span className="text-4xl text-primary mr-2">{activeCategory.icon}</span>
              )}
            </div>
            
            <h1 className="mb-6 font-serif">
              {activeCategory ? activeCategory.name : "Explore Categories"}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground max-w-xl mx-auto text-balance">
              {activeCategory 
                ? activeCategory.description 
                : "Discover articles across different topics and interests"}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid or Tab Content */}
      <section className="py-12">
        <div className="container">
          {!activeCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          ) : (
            <div>
              <Tabs defaultValue={activeCategory.slug} onValueChange={handleCategoryChange} className="w-full">
                <div className="mb-8 overflow-x-auto scrollbar-hide">
                  <TabsList className="h-auto p-1 inline-flex w-auto min-w-full">
                    {categories.map((category) => (
                      <TabsTrigger key={category.slug} value={category.slug} className="flex items-center gap-2 py-2 px-4">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {categories.map((category) => (
                  <TabsContent key={category.slug} value={category.slug}>
                    {category.slug === activeCategory.slug && (
                      <>
                        {posts.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                              <BlogCard key={post.id} post={post} />
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-16 bg-secondary/20 rounded-lg">
                            <h3 className="text-xl mb-4">No posts found in this category</h3>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                              Check back soon for new content or explore other categories
                            </p>
                            <Button onClick={() => navigate("/categories")}>
                              View All Categories
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};

export default Categories;

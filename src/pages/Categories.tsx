
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryCard from "@/components/CategoryCard";
import BlogCard from "@/components/BlogCard";
import NewsletterSection from "@/components/NewsletterSection";
import { categories, getCategoryBySlug, getPostsByCategory } from "@/data/mockData";
import { Category, Post } from "@/data/mockData";

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
    <div className="min-h-screen animate-fade-in">
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-serif">
              {activeCategory ? activeCategory.name : "Categories"}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              {activeCategory 
                ? activeCategory.description 
                : "Explore posts across different topics and interests"}
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
                <TabsList className="w-full justify-start overflow-x-auto mb-8">
                  {categories.map((category) => (
                    <TabsTrigger key={category.slug} value={category.slug} className="px-6">
                      <div className="flex items-center space-x-2">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
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
                          <div className="text-center py-12">
                            <h3 className="text-xl mb-4">No posts found in this category</h3>
                            <p className="text-muted-foreground mb-6">
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

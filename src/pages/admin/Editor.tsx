
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ArrowLeft, Save, Eye, Calendar } from "lucide-react";
import { categories, getPostBySlug } from "@/data/mockData";
import { Category, Post } from "@/data/mockData";
import RichTextEditor from "@/components/admin/RichTextEditor";
import AdminGuard from "@/components/AdminGuard";

const Editor = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const [readTime, setReadTime] = useState("3 min read");
  
  const [previewMode, setPreviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load post data if editing an existing post
  useEffect(() => {
    if (postId) {
      // In a real app, fetch from API
      const post = getPostBySlug(postId);
      if (post) {
        setTitle(post.title);
        setSlug(post.slug);
        setExcerpt(post.excerpt);
        setContent(post.content || "");
        setCategory(post.category);
        setCategorySlug(post.categorySlug);
        setTags(post.tags?.join(", ") || "");
        setCoverImage(post.coverImage);
        setPublishDate(post.date);
        setReadTime(post.readTime);
      }
    }
  }, [postId]);
  
  // Auto-generate slug from title
  useEffect(() => {
    if (!postId && title) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");
      setSlug(generatedSlug);
    }
  }, [title, postId]);

  // Estimate read time based on content length
  useEffect(() => {
    if (content) {
      const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
      const minutes = Math.max(1, Math.round(wordCount / 200));
      setReadTime(`${minutes} min read`);
    }
  }, [content]);

  const handleCategoryChange = (value: string) => {
    const selectedCategory = categories.find((cat) => cat.slug === value) as Category;
    if (selectedCategory) {
      setCategory(selectedCategory.name);
      setCategorySlug(selectedCategory.slug);
    }
  };

  const handleSave = (publish: boolean = isPublished) => {
    setIsLoading(true);
    // In a real app, this would be an API call
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success(publish ? "Post published successfully" : "Draft saved successfully");
      navigate("/admin/dashboard");
    }, 1000);
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-background">
        {/* Editor Header */}
        <div className="border-b">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate("/admin/dashboard")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-xl font-bold">
                {postId ? "Edit Post" : "New Post"}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => handleSave(false)} 
                disabled={isLoading}
              >
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button 
                onClick={() => handleSave(true)} 
                disabled={isLoading}
              >
                {isLoading ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <Tabs defaultValue="edit">
            <TabsList className="mb-4">
              <TabsTrigger value="edit" onClick={() => setPreviewMode(false)}>
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" onClick={() => setPreviewMode(true)}>
                Preview
              </TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            <TabsContent value="edit">
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Post Title</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter post title"
                      className="text-lg font-medium"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Brief summary of the post (will appear in cards and search results)"
                      className="h-24"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <RichTextEditor value={content} onChange={setContent} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4 space-y-4">
                    <div>
                      <Label htmlFor="slug">URL Slug</Label>
                      <div className="flex">
                        <span className="bg-muted px-3 py-2 text-sm border-y border-l rounded-l-md">
                          /posts/
                        </span>
                        <Input
                          id="slug"
                          value={slug}
                          onChange={(e) => setSlug(e.target.value)}
                          className="rounded-l-none"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={categorySlug}
                        onValueChange={handleCategoryChange}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.slug} value={category.slug}>
                              <div className="flex items-center">
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="tech, cloud, aws"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cover-image">Cover Image URL</Label>
                      <Input
                        id="cover-image"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                      {coverImage && (
                        <div className="mt-2">
                          <img
                            src={coverImage}
                            alt="Cover preview"
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="publish-date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Schedule Publication
                      </Label>
                      <Input
                        id="publish-date"
                        type="date"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                      />
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>Estimated reading time: {readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preview">
              {previewMode && (
                <div className="border rounded-lg p-6">
                  <h1 className="text-3xl font-bold mb-4">{title}</h1>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{category || "Uncategorized"}</span>
                    <span>•</span>
                    <span>{readTime}</span>
                    <span>•</span>
                    <span>{publishDate || "Draft"}</span>
                  </div>
                  
                  {coverImage && (
                    <img 
                      src={coverImage} 
                      alt={title} 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                  )}
                  
                  <div className="mb-6 text-lg text-muted-foreground">
                    {excerpt}
                  </div>
                  
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              )}
            </TabsContent>

            <TabsContent value="seo">
              <div className="border rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">SEO Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="meta-title">Meta Title</Label>
                      <Input
                        id="meta-title"
                        defaultValue={title}
                        placeholder="SEO optimized title (keep under 60 characters)"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Recommended length: 50-60 characters
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="meta-description">Meta Description</Label>
                      <Textarea
                        id="meta-description"
                        defaultValue={excerpt}
                        placeholder="Brief description for search results"
                        className="h-24"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Recommended length: 150-160 characters
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="focus-keyword">Focus Keyword</Label>
                      <Input
                        id="focus-keyword"
                        placeholder="Main keyword for this post"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Search Preview</h3>
                  <div className="border rounded-md p-4 bg-muted/20">
                    <div className="text-primary text-lg font-medium truncate">
                      {title || "Post Title"}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      https://yourblog.com/posts/{slug || "post-url"}
                    </div>
                    <div className="text-sm mt-1 line-clamp-2">
                      {excerpt || "Your post excerpt will appear here..."}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminGuard>
  );
};

export default Editor;

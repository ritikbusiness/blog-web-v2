
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, Clock, MessageSquare, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import BlogCard from "@/components/BlogCard";
import NewsletterSection from "@/components/NewsletterSection";
import AuthorBio from "@/components/AuthorBio";
import { getPostBySlug, getRelatedPosts } from "@/data/mockData";
import { Post } from "@/data/mockData";

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug) {
      const currentPost = getPostBySlug(slug);
      if (currentPost) {
        setPost(currentPost);
        document.title = `${currentPost.title} | Thoughtscape`;
        setRelatedPosts(getRelatedPosts(currentPost.id, 3));
      }
    }

    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post?.title;
    
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text || "")}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl mb-4">Post not found</h1>
        <p className="mb-8">The post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Post Header */}
      <section className="py-8 md:py-12 bg-accent/30">
        <div className="container-tight">
          <div className="mb-6">
            <Button variant="ghost" asChild className="pl-0">
              <Link to="/" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="font-serif">{post.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="Author" />
                  <AvatarFallback>AU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Your Name</p>
                  <div className="flex text-xs text-muted-foreground space-x-3">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleShare("facebook")}>
                    <Facebook className="mr-2 h-4 w-4" /> Facebook
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("twitter")}>
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("linkedin")}>
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("copy")}>
                    Copy Link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-tight py-6">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg" 
        />
      </div>

      {/* Post Content */}
      <section className="py-8">
        <div className="container-tight">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
          
          {/* Content */}
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: `<div class="markdown">${post.content}</div>` }}
          />
          
          <Separator className="my-8" />
          
          {/* Author Bio */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">About the Author</h3>
            <AuthorBio />
          </div>
          
          {/* Comments Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              Comments <span className="ml-2 text-sm text-muted-foreground">({post.commentCount})</span>
            </h3>
            <div className="bg-secondary/30 p-6 rounded-lg text-center">
              <p className="mb-4">Comments are currently disabled.</p>
              <Button>Sign In to Comment</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-secondary/20">
          <div className="container">
            <h2 className="text-3xl font-serif mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};

export default PostDetail;

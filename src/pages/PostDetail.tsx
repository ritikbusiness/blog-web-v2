import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, Clock, MessageSquare, Share2, Facebook, Twitter, Linkedin, Eye, Bookmark, Heart } from "lucide-react";
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
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

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

  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed from liked posts" : "Added to liked posts");
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast.success(bookmarked ? "Removed from bookmarks" : "Added to bookmarks");
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
    <div className="min-h-screen">
      {/* Post Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container-tight">
          <div className="mb-6">
            <Button variant="ghost" asChild className="pl-0 group">
              <Link to="/" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="font-serif text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10 border-2 border-primary/10">
                  <AvatarImage src="/author-ritik-shah.png" alt="Ritik Shah" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Ritik Shah</p>
                  <div className="flex text-xs text-muted-foreground space-x-3">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </span>
                    {post.views !== undefined && (
                      <span className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {post.views} views
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleLike}
                  className={liked ? "text-red-500 hover:text-red-600" : ""}
                >
                  <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleBookmark}
                  className={bookmarked ? "text-primary hover:text-primary/80" : ""}
                >
                  <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
                </Button>
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
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-tight py-6">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </div>

      {/* Post Content */}
      <section className="py-8">
        <div className="container-tight">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
          
          {/* Content */}
          <div 
            className="blog-content animate-fade-in"
            dangerouslySetInnerHTML={{ __html: `<div class="markdown">${post.content}</div>` }}
          />
          
          <Separator className="my-8" />
          
          {/* Author Bio */}
          <div className="mb-8 p-6 bg-accent/10 rounded-lg">
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
        <section className="py-16 bg-accent/10">
          <div className="container">
            <h2 className="text-3xl font-serif mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

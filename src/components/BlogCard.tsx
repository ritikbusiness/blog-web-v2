
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { CalendarIcon, Clock, MessageSquare, Tag, ArrowRight, Eye } from "lucide-react";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    commentCount: number;
    slug: string;
    coverImage: string;
    tags?: string[];
    views?: number;
    trending?: boolean;
  };
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link to={`/posts/${post.slug}`} className="group">
      <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/40 ${featured ? "md:flex" : ""}`}>
        <div className={`relative ${featured ? "md:w-2/5" : ""}`}>
          <div className="overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          {post.trending && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              Trending
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
            <div className="p-4 text-white text-center w-full">
              <span className="flex items-center justify-center gap-1 text-sm font-medium">
                Read more <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
        <div className={`${featured ? "md:w-3/5" : ""} flex flex-col`}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <Badge variant="secondary" className="mb-2">
                {post.category}
              </Badge>
              <span className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
            <CardDescription className="flex items-center text-xs gap-4">
              <span className="flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {post.date}
              </span>
              <span className="flex items-center">
                <MessageSquare className="mr-1 h-3 w-3" />
                {post.commentCount}
              </span>
              {post.views !== undefined && (
                <span className="flex items-center">
                  <Eye className="mr-1 h-3 w-3" />
                  {post.views} views
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-primary-foreground bg-primary/10 px-2 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-muted-foreground">+{post.tags.length - 3} more</span>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm font-medium text-primary flex items-center transition-all group-hover:translate-x-1">
              Read more <ArrowRight className="ml-1 h-3 w-3" />
            </p>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;

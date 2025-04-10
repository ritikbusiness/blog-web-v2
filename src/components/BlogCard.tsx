
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { CalendarIcon, Clock, MessageSquare, Tag } from "lucide-react";

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
  };
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link to={`/posts/${post.slug}`}>
      <Card className={`overflow-hidden h-full card-hover ${featured ? "md:flex" : ""}`}>
        <div className={`${featured ? "md:w-2/5" : ""}`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="h-56 w-full object-cover"
            loading="lazy"
          />
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
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="flex items-center text-xs gap-4">
              <span className="flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {post.date}
              </span>
              <span className="flex items-center">
                <MessageSquare className="mr-1 h-3 w-3" />
                {post.commentCount}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
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
            <p className="text-sm font-medium text-primary flex items-center">
              Read more <ArrowRight className="ml-1 h-3 w-3" />
            </p>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;

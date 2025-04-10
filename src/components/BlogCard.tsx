
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { CalendarIcon, Clock, MessageSquare } from "lucide-react";

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
          />
        </div>
        <div className={`${featured ? "md:w-3/5" : ""} flex flex-col`}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <Badge variant="secondary" className="mb-2">
                {post.category}
              </Badge>
            </div>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="flex items-center text-xs gap-4">
              <span className="flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime}
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
          </CardContent>
          <CardFooter>
            <p className="text-sm font-medium text-primary">Read more</p>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;

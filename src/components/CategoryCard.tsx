
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import React from "react";

interface CategoryCardProps {
  category: {
    name: string;
    description: string;
    slug: string;
    icon: React.ReactNode;
    count: number;
    keywords?: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.slug}`} className="group">
      <Card className="h-full card-hover border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="relative">
          <div className="flex justify-between items-center">
            <span className="text-primary text-2xl transition-transform duration-300 group-hover:scale-110">{category.icon}</span>
            <span className="text-xs font-medium bg-secondary text-secondary-foreground rounded-full px-2 py-1">
              {category.count} posts
            </span>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-primary flex items-center">
              Explore category <span className="transform transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
            </p>
            {category.keywords && (
              <p className="text-xs text-muted-foreground italic">
                Keywords: {category.keywords}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;

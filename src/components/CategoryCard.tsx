
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
    <Link to={`/categories/${category.slug}`}>
      <Card className="h-full card-hover">
        <CardHeader>
          <div className="flex justify-between items-center">
            <span className="text-primary text-2xl">{category.icon}</span>
            <span className="text-sm font-medium bg-secondary text-secondary-foreground rounded-full px-2">
              {category.count} posts
            </span>
          </div>
          <CardTitle>{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-primary">Explore category →</p>
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

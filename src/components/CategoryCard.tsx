
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
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.slug}`}>
      <Card className="h-full card-hover">
        <CardHeader>
          <div className="flex justify-between items-center">
            <span className="text-primary">{category.icon}</span>
            <span className="text-sm font-medium bg-secondary text-secondary-foreground rounded-full px-2">
              {category.count} posts
            </span>
          </div>
          <CardTitle>{category.name}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-primary">Explore category →</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;


import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { categories } from "@/data/mockData";

const CategoryDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-3 py-2 text-sm">Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/categories/${category.slug}`}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{category.icon}</span>
                    <div className="text-sm font-medium leading-none">
                      {category.name}
                    </div>
                  </div>
                  <p className="line-clamp-2 text-xs text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryDropdown;

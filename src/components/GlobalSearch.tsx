
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { posts, categories } from "@/data/mockData";
import { Search, File, Tag, Folder } from "lucide-react";

const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (value: string) => {
    setOpen(false);
    navigate(value);
  };

  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter((post) => {
        const matchesTitle = post.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesContent = post.excerpt
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory = post.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesTags =
          post.tags &&
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          );

        return matchesTitle || matchesContent || matchesCategory || matchesTags;
      })
    : [];

  // Filter categories based on search query
  const filteredCategories = searchQuery
    ? categories.filter((category) => {
        return (
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setOpen(false);
      navigate(`/posts?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="relative w-full max-w-sm">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10"
          onFocus={() => setOpen(true)}
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1 h-7 text-xs px-2"
          onClick={() => setOpen(true)}
        >
          <span className="hidden sm:inline-flex">Search</span>
          <kbd className="ml-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </form>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search posts, categories, or tags..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {filteredPosts.length > 0 && (
            <CommandGroup heading="Posts">
              {filteredPosts.slice(0, 5).map((post) => (
                <CommandItem
                  key={post.id}
                  value={`/posts/${post.slug}`}
                  onSelect={handleSelect}
                >
                  <File className="mr-2 h-4 w-4" />
                  {post.title}
                </CommandItem>
              ))}
              {filteredPosts.length > 5 && (
                <CommandItem
                  value={`/posts?search=${encodeURIComponent(searchQuery)}`}
                  onSelect={handleSelect}
                >
                  <Search className="mr-2 h-4 w-4" />
                  View all {filteredPosts.length} results
                </CommandItem>
              )}
            </CommandGroup>
          )}
          
          {filteredCategories.length > 0 && (
            <CommandGroup heading="Categories">
              {filteredCategories.map((category) => (
                <CommandItem
                  key={category.slug}
                  value={`/categories/${category.slug}`}
                  onSelect={handleSelect}
                >
                  <Folder className="mr-2 h-4 w-4" />
                  {category.name}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          
          {searchQuery && (
            <CommandGroup heading="Actions">
              <CommandItem
                value={`/posts?search=${encodeURIComponent(searchQuery)}`}
                onSelect={handleSelect}
              >
                <Search className="mr-2 h-4 w-4" />
                Search for "{searchQuery}"
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default GlobalSearch;

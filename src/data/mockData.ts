import React from "react";
import { 
  Code, Cloud, Cpu, Heart, BookOpen, Lightbulb, 
  Briefcase, Compass, TrendingUp, Star
} from "lucide-react";

// Define interfaces for our data types
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  categorySlug: string;
  coverImage: string;
  featured: boolean;
  tags: string[];
  slug: string;
  commentCount: number;
}

export interface Category {
  name: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
  count: number;
  keywords?: string;
}

// Category data
export const categories: Category[] = [
  {
    name: "Tech Trends & Innovations",
    description: "Latest tech news, innovations, and emerging technologies.",
    slug: "tech-trends",
    icon: React.createElement(TrendingUp),
    count: 12,
    keywords: "tech trends, latest technology, innovation news"
  },
  {
    name: "Cloud Computing & DevOps",
    description: "Insights on cloud platforms, DevOps practices, and deployment strategies.",
    slug: "cloud-devops",
    icon: React.createElement(Cloud),
    count: 8,
    keywords: "cloud computing, DevOps practices, CI/CD, AWS, Kubernetes"
  },
  {
    name: "Computer Engineering",
    description: "Core computer engineering concepts, hardware insights, and projects.",
    slug: "computer-engineering",
    icon: React.createElement(Cpu),
    count: 9,
    keywords: "computer engineering basics, real-world projects, CS topics"
  },
  {
    name: "Motivation & Growth",
    description: "Personal development strategies and motivational content.",
    slug: "motivation",
    icon: React.createElement(Lightbulb),
    count: 15,
    keywords: "personal growth, motivation tips, self-improvement"
  },
  {
    name: "Poetry & Deep Thoughts",
    description: "Original poetry, quotes, and philosophical reflections.",
    slug: "poetry",
    icon: React.createElement(BookOpen),
    count: 11,
    keywords: "inspirational quotes, original poetry, emotional quotes"
  },
  {
    name: "Love & Relationships",
    description: "Thoughtful discussions on love, emotions, and relationships.",
    slug: "love-relationships",
    icon: React.createElement(Heart),
    count: 7,
    keywords: "relationship tips, love advice, emotional healing"
  },
  {
    name: "Career & Productivity",
    description: "Professional growth strategies and productivity enhancement techniques.",
    slug: "career",
    icon: React.createElement(Briefcase),
    count: 10,
    keywords: "career growth, productivity tools, time management"
  },
  {
    name: "Coding Tutorials",
    description: "Programming guides, code snippets, and developer resources.",
    slug: "coding",
    icon: React.createElement(Code),
    count: 14,
    keywords: "coding tips, programming tutorials, dev best practices"
  }
];

// Sample posts data
export const posts: Post[] = [
  {
    id: "1",
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the software development landscape.",
    content: "<p>AI is revolutionizing software development...</p>",
    date: "2024-07-15",
    readTime: "7 min",
    author: "John Doe",
    category: "Technology",
    categorySlug: "tech-trends",
    coverImage: "/placeholder.svg",
    featured: true,
    tags: ["AI", "Software Development", "Innovation"],
    slug: "future-of-ai-in-software-development",
    commentCount: 5
  },
  {
    id: "2",
    title: "Mastering DevOps: A Practical Guide",
    excerpt: "Learn essential DevOps practices to streamline your software delivery pipeline.",
    content: "<p>DevOps is crucial for modern software deployment...</p>",
    date: "2024-07-10",
    readTime: "10 min",
    author: "Jane Smith",
    category: "Cloud Computing",
    categorySlug: "cloud-devops",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["DevOps", "CI/CD", "Automation"],
    slug: "mastering-devops-practical-guide",
    commentCount: 12
  },
  {
    id: "3",
    title: "The Art of Emotional Intelligence",
    excerpt: "Discover how emotional intelligence can improve your relationships and personal growth.",
    content: "<p>Emotional intelligence is key to success...</p>",
    date: "2024-07-05",
    readTime: "6 min",
    author: "Alice Johnson",
    category: "Personal Growth",
    categorySlug: "motivation",
    coverImage: "/placeholder.svg",
    featured: true,
    tags: ["Emotional Intelligence", "Self-Improvement", "Relationships"],
    slug: "art-of-emotional-intelligence",
    commentCount: 8
  },
  {
    id: "4",
    title: "Ode to the Coding Life",
    excerpt: "A poetic reflection on the joys and challenges of being a programmer.",
    content: "<p>In lines of code, a world unfolds...</p>",
    date: "2024-06-28",
    readTime: "3 min",
    author: "Bob Williams",
    category: "Poetry",
    categorySlug: "poetry",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Poetry", "Coding", "Inspiration"],
    slug: "ode-to-coding-life",
    commentCount: 3
  },
  {
    id: "5",
    title: "Building a RESTful API with Node.js",
    excerpt: "A step-by-step tutorial on creating a robust RESTful API using Node.js and Express.",
    content: "<p>Node.js is perfect for building APIs...</p>",
    date: "2024-06-20",
    readTime: "12 min",
    author: "John Doe",
    category: "Coding Tutorials",
    categorySlug: "coding",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Node.js", "API", "RESTful"],
    slug: "building-restful-api-with-nodejs",
    commentCount: 15
  },
  {
    id: "6",
    title: "Navigating Career Changes with Confidence",
    excerpt: "Strategies for making successful career transitions and finding your true calling.",
    content: "<p>Changing careers can be daunting...</p>",
    date: "2024-06-15",
    readTime: "8 min",
    author: "Jane Smith",
    category: "Career Advice",
    categorySlug: "career",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Career", "Job Search", "Motivation"],
    slug: "navigating-career-changes-with-confidence",
    commentCount: 7
  },
  {
    id: "7",
    title: "The Power of Vulnerability in Relationships",
    excerpt: "Why being vulnerable is essential for building strong and lasting relationships.",
    content: "<p>Vulnerability fosters deeper connections...</p>",
    date: "2024-06-10",
    readTime: "7 min",
    author: "Alice Johnson",
    category: "Love & Relationships",
    categorySlug: "love-relationships",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Relationships", "Love", "Emotions"],
    slug: "power-of-vulnerability-in-relationships",
    commentCount: 10
  },
  {
    id: "8",
    title: "Understanding Computer Architecture",
    excerpt: "A deep dive into the fundamental concepts of computer architecture and system design.",
    content: "<p>Computer architecture is the backbone of computing...</p>",
    date: "2024-06-05",
    readTime: "11 min",
    author: "Bob Williams",
    category: "Computer Engineering",
    categorySlug: "computer-engineering",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Computer Architecture", "Hardware", "Engineering"],
    slug: "understanding-computer-architecture",
    commentCount: 6
  },
  {
    id: "9",
    title: "Cloud Security Best Practices",
    excerpt: "Essential security measures to protect your data and applications in the cloud.",
    content: "<p>Cloud security is a top priority...</p>",
    date: "2024-05-28",
    readTime: "9 min",
    author: "John Doe",
    category: "Cloud Computing",
    categorySlug: "cloud-devops",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Cloud Security", "AWS", "DevOps"],
    slug: "cloud-security-best-practices",
    commentCount: 14
  },
  {
    id: "10",
    title: "The Journey Within",
    excerpt: "A collection of poems exploring themes of self-discovery and inner peace.",
    content: "<p>In the quiet of the soul...</p>",
    date: "2024-05-20",
    readTime: "4 min",
    author: "Alice Johnson",
    category: "Poetry",
    categorySlug: "poetry",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Poetry", "Self-Discovery", "Inspiration"],
    slug: "journey-within",
    commentCount: 4
  },
  {
    id: "11",
    title: "Effective Time Management Techniques",
    excerpt: "Practical tips and strategies to help you manage your time more efficiently.",
    content: "<p>Time management is a crucial skill...</p>",
    date: "2024-05-15",
    readTime: "7 min",
    author: "Jane Smith",
    category: "Career Advice",
    categorySlug: "career",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Time Management", "Productivity", "Career"],
    slug: "effective-time-management-techniques",
    commentCount: 9
  },
  {
    id: "12",
    title: "The Beauty of Imperfection",
    excerpt: "An exploration of why embracing our imperfections can lead to greater happiness and fulfillment.",
    content: "<p>Imperfection is what makes us human...</p>",
    date: "2024-05-10",
    readTime: "6 min",
    author: "Bob Williams",
    category: "Personal Growth",
    categorySlug: "motivation",
    coverImage: "/placeholder.svg",
    featured: false,
    tags: ["Self-Improvement", "Motivation", "Inspiration"],
    slug: "beauty-of-imperfection",
    commentCount: 11
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getPostsByCategory = (categorySlug: string): Post[] => {
  return posts.filter((post) => post.categorySlug === categorySlug);
};

export const getPostBySlug = (slug: string): Post | null => {
  return posts.find((post) => post.slug === slug) || null;
};

export const getFeaturedPosts = (limit: number = 3): Post[] => {
  return posts.filter((post) => post.featured).slice(0, limit);
};

export const getRecentPosts = (limit: number = 3): Post[] => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): Post[] => {
  const currentPost = posts.find((post) => post.id === currentPostId);
  if (!currentPost) return [];
  
  return posts
    .filter((post) => post.id !== currentPostId && post.categorySlug === currentPost.categorySlug)
    .slice(0, limit);
};

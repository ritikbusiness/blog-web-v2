
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminGuard from "@/components/AdminGuard";

// Pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AllPosts from "@/pages/AllPosts";
import PostDetail from "@/pages/PostDetail";
import Categories from "@/pages/Categories";
import NotFound from "@/pages/NotFound";

// Admin Pages
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import Editor from "@/pages/admin/Editor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner closeButton position="top-right" />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
              <Route path="/posts" element={<Layout><AllPosts /></Layout>} />
              <Route path="/posts/:slug" element={<Layout><PostDetail /></Layout>} />
              <Route path="/categories" element={<Layout><Categories /></Layout>} />
              <Route path="/categories/:categorySlug" element={<Layout><Categories /></Layout>} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/editor" element={<Editor />} />
              <Route path="/admin/editor/:postId" element={<Editor />} />
              
              {/* 404 Route */}
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { 
  LayoutDashboard, 
  FileEdit, 
  ListFilter, 
  Settings, 
  Users, 
  LogOut, 
  Plus, 
  Eye, 
  Clock, 
  FileText 
} from "lucide-react";
import { posts } from "@/data/mockData";
import AdminGuard from "@/components/AdminGuard";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // In a real app, these would be fetched from an API
  const totalPosts = posts.length;
  const draftPosts = 3;
  const publishedPosts = totalPosts - draftPosts;
  // Fix: Handle undefined views property by using optional chaining and default of 0
  const totalViews = posts.reduce((sum, post) => sum + (post.views ?? 0), 0);

  return (
    <AdminGuard>
      <div className="min-h-screen bg-background">
        {/* Admin Header */}
        <div className="border-b">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/admin/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/admin/editor">
                  <FileEdit className="mr-2 h-4 w-4" />
                  New Post
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/admin/posts">
                  <ListFilter className="mr-2 h-4 w-4" />
                  All Posts
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/admin/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link to="/admin/comments">
                  <Users className="mr-2 h-4 w-4" />
                  Comments
                </Link>
              </Button>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalPosts}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Published</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{publishedPosts}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Drafts</CardTitle>
                    <FileEdit className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{draftPosts}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalViews}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Recent Posts</h2>
                <Button asChild>
                  <Link to="/admin/editor">
                    <Plus className="mr-2 h-4 w-4" />
                    New Post
                  </Link>
                </Button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4">Title</th>
                      <th className="text-left p-4">Category</th>
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Views</th>
                      <th className="text-right p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.slice(0, 5).map((post) => (
                      <tr key={post.id} className="border-t">
                        <td className="p-4">{post.title}</td>
                        <td className="p-4">{post.category}</td>
                        <td className="p-4">{post.date}</td>
                        <td className="p-4">{post.views ?? 0}</td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/admin/editor/${post.id}`}>
                              Edit
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
};

export default Dashboard;

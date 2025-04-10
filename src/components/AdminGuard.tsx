
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface AdminGuardProps {
  children: ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Show loading state while checking authentication
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !user.isAdmin) {
    // Redirect to login if not authenticated or not admin
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default AdminGuard;

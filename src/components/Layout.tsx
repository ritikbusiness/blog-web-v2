
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Progress } from "./ui/progress";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Progress value={progress} className="fixed top-16 left-0 right-0 z-50 h-0.5 w-full bg-transparent" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

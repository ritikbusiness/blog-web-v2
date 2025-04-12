
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Progress } from "./ui/progress";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      // Update scroll progress for the progress bar
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
      
      // Check if page is scrolled for navbar styling
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isScrolled={isScrolled} />
      <Progress 
        value={progress} 
        className="fixed top-16 left-0 right-0 z-50 h-0.5 w-full bg-transparent" 
        indicatorClassName="bg-primary transition-all duration-300 ease-in-out"
      />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

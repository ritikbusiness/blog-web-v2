
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Progress } from "./ui/progress";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    console.log("Layout mounted/updated");
    
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      } else {
        setProgress(0);
      }
      
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', updateReadingProgress);
    
    // Reset progress when route changes
    setProgress(0);
    
    // Reset scroll position on route change
    window.scrollTo(0, 0);
    
    // Initial call to set progress after mount
    setTimeout(updateReadingProgress, 100);
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, [location.pathname]);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isScrolled={isScrolled} />
      <Progress 
        value={progress} 
        className="fixed top-16 left-0 right-0 z-50 h-0.5 w-full bg-transparent" 
      />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

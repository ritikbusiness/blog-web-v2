
import { Card } from "./ui/card";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  position: "sidebar" | "above-content" | "within-content" | "below-content";
  className?: string;
}

const AdBanner = ({ position, className }: AdBannerProps) => {
  return (
    <div 
      className={cn(
        "ad-container relative overflow-hidden", 
        position === "sidebar" && "w-full h-[600px]",
        position === "above-content" && "w-full h-[250px] my-6",
        position === "within-content" && "w-full h-[280px] my-8",
        position === "below-content" && "w-full h-[250px] mt-8",
        className
      )}
    >
      <Card className="w-full h-full flex items-center justify-center bg-accent/20 border border-dashed">
        <div className="text-center p-4">
          <Info className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm font-medium">Advertisement</p>
          <p className="text-xs text-muted-foreground">Google AdSense Ready Placement</p>
        </div>
      </Card>
    </div>
  );
};

export default AdBanner;

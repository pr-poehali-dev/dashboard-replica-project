import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

type RecommendedGameProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
};

export const RecommendedGame = ({ title, subtitle, imageSrc }: RecommendedGameProps) => {
  return (
    <Card className="bg-[#512226] rounded-2xl overflow-hidden">
      <div className="flex items-center p-4">
        <div className="mr-3">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-12 h-12 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-base">{title}</h3>
          {subtitle && (
            <p className="text-xs text-gray-300">{subtitle}</p>
          )}
        </div>
        
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </Card>
  );
};

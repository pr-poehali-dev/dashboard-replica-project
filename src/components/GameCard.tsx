import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type GameCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  videoButton?: boolean;
};

export const GameCard = ({ title, description, imageSrc, tags, videoButton = false }: GameCardProps) => {
  return (
    <Card className="bg-[#512226] rounded-2xl overflow-hidden h-48 relative">
      <img 
        src={imageSrc} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-70" 
      />
      
      <div className="absolute top-3 left-3 flex gap-1">
        {/* Кнопка видео */}
        {videoButton && (
          <Button variant="ghost" className="bg-[#6D2C32]/80 hover:bg-[#6D2C32] rounded-full w-8 h-8 p-0 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M6 4L18 12L6 20V4Z" fill="white" />
            </svg>
          </Button>
        )}
        
        {/* Кнопка записи */}
        {tags.includes("record") && (
          <Button variant="ghost" className="bg-[#6D2C32]/80 hover:bg-[#6D2C32] rounded-full w-8 h-8 p-0 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="6" fill="#FF4B4B" />
            </svg>
          </Button>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        {description && <p className="text-xs text-gray-200">{description}</p>}
      </div>
    </Card>
  );
};

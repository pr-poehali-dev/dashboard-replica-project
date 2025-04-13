import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type GameCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
};

export const GameCard = ({ title, description, imageSrc, tags }: GameCardProps) => {
  return (
    <Card className="bg-[#512226] rounded-2xl overflow-hidden h-48 relative">
      <img 
        src={imageSrc} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover opacity-70" 
      />
      
      <div className="absolute top-3 left-3 flex gap-1">
        {/* Если есть видео */}
        <Badge className="bg-[#6D2C32] text-white rounded-full flex items-center p-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L18 12L6 22V2Z" fill="white" />
          </svg>
        </Badge>
        
        {/* Если есть другие метки */}
        {tags.map((tag, index) => (
          <Badge key={index} className="bg-[#6D2C32] text-white rounded-full px-2 py-1">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        {description && <p className="text-xs text-gray-200">{description}</p>}
      </div>
    </Card>
  );
};

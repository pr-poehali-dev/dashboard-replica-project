import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type LastDownloadCardProps = {
  title: string;
  category: string;
  size: string;
  time: string;
  imageSrc: string;
};

export const LastDownloadCard = ({ title, category, size, time, imageSrc }: LastDownloadCardProps) => {
  return (
    <Card className="bg-[#823C42] rounded-2xl overflow-hidden">
      <div className="flex items-center p-4">
        <div className="bg-[#FFF8E7] w-16 h-16 rounded-xl flex items-center justify-center mr-4">
          <img src={imageSrc} alt={title} className="w-12 h-12" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-base">{title}</h3>
          <Badge className="bg-[#6D2C32] text-white rounded-full text-xs">
            {category}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-right mr-4">
            <p className="text-sm text-gray-200">{time}</p>
            <p className="text-xs text-gray-300">{size}</p>
          </div>
          
          <Button variant="ghost" className="rounded-full p-2 bg-[#6D2C32]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M6 4L18 12L6 20V4Z" fill="white" />
            </svg>
          </Button>
          
          <Button variant="ghost" className="rounded-full p-2 bg-[#6D2C32]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  );
};

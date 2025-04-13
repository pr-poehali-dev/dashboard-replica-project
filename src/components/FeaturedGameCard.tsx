import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

type FeaturedGameCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  reviews: string;
};

export const FeaturedGameCard = ({ title, description, imageSrc, tags, reviews }: FeaturedGameCardProps) => {
  return (
    <Card className="w-full bg-[#823C42] rounded-3xl overflow-hidden">
      <div className="flex">
        <div className="p-6 w-1/2">
          <div className="flex gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-[#FFF8E7] text-[#823C42] rounded-full px-4 py-1">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-sm text-gray-200 mb-6">{description}</p>
          
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              <Avatar className="border-2 border-[#823C42] w-8 h-8">
                <img src="/placeholder.svg" alt="avatar" />
              </Avatar>
              <Avatar className="border-2 border-[#823C42] w-8 h-8">
                <img src="/placeholder.svg" alt="avatar" />
              </Avatar>
              <Avatar className="border-2 border-[#823C42] w-8 h-8">
                <img src="/placeholder.svg" alt="avatar" />
              </Avatar>
            </div>
            
            <Badge className="bg-[#6D2C32] text-white rounded-full flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {reviews}
            </Badge>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </Card>
  );
};

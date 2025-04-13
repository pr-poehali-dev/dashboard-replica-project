import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const FeaturedGame = () => {
  return (
    <Card className="bg-[#823C42] rounded-3xl overflow-hidden mb-6">
      <div className="relative h-[180px]">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
            className="object-cover w-full h-full" 
            alt="Valorant" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#823C42] via-[#823C42]/80 to-transparent"></div>
        <div className="relative p-6 flex flex-col h-full">
          <div className="flex gap-2 mb-3">
            <Badge className="bg-[#FFF8E7] text-[#823C42] rounded-full px-4 py-1 flex items-center text-xs">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Popular
            </Badge>
            <Badge className="bg-[#823C42] rounded-full px-2 py-1 flex items-center text-xs">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Badge>
            <Badge className="bg-[#823C42] rounded-full px-2 py-1 flex items-center text-xs">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </Badge>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Valorant</h1>
          <p className="text-xs text-gray-200 mb-auto w-1/2">
            Valorant is a multiplayer computer game developed and published by Riot Games. 
            Valorant is Riot Games' first first-person shooter game.
          </p>
          
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              <Avatar className="border-2 border-[#823C42] w-7 h-7">
                <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="avatar" />
              </Avatar>
              <Avatar className="border-2 border-[#823C42] w-7 h-7">
                <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="avatar" />
              </Avatar>
              <Avatar className="border-2 border-[#823C42] w-7 h-7">
                <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="avatar" />
              </Avatar>
            </div>
            
            <Badge className="bg-[#6D2C32] text-white rounded-full flex items-center text-xs px-2.5 py-1">
              <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              +53 Reviews
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

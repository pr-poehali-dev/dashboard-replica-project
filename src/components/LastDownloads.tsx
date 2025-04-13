import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type DownloadedGame = {
  id: number;
  title: string;
  category: string;
  image: string;
  time: string;
  size: string;
};

export const LastDownloads = () => {
  const downloads: DownloadedGame[] = [
    {
      id: 1,
      title: "FIFA 23",
      category: "Sports simulator",
      image: "https://cdn.poehali.dev/files/4f77c54e-4e17-4745-9fb9-5471fb41a0af.png",
      time: "1 hour 23 min.",
      size: "265MB of 123GB"
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Last Downloads</h2>
        <span className="text-sm text-gray-300">See More</span>
      </div>
      
      {downloads.map((game) => (
        <DownloadCard key={game.id} game={game} />
      ))}
    </div>
  );
};

const DownloadCard = ({ game }: { game: DownloadedGame }) => {
  return (
    <Card className="overflow-hidden rounded-xl">
      <div className="relative flex items-center">
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A5A] to-[#823C42]"></div>
        
        <div className="relative flex items-center w-full p-3 z-10">
          {/* Иконка игры в квадрате */}
          <div className="bg-[#FFF8E7] w-14 h-14 rounded-lg flex items-center justify-center mr-4 overflow-hidden flex-shrink-0">
            <img 
              src={game.image} 
              alt={game.title} 
              className="w-8 h-8 object-contain"
            />
          </div>
          
          {/* Название и категория */}
          <div className="flex-1">
            <h3 className="font-bold text-base text-white">{game.title}</h3>
            <Badge className="bg-[#6D2C32]/70 text-white text-[10px] px-2 py-0.5 rounded font-normal">
              {game.category}
            </Badge>
          </div>
          
          {/* Правая часть с временем и кнопками */}
          <div className="flex items-center gap-2">
            <div className="text-right mr-4">
              <p className="text-sm text-white">{game.time}</p>
              <p className="text-xs text-gray-300">{game.size}</p>
            </div>
            
            {/* Кнопка Play - ОРАНЖЕВАЯ */}
            <Button variant="ghost" className="rounded-full p-1.5 bg-[#FF5A5A] hover:bg-[#FF7A7A] min-w-[32px] min-h-[32px] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 3L19 12L5 21V3Z" fill="white" />
              </svg>
            </Button>
            
            {/* Кнопка Close - БЕЛАЯ */}
            <Button variant="ghost" className="rounded-full p-1.5 bg-white hover:bg-white/90 min-w-[32px] min-h-[32px] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#823C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6L18 18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

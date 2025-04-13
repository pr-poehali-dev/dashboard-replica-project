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
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png",
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
    <Card className="bg-[#823C42] rounded-xl overflow-hidden">
      <div className="flex items-center p-3">
        <div className="bg-[#FFF8E7] w-16 h-16 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
          <img 
            src={game.image} 
            alt={game.title} 
            className="w-10 h-10 object-contain"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-base">{game.title}</h3>
          <Badge className="bg-[#6D2C32] text-white rounded-md text-xs px-2 py-0.5">
            {game.category}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-right mr-4">
            <p className="text-sm">{game.time}</p>
            <p className="text-xs text-gray-300">{game.size}</p>
          </div>
          
          <Button variant="ghost" className="rounded-full p-2 bg-[#6D2C32]/70 hover:bg-[#6D2C32]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 3L19 12L5 21V3Z" fill="white" />
            </svg>
          </Button>
          
          <Button variant="ghost" className="rounded-full p-2 bg-[#6D2C32]/70 hover:bg-[#6D2C32]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </Button>
        </div>
      </div>
    </Card>
  );
};

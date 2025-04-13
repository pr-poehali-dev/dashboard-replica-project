import { Card } from "@/components/ui/card";

type RecommendedGame = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
};

export const RecommendedGames = () => {
  const recommendations: RecommendedGame[] = [
    {
      id: 1,
      title: "Unravel 2",
      subtitle: "Standard Edition + Starter Pass",
      image: "https://cdn.poehali.dev/files/fa7ed5a5-e96f-431b-be56-34ea8d97c105.png"
    },
    {
      id: 2,
      title: "Subway Surf",
      image: "https://cdn.poehali.dev/files/fa7ed5a5-e96f-431b-be56-34ea8d97c105.png"
    },
    {
      id: 3,
      title: "Red Dead Redemption 3",
      subtitle: "Premium Pack",
      image: "https://cdn.poehali.dev/files/fa7ed5a5-e96f-431b-be56-34ea8d97c105.png"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recommended for you</h2>
      </div>
      
      <div className="flex flex-col gap-3">
        {recommendations.map((game) => (
          <RecommendedGameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

const RecommendedGameCard = ({ game }: { game: RecommendedGame }) => {
  // В точности копирую стиль с изображения
  return (
    <div className="bg-[#512226] rounded-2xl overflow-hidden shadow-sm">
      <div className="flex items-center p-3 pr-4">
        <div className="mr-4">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-12 h-12 rounded-xl object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-white text-base">{game.title}</h3>
          {game.subtitle && (
            <p className="text-xs text-gray-300 opacity-80">{game.subtitle}</p>
          )}
        </div>
        
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2">
          <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

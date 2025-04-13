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
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png"
    },
    {
      id: 2,
      title: "Subway Surf",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png"
    },
    {
      id: 3,
      title: "Red Dead Redemption 3",
      subtitle: "Premium Pack",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png"
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
  return (
    <Card className="bg-[#512226] rounded-xl overflow-hidden">
      <div className="flex items-center p-3">
        <div className="mr-3">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-10 h-10 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-sm">{game.title}</h3>
          {game.subtitle && <p className="text-xs text-gray-300">{game.subtitle}</p>}
        </div>
        
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2">
          <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Card>
  );
};

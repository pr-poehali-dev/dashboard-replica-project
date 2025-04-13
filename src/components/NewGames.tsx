import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Game = {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  hasVideoButton?: boolean;
};

export const NewGames = () => {
  const games: Game[] = [
    {
      id: 1,
      title: "Uncharted 4",
      description: "is the sequel to Uncharted 3: Drake's Deception and the final installment of Nathan Drake's adventures.",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png",
      hasVideoButton: true
    },
    {
      id: 2,
      title: "Dishonored:",
      subtitle: "Standard Edition",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png",
      hasVideoButton: false
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Games</h2>
        <span className="text-sm text-gray-300">See More</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 relative">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        
        {/* "Next" кнопка */}
        <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card className="bg-[#512226] rounded-2xl overflow-hidden h-48 relative">
      <img 
        src={game.image} 
        alt={game.title} 
        className="absolute inset-0 w-full h-full object-cover opacity-80" 
      />
      
      {game.hasVideoButton && (
        <div className="absolute top-3 left-3 flex gap-1">
          <Button variant="ghost" className="bg-[#6D2C32]/70 hover:bg-[#6D2C32] rounded-full w-8 h-8 p-0 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 3L19 12L5 21V3Z" fill="white" />
            </svg>
          </Button>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-bold mb-1">{game.title}</h3>
        {game.subtitle && <p className="text-sm text-gray-200">{game.subtitle}</p>}
        {game.description && <p className="text-xs text-gray-200">{game.description}</p>}
      </div>
    </Card>
  );
};

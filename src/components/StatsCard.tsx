import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

type GameStat = {
  game: string;
  hours: string;
  icon: string;
  color: string;
};

type StatsCardProps = {
  totalHours: string;
  gameStats: GameStat[];
};

export const StatsCard = ({ totalHours, gameStats }: StatsCardProps) => {
  return (
    <Card className="bg-[#512226] rounded-3xl p-6 h-[280px]">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-300 mb-2">Total hours</p>
          <div className="relative">
            {/* Внешний круг с градиентом */}
            <div className="w-36 h-36 rounded-full relative">
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(
                  #ED3E48 0deg, 
                  #ED3E48 70deg, 
                  #E6DB74 70deg, 
                  #E6DB74 220deg, 
                  #7F72EA 220deg, 
                  #7F72EA 360deg
                )`
              }}></div>
              
              {/* Внутренний круг для контента */}
              <div className="absolute inset-2 bg-[#512226] rounded-full flex items-center justify-center">
                <p className="text-3xl font-bold">{totalHours}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full grid grid-cols-3 gap-4">
          {gameStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar className="w-12 h-12 mb-2 rounded-full" style={{ backgroundColor: stat.color }}>
                <img src={stat.icon} alt={stat.game} className="w-7 h-7" />
              </Avatar>
              <p className="text-sm font-medium">{stat.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

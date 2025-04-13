import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

type GameStat = {
  game: string;
  hours: string;
  icon: string;
};

type StatsCardProps = {
  totalHours: string;
  gameStats: GameStat[];
};

export const StatsCard = ({ totalHours, gameStats }: StatsCardProps) => {
  return (
    <Card className="bg-[#512226] rounded-3xl p-6 h-full">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-300 mb-2">Total hours</p>
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#E17070] via-[#F5C567] to-[#9872E8] p-1 flex items-center justify-center">
              <div className="bg-[#512226] rounded-full w-28 h-28 flex items-center justify-center">
                <p className="text-2xl font-bold">{totalHours}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full grid grid-cols-3 gap-4">
          {gameStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar className="w-12 h-12 mb-2 bg-[#6D2C32]">
                <img src={stat.icon} alt={stat.game} />
              </Avatar>
              <p className="text-sm font-medium">{stat.hours}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

import { Card } from "@/components/ui/card";

type GameStat = {
  id: number;
  name: string;
  hours: string;
  image: string;
  color: string;
};

export const UserStatistics = () => {
  const stats: GameStat[] = [
    {
      id: 1,
      name: "Dota 2",
      hours: "2,340h",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png",
      color: "#ED3E48"
    },
    {
      id: 2,
      name: "CS:GO",
      hours: "5,420h",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png",
      color: "#E6DB74"
    },
    {
      id: 3,
      name: "Warcraft",
      hours: "4,580h",
      image: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png",
      color: "#7F72EA"
    }
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Statistic</h2>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <Card className="bg-[#512226] rounded-3xl p-5 flex flex-col items-center">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-300 mb-2">Total hours</p>
          <div className="relative w-36 h-36">
            {/* Внешний градиентный круг */}
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
            
            {/* Внутренний круг */}
            <div className="absolute inset-2 bg-[#512226] rounded-full flex items-center justify-center">
              <p className="text-3xl font-bold">12,340h</p>
            </div>
          </div>
        </div>
        
        <div className="w-full grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <GameStatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </Card>
    </div>
  );
};

const GameStatItem = ({ stat }: { stat: GameStat }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: stat.color }}>
        <img 
          src={stat.image} 
          alt={stat.name} 
          className="w-8 h-8 object-contain"
        />
      </div>
      <p className="text-sm font-medium">{stat.hours}</p>
    </div>
  );
};

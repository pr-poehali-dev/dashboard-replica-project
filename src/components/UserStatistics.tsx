import React from "react";

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
      image: "https://cdn.poehali.dev/files/aa3022a4-fe01-4f57-be7d-bd854b127897.png",
      color: "#ED3E48"
    },
    {
      id: 2,
      name: "CS:GO",
      hours: "5,420h",
      image: "https://cdn.poehali.dev/files/aa3022a4-fe01-4f57-be7d-bd854b127897.png",
      color: "#E6DB74"
    },
    {
      id: 3,
      name: "Warcraft",
      hours: "4,580h",
      image: "https://cdn.poehali.dev/files/aa3022a4-fe01-4f57-be7d-bd854b127897.png",
      color: "#7F72EA"
    }
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Your Statistic</h2>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Карточка со статистикой без обводки, просто с фоном */}
      <div className="bg-[#512226] rounded-2xl p-5 flex flex-col items-center">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-300 mb-2">Total hours</p>
          
          {/* Сложный круговой элемент */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Основа круга - градиент с разной толщиной */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 120 120">
                <defs>
                  {/* Градиенты для разных секций */}
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ED3E48" />
                    <stop offset="100%" stopColor="#FF6B6B" />
                  </linearGradient>
                  <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E6DB74" />
                    <stop offset="100%" stopColor="#F5E98D" />
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7F72EA" />
                    <stop offset="100%" stopColor="#A397FF" />
                  </linearGradient>
                </defs>
                
                {/* Красная секция (19.5% времени) */}
                <path 
                  d="M60,60 L60,18 A42,42 0 0,1 88,38 Z" 
                  fill="url(#redGradient)" 
                />
                
                {/* Желтая секция (44%) */}
                <path 
                  d="M60,60 L88,38 A42,42 0 0,1 42,96 Z" 
                  fill="url(#yellowGradient)" 
                />
                
                {/* Фиолетовая секция (36.5%) */}
                <path 
                  d="M60,60 L42,96 A42,42 0 0,1 60,18 Z" 
                  fill="url(#purpleGradient)" 
                />
                
                {/* Внутренний круг темного фона */}
                <circle cx="60" cy="60" r="30" fill="#512226" />
              </svg>
            </div>
            
            {/* Центральный текст */}
            <div className="z-10 text-center">
              <p className="text-3xl font-bold text-white">12,340h</p>
            </div>
          </div>
        </div>
        
        {/* Иконки с часами */}
        <div className="w-full grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <GameStatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GameStatItem = ({ stat }: { stat: GameStat }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Круглая цветная иконка без обводки */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1.5" style={{ backgroundColor: stat.color }}>
        <img 
          src={stat.image} 
          alt={stat.name} 
          className="w-8 h-8 object-contain"
        />
      </div>
      <p className="text-sm font-medium text-white">{stat.hours}</p>
    </div>
  );
};

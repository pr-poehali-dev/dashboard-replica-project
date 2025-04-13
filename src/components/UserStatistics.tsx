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
          
          {/* Прямая вставка круга с изображения */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Изображение круга напрямую с референса */}
            <img 
              src="https://cdn.poehali.dev/files/aa3022a4-fe01-4f57-be7d-bd854b127897.png" 
              alt="Hours circle" 
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            {/* Центральный текст поверх изображения */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-3xl font-bold text-white z-10">12,340h</p>
            </div>
          </div>
        </div>
        
        {/* Иконки с часами */}
        <div className="w-full grid grid-cols-3 gap-4 mt-2">
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
      {/* Круглая цветная иконка без обводки - прямо с изображения */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1.5" style={{ backgroundColor: stat.color }}>
        <img 
          src={stat.image} 
          alt={stat.name} 
          className="w-7 h-7 object-contain"
        />
      </div>
      <p className="text-sm font-medium text-white">{stat.hours}</p>
    </div>
  );
};

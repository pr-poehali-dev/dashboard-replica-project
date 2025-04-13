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

  // Ссылка на вырезанный круг
  const circleImageUrl = "https://cdn.poehali.dev/files/aa3022a4-fe01-4f57-be7d-bd854b127897.png";

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Your Statistic</h2>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Карточка статистики */}
      <div className="bg-[#512226] rounded-2xl p-5 flex flex-col items-center">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-300 mb-2">Total hours</p>
          
          {/* Контейнер для круга и текста */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* CSS-маска с вырезанным кругом через background-image */}
            <div 
              className="absolute inset-0 w-full h-full" 
              style={{
                backgroundImage: `url(${circleImageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                // Используем CSS clip-path для вырезания только круга из изображения
                clipPath: 'circle(36% at center)',
                // Добавляем фильтр для улучшения яркости и контраста
                filter: 'brightness(1.05) contrast(1.1)'
              }}
            />
            
            {/* Центральный темный круг */}
            <div className="absolute inset-7 bg-[#512226] rounded-full"></div>
            
            {/* Текст с часами */}
            <p className="text-3xl font-bold text-white relative z-10">12,340h</p>
          </div>
        </div>
        
        {/* Иконки игр с часами */}
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
      {/* Круглая цветная иконка */}
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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { GameCard } from "@/components/GameCard";
import { FeaturedGameCard } from "@/components/FeaturedGameCard";
import { StatsCard } from "@/components/StatsCard";
import { LastDownloadCard } from "@/components/LastDownloadCard";
import { Sidebar } from "@/components/Sidebar";
import { GameChat } from "@/components/GameChat";
import { Search } from "lucide-react";
import { RecommendedGame } from "@/components/RecommendedGame";

const Dashboard = () => {
  const [username, setUsername] = useState("NIKITIN");
  
  // Изображения для игр
  const valorantImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const unravelImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const subwayImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const rdrImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const unchartedImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const dishonoredImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const fifaImage = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  
  // Иконки для статистики
  const dotaIcon = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const csgoIcon = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  const warcraftIcon = "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png";
  
  // Время дня для приветствия
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Доброе утро";
    if (hour < 18) return "Добрый день";
    return "Добрый вечер";
  };

  return (
    <div className="flex h-screen bg-[#6D2C32] text-white overflow-hidden">
      {/* Левая боковая панель */}
      <Sidebar />
      
      {/* Основной контент */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Верхняя навигация */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl">
            {getGreeting()}, <span className="font-bold">{username}</span>
          </div>
          
          {/* Поисковая строка */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#5A2329] rounded-full pl-10 pr-4 py-2 w-64 text-sm focus:outline-none"
            />
          </div>
          
          {/* Иконки и аватар пользователя */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="rounded-full p-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H21V21H3V3Z" className="stroke-white fill-none" strokeWidth="2" />
                <path d="M9 8L15 12L9 16V8Z" fill="white" />
              </svg>
            </Button>
            <Button variant="ghost" className="rounded-full p-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="8" r="4" fill="#FF4B4B" />
              </svg>
            </Button>
            <Avatar className="h-10 w-10 border-2 border-white">
              <img src="https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" alt="user avatar" />
            </Avatar>
          </div>
        </div>
        
        {/* Основная сетка контента: 3 колонки */}
        <div className="grid grid-cols-3 gap-6">
          {/* Левая часть (2 колонки) */}
          <div className="col-span-2">
            {/* Секция с популярной игрой - Valorant */}
            <FeaturedGameCard 
              title="Valorant"
              description="Valorant is a multiplayer computer game developed and published by Riot Games. Valorant is Riot Games' first first-person shooter game."
              imageSrc={valorantImage}
              tags={["Popular"]}
              reviews={"+53 Reviews"}
            />
            
            {/* Секция New Games */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">New Games</h2>
                <Button variant="link" className="text-white">See More</Button>
              </div>
              
              {/* Карточки с новыми играми */}
              <div className="grid grid-cols-2 gap-4 relative">
                <GameCard 
                  title="Uncharted 4" 
                  description="is the sequel to Uncharted 3: Drake's Deception and the final installment of Nathan Drake's adventures."
                  imageSrc={unchartedImage}
                  tags={["video"]}
                  videoButton={true}
                />
                <GameCard 
                  title="Dishonored: Standard Edition" 
                  description=""
                  imageSrc={dishonoredImage}
                  tags={[]}
                  videoButton={false}
                />
                
                {/* Кнопка "Далее" */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                  <Button variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20 w-12 h-12 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M9 4L16 12L9 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Рекомендуемые игры */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recommended for you</h2>
                <Button variant="link" className="text-white">See More</Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <RecommendedGame
                  title="Unravel 2"
                  subtitle="Standard Edition + Starter Pass"
                  imageSrc={unravelImage}
                />
                <RecommendedGame
                  title="Subway Surf"
                  subtitle=""
                  imageSrc={subwayImage}
                />
                <RecommendedGame
                  title="Red Dead Redemption 3"
                  subtitle="Premium Pack"
                  imageSrc={rdrImage}
                />
              </div>
            </div>
            
            {/* Секция Last Downloads */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Last Downloads</h2>
                <Button variant="link" className="text-white">See More</Button>
              </div>
              
              <LastDownloadCard 
                title="FIFA 23"
                category="Sports simulator"
                size="265MB of 123GB"
                time="1 hour 23 min."
                imageSrc={fifaImage}
              />
            </div>
          </div>
          
          {/* Правая часть (1 колонка) - Статистика пользователя */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Statistic</h2>
              <Button variant="ghost" className="p-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
            <StatsCard totalHours="12,340h" gameStats={[
              { game: "Dota 2", hours: "2,340h", icon: dotaIcon, color: "#ED3E48" },
              { game: "CS:GO", hours: "5,420h", icon: csgoIcon, color: "#E6DB74" },
              { game: "Warcraft", hours: "4,580h", icon: warcraftIcon, color: "#7F72EA" }
            ]} />
          </div>
        </div>
      </div>
      
      {/* Правая боковая панель - онлайн друзья */}
      <GameChat />
    </div>
  );
};

export default Dashboard;
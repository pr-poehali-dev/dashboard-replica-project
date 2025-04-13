import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";
import { GameCard } from "@/components/GameCard";
import { FeaturedGameCard } from "@/components/FeaturedGameCard";
import { StatsCard } from "@/components/StatsCard";
import { LastDownloadCard } from "@/components/LastDownloadCard";
import { Sidebar } from "@/components/Sidebar";
import { GameChat } from "@/components/GameChat";
import { Search } from "lucide-react";

const Dashboard = () => {
  const [username, setUsername] = useState("NIKITIN");
  
  // Время дня для приветствия
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Доброе утро";
    if (hour < 18) return "Добрый день";
    return "Добрый вечер";
  };

  return (
    <div className="flex h-screen bg-[#6D2C32] text-white">
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L18 12L6 22V2Z" fill="white" />
              </svg>
            </Button>
            <Button variant="ghost" className="rounded-full p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Avatar className="h-10 w-10 border-2 border-white">
              <img src="/placeholder.svg" alt="user avatar" />
            </Avatar>
          </div>
        </div>
        
        {/* Секция с популярной игрой */}
        <FeaturedGameCard 
          title="Valorant"
          description="Valorant is a multiplayer computer game developed and published by Riot Games. Valorant is Riot Games' first first-person shooter game."
          imageSrc="/placeholder.svg"
          tags={["Popular"]}
          reviews={"+53 Reviews"}
        />
        
        {/* Секция New Games и Your Statistic */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">New Games</h2>
              <Button variant="link" className="text-white">See More</Button>
            </div>
            
            {/* Карусель с новыми играми */}
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="basis-1/2">
                  <GameCard 
                    title="Uncharted 4" 
                    description="is the sequel to Uncharted 3: Drake's Deception and the final installment of Nathan Drake's adventures."
                    imageSrc="/placeholder.svg"
                    tags={[]}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <GameCard 
                    title="Dishonored: Standard Edition" 
                    description=""
                    imageSrc="/placeholder.svg"
                    tags={[]}
                  />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <GameCard 
                    title="Elden Ring" 
                    description=""
                    imageSrc="/placeholder.svg"
                    tags={[]}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full" />
            </Carousel>
          </div>
          
          {/* Статистика пользователя */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Statistic</h2>
              <Button variant="ghost" className="p-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
            <StatsCard totalHours="12,340h" gameStats={[
              { game: "Dota 2", hours: "2,340h", icon: "/placeholder.svg" },
              { game: "CS:GO", hours: "5,420h", icon: "/placeholder.svg" },
              { game: "Warcraft", hours: "4,580h", icon: "/placeholder.svg" }
            ]} />
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
            imageSrc="/placeholder.svg"
          />
        </div>
      </div>
      
      {/* Правая боковая панель - онлайн друзья */}
      <GameChat />
    </div>
  );
};

export default Dashboard;
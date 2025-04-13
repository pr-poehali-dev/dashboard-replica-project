import { FeaturedGame } from "@/components/FeaturedGame";
import { LastDownloads } from "@/components/LastDownloads";
import { LeftSidebar } from "@/components/LeftSidebar";
import { MainNav } from "@/components/MainNav";
import { NewGames } from "@/components/NewGames";
import { RecommendedGames } from "@/components/RecommendedGames";
import { RightSidebar } from "@/components/RightSidebar";
import { UserStatistics } from "@/components/UserStatistics";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#6D2C32] text-white overflow-hidden">
      {/* Левая боковая панель */}
      <LeftSidebar />
      
      {/* Основной контент */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Верхняя навигация */}
        <MainNav />
        
        {/* Основное содержимое */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Колонка 1-2: Valorant и New Games */}
          <div className="col-span-2">
            {/* Valorant */}
            <FeaturedGame />
            
            {/* New Games */}
            <NewGames />
            
            {/* Last Downloads */}
            <LastDownloads />
          </div>
          
          {/* Колонка 3: Your Statistic и Recommended */}
          <div className="col-span-1">
            {/* Your Statistic */}
            <UserStatistics />
            
            {/* Recommended for you */}
            <RecommendedGames />
          </div>
        </div>
      </div>
      
      {/* Правая боковая панель - онлайн друзья */}
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, User, Settings, MessageCircle, Plus } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-16 bg-[#441C1F] flex flex-col items-center py-6 overflow-hidden">
      {/* Логотип */}
      <Link to="/" className="mb-8">
        <div className="w-10 h-10 bg-[#823C42] rounded-lg flex items-center justify-center text-white font-bold">
          N
        </div>
      </Link>
      
      {/* Навигационные элементы */}
      <nav className="flex flex-col gap-6 items-center flex-1">
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-[#6D2C32]">
          <Home className="w-5 h-5 text-[#FF6B6B]" />
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7C23 5.89543 22.1046 5 21 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10C7.55228 10 8 9.55228 8 9C8 8.44772 7.55228 8 7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10Z" fill="white"/>
            <path d="M17 10C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10Z" fill="white"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <Settings className="w-5 h-5 text-white" />
        </Button>
      </nav>
      
      {/* Кнопка добавления */}
      <div className="mt-6">
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-full bg-[#6D2C32] flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

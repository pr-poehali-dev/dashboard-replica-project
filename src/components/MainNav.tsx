import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const MainNav = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-xl text-gray-300">
        Good evening, <span className="font-bold text-white">NIKITIN</span>
      </div>
      
      {/* Поисковая строка */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#5A2329] rounded-full pl-10 pr-4 py-2 w-64 text-sm focus:outline-none"
        />
      </div>
      
      {/* Иконки и аватар пользователя */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="rounded-full p-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L21 21M3 21L21 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 8L16 12L12 16L8 12L12 8Z" fill="white" />
          </svg>
        </Button>
        <Button variant="ghost" className="rounded-full p-2 relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        </Button>
        <Avatar className="h-10 w-10 border-2 border-white">
          <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="user avatar" />
        </Avatar>
      </div>
    </div>
  );
};

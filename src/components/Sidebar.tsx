import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-16 bg-[#441C1F] flex flex-col items-center py-6">
      {/* Логотип */}
      <Link to="/" className="mb-8">
        <div className="w-10 h-10 bg-[#823C42] rounded-lg flex items-center justify-center text-white font-bold">
          N
        </div>
      </Link>
      
      {/* Навигационные элементы */}
      <nav className="flex flex-col gap-6 items-center">
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-[#6D2C32]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#FF6B6B" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 10.5V7C17 5.9 16.1 5 15 5H9C7.9 5 7 5.9 7 7V10.5M17 10.5H7M17 10.5C18.1 10.5 19 11.4 19 12.5V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12.5C5 11.4 5.9 10.5 7 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 14C15 13.4696 14.7893 12.9609 14.4142 12.5858C14.0391 12.2107 13.5304 12 13 12H11C10.4696 12 9.96086 12.2107 9.58579 12.5858C9.21071 12.9609 9 13.4696 9 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12H2M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </nav>
      
      {/* Кнопка добавления */}
      <div className="mt-auto">
        <Button variant="ghost" className="w-10 h-10 p-0 rounded-full bg-[#6D2C32] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};

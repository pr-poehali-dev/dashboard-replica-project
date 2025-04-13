import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#6D2C32] text-white overflow-hidden">
      {/* Левая боковая панель */}
      <div className="w-16 bg-[#441C1F] flex flex-col items-center py-6">
        {/* Логотип */}
        <div className="w-10 h-10 bg-transparent flex items-center justify-center mb-12">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20L18 18H6L4 6Z" fill="white" />
            <path d="M4 6L20 18" stroke="white" strokeWidth="2" />
            <path d="M20 6L4 18" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Навигация */}
        <div className="flex flex-col gap-10 items-center">
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="#FF6B6B" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="2" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
              <circle cx="15.5" cy="8.5" r="1.5" fill="white" />
              <path d="M12 12C14 14 16 12 16 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Button>
          
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" />
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="white" strokeWidth="2" />
            </svg>
          </Button>
          
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="2" />
              <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" />
            </svg>
          </Button>
          
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-lg flex items-center justify-center bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8" cy="10" r="1" fill="white" />
              <circle cx="12" cy="10" r="1" fill="white" />
              <circle cx="16" cy="10" r="1" fill="white" />
            </svg>
          </Button>
        </div>
        
        {/* Кнопка добавления */}
        <div className="mt-auto">
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/20 flex items-center justify-center bg-transparent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Верхняя навигация */}
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
        
        {/* Основное содержимое */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Колонка 1-2: Valorant и New Games */}
          <div className="col-span-2">
            {/* Valorant */}
            <Card className="bg-[#823C42] rounded-3xl overflow-hidden mb-6">
              <div className="relative h-[180px]">
                <div className="absolute inset-0">
                  <img 
                    src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                    className="object-cover w-full h-full" 
                    alt="Valorant" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#823C42] via-[#823C42]/80 to-transparent"></div>
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex gap-2 mb-3">
                    <Badge className="bg-[#FFF8E7] text-[#823C42] rounded-full px-4 py-1 flex items-center text-xs">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      Popular
                    </Badge>
                    <Badge className="bg-[#823C42] rounded-full px-2 py-1 flex items-center text-xs">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </Badge>
                    <Badge className="bg-[#823C42] rounded-full px-2 py-1 flex items-center text-xs">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                      </svg>
                    </Badge>
                  </div>
                  
                  <h1 className="text-3xl font-bold mb-2">Valorant</h1>
                  <p className="text-xs text-gray-200 mb-auto w-1/2">
                    Valorant is a multiplayer computer game developed and published by Riot Games. 
                    Valorant is Riot Games' first first-person shooter game.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      <Avatar className="border-2 border-[#823C42] w-7 h-7">
                        <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="avatar" />
                      </Avatar>
                      <Avatar className="border-2 border-[#823C42] w-7 h-7">
                        <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="avatar" />
                      </Avatar>
                      <Avatar className="border-2 border-[#823C42] w-7 h-7">
                        <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="avatar" />
                      </Avatar>
                    </div>
                    
                    <Badge className="bg-[#6D2C32] text-white rounded-full flex items-center text-xs px-2.5 py-1">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      +53 Reviews
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* New Games */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">New Games</h2>
                <span className="text-sm text-gray-300">See More</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative">
                {/* Uncharted 4 */}
                <Card className="bg-[#512226] rounded-2xl overflow-hidden h-48 relative">
                  <img 
                    src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                    alt="Uncharted 4" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  />
                  
                  <div className="absolute top-3 left-3 flex gap-1">
                    <Button variant="ghost" className="bg-[#6D2C32]/70 hover:bg-[#6D2C32] rounded-full w-8 h-8 p-0 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3L19 12L5 21V3Z" fill="white" />
                      </svg>
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold mb-1">Uncharted 4</h3>
                    <p className="text-xs text-gray-200">
                      is the sequel to Uncharted 3: Drake's Deception and the final installment of Nathan Drake's adventures.
                    </p>
                  </div>
                </Card>
                
                {/* Dishonored */}
                <Card className="bg-[#512226] rounded-2xl overflow-hidden h-48 relative">
                  <img 
                    src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                    alt="Dishonored" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold mb-1">Dishonored:</h3>
                    <p className="text-sm text-gray-200">Standard Edition</p>
                  </div>
                </Card>
                
                {/* "Next" кнопка */}
                <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Last Downloads */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Last Downloads</h2>
                <span className="text-sm text-gray-300">See More</span>
              </div>
              
              {/* FIFA 23 */}
              <Card className="bg-[#823C42] rounded-xl overflow-hidden">
                <div className="flex items-center p-3">
                  <div className="bg-[#FFF8E7] w-16 h-16 rounded-xl flex items-center justify-center mr-4 overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                      alt="FIFA 23" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-base">FIFA 23</h3>
                    <Badge className="bg-[#6D2C32] text-white rounded-md text-xs px-2 py-0.5">
                      Sports simulator
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="text-right mr-4">
                      <p className="text-sm">1 hour 23 min.</p>
                      <p className="text-xs text-gray-300">265MB of 123GB</p>
                    </div>
                    
                    <Button variant="ghost" className="rounded-full p-2 bg-[#6D2C32]/70 hover:bg-[#6D2C32]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3L19 12L5 21V3Z" fill="white" />
                      </svg>
                    </Button>
                    
                    <Button variant="ghost" className="rounded-full p-2 bg-[#6D2C32]/70 hover:bg-[#6D2C32]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6L6 18M6 6L18 18" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Колонка 3: Your Statistic и Recommended */}
          <div className="col-span-1">
            {/* Your Statistic */}
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
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#ED3E48] rounded-full flex items-center justify-center mb-1">
                      <img 
                        src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                        alt="Dota 2" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium">2,340h</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#E6DB74] rounded-full flex items-center justify-center mb-1">
                      <img 
                        src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                        alt="CS:GO" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium">5,420h</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#7F72EA] rounded-full flex items-center justify-center mb-1">
                      <img 
                        src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                        alt="Warcraft" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium">4,580h</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Recommended for you */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recommended for you</h2>
              </div>
              
              {/* Список рекомендаций */}
              <div className="flex flex-col gap-3">
                {/* Unravel 2 */}
                <Card className="bg-[#512226] rounded-xl overflow-hidden">
                  <div className="flex items-center p-3">
                    <div className="mr-3">
                      <img 
                        src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                        alt="Unravel 2"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Unravel 2</h3>
                      <p className="text-xs text-gray-300">Standard Edition + Starter Pass</p>
                    </div>
                    
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2">
                      <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Card>
                
                {/* Subway Surf */}
                <Card className="bg-[#512226] rounded-xl overflow-hidden">
                  <div className="flex items-center p-3">
                    <div className="mr-3">
                      <img 
                        src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                        alt="Subway Surf"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Subway Surf</h3>
                    </div>
                    
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2">
                      <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Card>
                
                {/* Red Dead Redemption 3 */}
                <Card className="bg-[#512226] rounded-xl overflow-hidden">
                  <div className="flex items-center p-3">
                    <div className="mr-3">
                      <img 
                        src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" 
                        alt="Red Dead Redemption 3"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Red Dead Redemption 3</h3>
                      <p className="text-xs text-gray-300">Premium Pack</p>
                    </div>
                    
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AAAAAA" strokeWidth="2">
                      <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Правая боковая панель - онлайн друзья */}
      <div className="w-16 bg-[#441C1F] flex flex-col items-center py-6">
        <div className="flex flex-col gap-4 items-center">
          {/* Список друзей */}
          <div className="relative">
            <Avatar className="w-10 h-10 border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 1" />
            </Avatar>
            <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#41B883] text-white text-[8px] px-1 rounded-sm">
              In Game
            </Badge>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 2" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 3" className="w-full h-full rounded-full object-cover" />
            </div>
            <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#41B883] text-white text-[8px] px-1 rounded-sm">
              In Game
            </Badge>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 4" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 5" className="w-full h-full rounded-full object-cover" />
            </div>
            <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#41B883] text-white text-[8px] px-1 rounded-sm">
              In Game
            </Badge>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 6" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 7" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src="https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png" alt="Friend 8" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
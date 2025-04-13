import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Friend = {
  id: number;
  avatar: string;
  inGame: boolean;
};

export const RightSidebar = () => {
  const friends: Friend[] = [
    { id: 1, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: true },
    { id: 2, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: false },
    { id: 3, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: true },
    { id: 4, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: false },
    { id: 5, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: true },
    { id: 6, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: false },
    { id: 7, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: false },
    { id: 8, avatar: "https://cdn.poehali.dev/files/ca489709-fce3-43c4-a0ec-ea2adc5879a6.png", inGame: false },
  ];

  return (
    <div className="w-16 bg-[#441C1F] flex flex-col items-center py-6">
      <div className="flex flex-col gap-4 items-center">
        {friends.map((friend) => (
          <div key={friend.id} className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent border-2 border-[#6D2C32]">
              <img src={friend.avatar} alt={`Friend ${friend.id}`} className="w-full h-full rounded-full object-cover" />
            </div>
            {friend.inGame && (
              <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-[#41B883] text-white text-[8px] px-1 rounded-sm">
                In Game
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

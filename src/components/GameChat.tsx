import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const GameChat = () => {
  // Мок-данные для друзей
  const friends = [
    { id: 1, name: "Alex", status: "In Game", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 2, name: "Sarah", status: "Online", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 3, name: "Mike", status: "In Game", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 4, name: "Vika", status: "Online", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 5, name: "John", status: "In Game", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 6, name: "Emma", status: "Online", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 7, name: "Robert", status: "Online", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
    { id: 8, name: "FIFA", status: "", avatar: "https://cdn.poehali.dev/files/b3b516da-442c-45d9-9316-db8361572c85.png" },
  ];

  return (
    <div className="w-16 bg-[#441C1F] flex flex-col items-center py-6">
      <div className="flex flex-col gap-4 items-center overflow-y-auto">
        {friends.map((friend) => (
          <div key={friend.id} className="relative">
            <Avatar className="w-10 h-10 border-2 border-[#6D2C32]">
              <img src={friend.avatar} alt={friend.name} className="object-cover" />
            </Avatar>
            
            {friend.status === "In Game" && (
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

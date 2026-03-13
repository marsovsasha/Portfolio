import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const menuItems = [
    { label: "Обо мне", href: "#about", indicatorColor: "#d45e5e" },
    { label: "Проекты", href: "#projects", indicatorColor: "#6aca36" },
    { label: "Навыки", href: "#skills", indicatorColor: "#e6e6e6" },
    { label: "Контакты", href: "#contacts", indicatorColor: "#e6e6e6" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-8 py-[154px]">
      <div className="border border-[#e6e6e6] flex flex-1 flex-col gap-16 max-w-[1280px] w-full overflow-hidden p-6 rounded-[32px]">
        <Profile />
        <div className="border border-[#e6e6e6] flex flex-1 items-stretch min-h-[400px] overflow-hidden rounded-[24px] w-full">
          <Sidebar items={menuItems} />
          <main className="flex-1 p-6 flex flex-col">
            <p className="font-medium text-[#111924] text-lg">
              Тут будет отображаться информация о каждом пункте
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

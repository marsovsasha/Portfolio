import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const menuItems = [
    { label: "Обо мне", href: "#about" },
    { label: "Проекты", href: "#projects" },
    { label: "Навыки", href: "#skills" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-8 py-[154px]">
      <div className="border border-[#e6e6e6] flex flex-1 flex-col gap-16 max-w-[1280px] w-full overflow-hidden p-6 rounded-[32px]">
        <Profile />
        <div className="border border-[#e6e6e6] flex flex-1 items-stretch min-h-[400px] overflow-hidden rounded-[24px] w-full">
          <Sidebar items={menuItems} />
          <main className="flex-1 p-6">
            <p className="text-[#808080] text-sm">
              Выберите пункт меню или добавьте свой контент
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

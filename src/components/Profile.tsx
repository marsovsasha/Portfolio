export default function Profile() {
  return (
    <div className="flex gap-2.5 items-center">
      {/* Добавьте своё фото в public/avatar.jpg и раскомментируйте Image ниже */}
      <div className="bg-[#e6e6e6] rounded-[24px] w-[60px] h-[60px] shrink-0 overflow-hidden" />
      <div className="flex flex-col justify-center gap-0">
        <p className="font-bold text-[#111924] text-lg">Osadchuk Aleksandr</p>
        <p className="font-semibold text-[#808080] text-sm">
          Мост между бизнесом и юзером
        </p>
      </div>
    </div>
  );
}

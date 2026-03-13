import Image from "next/image";

const AVATAR_SRC =
  "https://www.figma.com/api/mcp/asset/26ef1728-741f-49e7-b509-3e38dfb3fa0e";

export default function Profile() {
  return (
    <div className="flex gap-2.5 items-center">
      <div className="relative rounded-[24px] w-[60px] h-[60px] shrink-0 overflow-hidden bg-[#e6e6e6]">
        <Image
          src={AVATAR_SRC}
          alt="Osadchuk Aleksandr"
          fill
          className="object-cover"
          sizes="60px"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-[#111924] text-[22px]">
          Osadchuk Aleksandr
        </p>
        <p className="font-semibold text-[#808080] text-lg">
          Мост между бизнесом и юзером
        </p>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ROLES } from "@/data/roles";

export default function Profile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-2.5 items-center">
      <div className="relative rounded-[24px] w-[60px] h-[60px] shrink-0 overflow-hidden bg-[#e6e6e6]">
        <Image
          src="/avatar.jpg"
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
        <div className="h-7 overflow-hidden">
          <p
            key={index}
            className="font-semibold text-[#808080] text-lg animate-role-drum"
          >
            {ROLES[index]}
          </p>
        </div>
      </div>
    </div>
  );
}

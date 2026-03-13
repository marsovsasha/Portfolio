"use client";

import Link from "next/link";

type Item = {
  label: string;
  href: string;
  indicatorColor?: string;
};

export default function Sidebar({ items }: { items: Item[] }) {
  return (
    <aside className="border-r border-[#e6e6e6] flex flex-col gap-6 p-6 w-[275px] shrink-0">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex gap-2.5 items-center">
            <div
              className="rounded-[24px] w-7 h-7 shrink-0"
              style={{ backgroundColor: item.indicatorColor ?? "#e6e6e6" }}
            />
            <span className="font-medium text-[#111924] text-lg group-hover:text-[#808080] transition-colors">
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </aside>
  );
}

"use client";

import Link from "next/link";

type Item = { label: string; href: string };

export default function Sidebar({ items }: { items: Item[] }) {
  return (
    <aside className="border-r border-[#e6e6e6] flex flex-col gap-2.5 p-6 w-[275px] shrink-0">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex gap-2.5 items-center">
            <div className="bg-[#e6e6e6] rounded-full w-6 h-6 shrink-0" />
            <span className="font-medium text-[#111924] text-sm group-hover:text-[#808080] transition-colors">
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </aside>
  );
}

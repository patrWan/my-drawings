"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { Drawing, User } from "@/types";

import api from "@/api";
import { dateFormat } from "@/lib/util";

export default function DrawingGrid() {
  const [drawings, setDrawings] = useState<Drawing[]>([]);

  const pathname = usePathname();

  useEffect(() => {
    async function getDrawings() {
      const data = await api.drawing.getDrawings(pathname.slice(1,pathname.length));
      setDrawings(data);
    }

    getDrawings();
  }, []);
  
  return (
    <section className="grid gap-4 md:grid-cols-2 rounded-md text-black">
      {drawings.map(({ id, date, url, description }) => (
        <div key={id} className="p-4 border-2 bg-zinc-100 ">
          <p className="text-center text-sm opacity-55 mb-2">
            {dateFormat(date)}
          </p>
          <img
            className="h-60 w-60 mx-auto shadow-md shadow-black opacity-90 hover:opacity-100 rounded-sm cursor-pointer hover:shadow-purple-600"
            src={url}
          />
          <p className="text-center my-4 text-sm text-balance opacity-70">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
}

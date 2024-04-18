'use client'

import {hashPassword} from "@/lib/util";

export default function TestPrismaButton() {
  return (
    <div>
      <button className="p-2 border-2 m-2" onClick={()=> hashPassword("123456")}>rEGISTRAR Algo</button>
    </div>
  );
}

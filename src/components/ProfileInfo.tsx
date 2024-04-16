"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { User } from "@/types";

import api from "@/api";
//import { dateFormat } from "@/lib/util";

export default function ProfileInfo() {
  const [profile, setProfile] = useState<User>();

  const pathname = usePathname();

  useEffect(() => {
    async function getProfile() {}

    getProfile();
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-4 rounded-md md:h-44 items-center w-full px-8 shadow-md shadow-black">
      <div className=" p-2 flex justify-center items-center w-full col-span-3 md:col-span-1">
        <img
          className="rounded-3xl h-36 w-36 border-8 border-gray-900 border-opacity-20"
          src="/profile.png"
        />
      </div>

      <div className="p-4 grid col-span-3 space-y-4">
        <p className="text-xl font-bold font-mono text-center md:text-left">@patr.wan</p>
        <p className="opacity-80 font-mono text-center md:text-left">
          My heart is saying I'm not caring no more ♥️
        </p>
        <div className="flex space-x-4 justify-center md:justify-normal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

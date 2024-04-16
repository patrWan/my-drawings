"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { User } from "@/types";

import api from "@/api";

import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramFilled,
  TwitterSquareFilled,
  FacebookFilled,
} from "@ant-design/icons";
//import { dateFormat } from "@/lib/util";

export default function ProfileInfo() {
  const [profile, setProfile] = useState<User>();

  const pathname = usePathname();

  useEffect(() => {
    async function getProfile() {
      const user = await api.user.getUser(pathname.slice(1, pathname.length));
      setProfile(user);
    }

    getProfile();
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-4 rounded-md md:h-44 items-center w-full px-8 shadow-md shadow-black">
      <div className=" p-2 flex justify-center items-center w-full col-span-3 md:col-span-1">
        <img
          className="rounded-3xl h-36 w-36 border-8 border-gray-900 border-opacity-20"
          src={profile?.profile.picture}
        />
      </div>

      <div className="p-4 grid col-span-3 space-y-4">
        <p className="text-xl font-bold font-mono text-center md:text-left">
          @{profile?.username}
        </p>
        <p className="opacity-80 font-mono text-center md:text-left">
          {profile?.profile.description}
        </p>
        <div className="flex space-x-4 justify-center md:justify-normal">
            {profile?.profile.socialMedia.map(x => 
                {
                    if(x.name === "instagram"){
                        return <a href={x.url} key={x.name}>
                            <InstagramFilled className="cursor-pointer text-gray-300 text-xl hover:text-white" />
                        </a>
                    }

                    if(x.name === "x"){
                        return <a href={x.url} key={x.name}>
                            <TwitterSquareFilled className="cursor-pointer text-gray-300 text-xl hover:text-white" />
                        </a>
                    }

                    if(x.name === "facebook"){
                        return <a href={x.url} key={x.name}>
                            <FacebookFilled className="cursor-pointer text-gray-300 text-xl hover:text-white" />
                        </a>
                    }
                }
            )}
          
          
          
        </div>
      </div>
    </section>
  );
}

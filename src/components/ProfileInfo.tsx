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
  TwitchFilled,
  RedditSquareFilled
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
    <section className="grid gap-4 md:grid-cols-4 rounded-md md:h-44 items-center w-full px-8 shadow-md shadow-black text-black bg-background">
      <div className=" p-2 flex justify-center items-center w-full col-span-3 md:col-span-1">
        <img
          className="rounded-3xl h-36 w-36 border-8 border-gray-900 border-opacity-20"
          src={profile?.profile.picture}
        />
      </div>

      <div className="p-4 grid col-span-3 space-y-4">
        <p className="text-xl font-bold font-mono text-center md:text-left text-purple-900 hover:text-purple-600">
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
                            <InstagramFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
                        </a>
                    }

                    if(x.name === "x"){
                        return <a href={x.url} key={x.name}>
                            <TwitterSquareFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
                        </a>
                    }

                    if(x.name === "facebook"){
                        return <a href={x.url} key={x.name}>
                            <FacebookFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
                        </a>
                    }
                }
            )}
            <TwitchFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600"/>
            <RedditSquareFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600"/>
          
          
          
        </div>
      </div>
    </section>
  );
}

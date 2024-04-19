"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { User, Profile } from "@/types";

import api from "@/api";
import { getProfile } from "@/actions/loginAction";

import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramFilled,
  TwitterSquareFilled,
  FacebookFilled,
  TwitchFilled,
  RedditSquareFilled,
} from "@ant-design/icons";

interface ProfileProps {
  user: Profile;
}

export default function ProfileInfo() {
  const [user, setUser] = useState<User>();
  const [profile, setProfile] = useState<Profile>();
  
  const pathname = usePathname();

  useEffect(() => {
    async function getData() {
      const fetch = await getProfile(pathname.slice(1, pathname.length));
      setUser(fetch.user);
      setProfile(fetch.profile);
    }

    getData();
  }, []);

  return (
    <section className="grid gap-4 md:grid-cols-4 rounded-md md:h-44 items-center w-full px-8 shadow-md shadow-black text-black bg-background">
      <div className=" p-2 flex justify-center items-center w-full col-span-3 md:col-span-1">
        <img
          className="rounded-3xl h-36 w-36 border-8 border-gray-900 border-opacity-20"
          src={profile?.picture}
        />
      </div>

      <div className="p-4 grid col-span-3 space-y-4">
        <p className="text-xl font-bold font-mono text-center md:text-left text-purple-900 hover:text-purple-600">
          @{user?.username}
        </p>
        <p className="opacity-80 font-mono text-center md:text-left">
          {profile?.description}
        </p>
        {
          <div className="flex space-x-4 justify-center md:justify-normal">
            {profile?.instagram ? (
              <a href={profile?.instagram}>
                <InstagramFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
              </a>
            ) : (
              ""
            )}
            {profile?.twitter ? (
              <a href={profile?.instagram}>
                <TwitterSquareFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
              </a>
            ) : (
              ""
            )}
            {profile?.facebook ? (
              <a href={profile?.facebook}>
              <FacebookOutlined className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
            </a>
            ) : (
              ""
            )}
            {profile?.twitch ? (
              <a href={profile?.twitch}>
                <TwitchFilled className="cursor-pointer text-purple-900 text-xl hover:text-purple-600" />
              </a>
            ) : (
              ""
            )}
          </div>
        }
      </div>
    </section>
  );
}

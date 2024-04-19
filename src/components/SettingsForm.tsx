"use client";

import { getProfile } from "@/actions/loginAction";
import { User, Profile } from "@/types";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramFilled,
  TwitterSquareFilled,
  FacebookFilled,
  TwitchFilled,
  SendOutlined
} from "@ant-design/icons";

export default function SettingsForm() {
  const [user, setUser] = useState<User>();
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    async function getData() {
      const fetch = await getProfile("patr.wan");
      setUser(fetch.user);
      setProfile(fetch.profile);
    }

    getData();
  }, []);
  return (
    <div className=" bg-white flex flex-col items-center space-y-4 border-2 p-12 w-1/2 m-auto">
      <h1>Configuración de la cuenta</h1>
      <div className="flex flex-col">
        <input className="p-2 w-96" type="file" readOnly disabled name="" />
        <span className="opacity-40 text-sm mx-2">{profile?.picture}</span>
      </div>

      <div className="flex flex-col ">
        <input
          className="p-2 border-2 w-72 border-zinc-600"
          type="text"
          readOnly
          disabled
          value={user?.username}
        />
      </div>

      <div className="flex flex-col">
        <textarea
          className="w-72 h-20 border-2 border-zinc-600 resize-none"
          value={profile?.description}
        ></textarea>
      </div>

      <div className="flex flex-col">
        <span className="opacity-40 text-sm mx-2">intagram.com/</span>
        <div className="flex items-center space-x-1">
          <InstagramFilled className="text-3xl opacity-60" />
          <input
            className="p-2 border-2 w-80 border-zinc-600"
            type="text"
            readOnly
            disabled
            value={profile?.instagram}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="opacity-40 text-sm mx-2">x.com/</span>
        <div className="flex items-center space-x-1">
          <TwitterSquareFilled className="text-3xl opacity-60" />
          <input
            className="p-2 border-2 w-80 border-zinc-600"
            type="text"
            readOnly
            disabled
            value={profile?.twitter}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="opacity-40 text-sm mx-2">facebook.com/</span>
        <div className="flex items-center space-x-1">
          <FacebookFilled className="text-3xl opacity-60" />
          <input
            className="p-2 border-2 w-80 border-zinc-600"
            type="text"
            readOnly
            disabled
            value={profile?.facebook}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="opacity-40 text-sm mx-2">twitch.com/</span>
        <div className="flex items-center space-x-1">
          <TwitchFilled className="text-3xl opacity-60" />
          <input
            className="p-2 border-2 w-80 border-zinc-600"
            type="text"
            readOnly
            disabled
            value={profile?.twitch}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex space-x-1">
          <button
            className="p-2 border-2 w-60 text-white bg-purple-800 flex items-center justify-center space-x-2 hover:bg-purple-600"
            type="submit"
            disabled
            value={"Confirmar datos"}
          >
            <SendOutlined className="text-xl" /> <p className="font-bold uppercase">Confirmar datos </p>   
          </button>
        </div>
      </div>
    </div>
  );
}

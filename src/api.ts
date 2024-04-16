import type { Drawing, User } from "./types";
import { login, logout } from "@/actions/loginAction";

const api = {
  drawing: {
    list: async (): Promise<Drawing[]> => {
      return [
        {
          id: 1,
          date: "2024-04-10:13:00:00",
          url: "/draw1.png",
          description:
            "If I told you that I loved you Tell me, what would you say?",
          usernameId: "patr.wan",
        },
        {
          id: 2,
          date: "2024-04-10:17:00:00",
          url: "/draw1.png",
          description:
            "Fallin' again, I need a pick-me-up I've been callin' you friend, I might need to give it up",
          usernameId: "patr.wan",
        },
        {
          id: 3,
          date: "2024-04-11:20:00:00",
          url: "/draw1.png",
          description:
            "I'm sick and I'm tired too I can admit, I am not fireproof I feel it burning me I feel it burning you I hope I don't murder me I hope I don't burden you If I do, I do",
          usernameId: "patr.wan",
        },
        {
          id: 4,
          date: "2024-04-14:21:10:00",
          url: "/draw1.png",
          description:
            "I don't wanna be alone Sharper the blade is The easier it scars your soul",
          usernameId: "nanitastica",
        },
      ];
    },
    getDrawings: async (usernameId: string): Promise<Drawing[]> => {
      const drawings = (await api.drawing.list()).filter(drawing => drawing.usernameId === usernameId).sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime());
      return drawings;
    },
  },

  user: {
    list: async (): Promise<User[]> => {
      return [
        {
          id: 1,
          username: "patr.wan",
          password: "123456",
        },
        {
          id: 2,
          username: "nanitastica",
          password: "123456",
        },
      ];
    },

    getUser: async (username : string): Promise<User | undefined> => {
        const user  = (await api.user.list()).find(user => user.username === username);
        return user;
    },

    login: async (username: string, password: string): Promise<string> => {
      const userExist = await (
        await api.user.list()
      ).find((x) => x.username == username && x.password == password);

      if (typeof userExist !== "undefined") {
        login();
        return "Bienvenido @" + username;
      }

      return "Usuario o contraseña incorrecto";
    },
  },
};

export default api;

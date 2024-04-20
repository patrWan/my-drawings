import type { Drawing, User, Profile } from "./types";
import { login, logout } from "@/actions/loginAction";


const api = {
  drawing: {
    list: async (): Promise<Drawing[]> => {
      return [];
    },
    getDrawings: async (usernameId: string): Promise<Drawing[]> => {
      const drawings = (await api.drawing.list()).filter(drawing => drawing.usernameId === usernameId).sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime());
      return drawings;
    },
  },

  user: {
    list: async (): Promise<User[]> => {
      return [];
    },

    getUser: async (username : string | unknown): Promise<User | undefined> => {
        const user  = (await api.user.list()).find(user => user.username === username);
        return user;
    },

    login: async (username: string, password: string): Promise<string> => {
      const userExist = await (
        await api.user.list()
      ).find((x) => x.username == username && x.password == password);

      if (typeof userExist !== "undefined") {
        login(username);
        return "Bienvenido @" + username;
      }

      return "Usuario o contraseña incorrecto";
    },
  },
};

export default api;

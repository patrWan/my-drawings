export interface Drawing {
  id: number;
  date: string;
  url: string;
  description: string;
}

export interface Profile {
  picture: string;
  description: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

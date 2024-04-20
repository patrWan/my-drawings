export interface Drawing {
  id: number;
  date: string;
  url: string;
  description: string;
  usernameId : string; // Por ahora sera el username
}

export interface Profile {
  picture?: string;
  description: string;
  instagram : string,
  twitter :string,
  facebook :string,
  twitch :string ,
}

export interface User {
  id?: number;
  username: string;
  password?: string;
  profileId? : Profile;
} 



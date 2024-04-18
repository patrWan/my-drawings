export interface Drawing {
  id: number;
  date: string;
  url: string;
  description: string;
  usernameId : string; // Por ahora sera el username
}

export interface Profile {
  picture: string;
  description: string;
  socialMedia : {
    name : string;
    url : string;
  }[]
}

export interface User {
  id: number;
  username: string;
  password: string;
  profile : Profile;
}



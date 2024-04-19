//import bcryptjs from "bcryptjs";

export function dateFormat(date: string) {
  return new Date(date).toLocaleDateString("es-CL", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
}
/*
export async function hashPassword(password: string)  {
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);

  return hash;
}

export async function comparePasword(password: string, dbPassword : string) {
  const compare = await bcryptjs.compare(password, dbPassword);

  return compare;
}
*/
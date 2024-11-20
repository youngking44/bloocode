import { Roboto, Protest_Revolution } from "next/font/google";
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto",
});

export const protestRevolution = Protest_Revolution({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--protest-revolution",
});

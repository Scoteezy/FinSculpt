import { Martian_Mono, Unica_One } from "next/font/google";

export const unica = Unica_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-unica",
});

export const martian = Martian_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-martian",
});

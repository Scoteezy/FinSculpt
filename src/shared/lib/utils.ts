import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const formatDate = (string:Date | string)=>{
  return new Date(string).toISOString()
    .replace(/^([^T]+)T(.+)$/,"$1")
    .replace(/^(\d+)-(\d+)-(\d+)$/,"$3.$2.$1");
};
export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

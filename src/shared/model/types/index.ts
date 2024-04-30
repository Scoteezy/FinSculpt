export type ThemeContextType = {
    theme: "dark" | "light"
    setTheme: (theme: "dark" | "light") => void
};
export type ExpenseType = {
    id: string;
    title: string;
    amount: number;
    date: Date;
    description: string;
    tags: string[];
}
export type CreateUserParams = {
    clerkId: string;
    firstName: string;
    lastName?: string;
    username: string;
    email: string;
    photo: string;
  };
  
export type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
  };
  
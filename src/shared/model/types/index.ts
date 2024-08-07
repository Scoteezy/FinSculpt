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
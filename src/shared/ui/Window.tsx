import { ReactNode } from "react";

const Window = ({children, styles}:{
    children: ReactNode;
    styles?: string
  }) => {
  return (
    <div className={`rounded-lg bg-secondary-500 dark:bg-primaryDarkTheme-500/50 drop-shadow-xl ${styles}`}>{children}</div>
  );
};

export default Window;
import React from "react";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex-center min-h-screen w-full bg-secondary-500 bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;

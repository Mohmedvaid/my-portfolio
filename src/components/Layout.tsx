// src/components/Layout.tsx

import React from "react";
import SidebarMenu from "./Menu/Menu"; // Assuming the burger menu component is named 'Menu'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <SidebarMenu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

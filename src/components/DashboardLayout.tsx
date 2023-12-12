import React from 'react';
import SidebarMenu from './SideBarMenu';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full  h-screen py-4   bg-secondary/70">
      <div className=" container grid grid-cols-12 gap-4 h-full">
        {/* sidebar container*/}
        <div className=" col-span-2">
          <SidebarMenu />
        </div>
        <div className="col-span-10 bg-background rounded-lg ">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;

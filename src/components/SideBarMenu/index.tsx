'use client';
import React from 'react';
import MenuSection from './MenuSection';
import LogoSection from './LogoSection';
import MenuLink from './MenuLink';
import UserSettings from './UserSettings';
import { Home } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';

const SidebarMenu = () => {
  return (
    <nav className="w-full h-full ">
      <LogoSection />

      <MenuSection titleSection="Info Pages">
        <MenuLink name="home" icon={<Home width={18} />} link="/" />
        <MenuLink name="test" icon={<Home width={18} />} link="/testpage" />
      </MenuSection>
      <MenuSection titleSection="Usuario">
        <UserSettings />
      </MenuSection>
    </nav>
  );
};

export default SidebarMenu;

import React from 'react';
import { MenuSectionProps } from './types';

const MenuSection = ({ titleSection, children }: MenuSectionProps) => {
  return (
    <div className=" py-4">
      <h2 className=" uppercase font-bold text-lg">{titleSection}</h2>
      <div>{children}</div>
    </div>
  );
};

export default MenuSection;

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuLinkProps } from './types';

const MenuLink = ({ name, icon, link }: MenuLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div
      className={`${isActive ? ' bg-background rounded-xl shadow-lg' : ' '}`}
    >
      <Link href={link}>
        <div className="flex gap-2 my-3 py-2 px-2">
          <div
            className={` rounded-xl w-[28px] h-[28px] flex items-center justify-center ${
              isActive
                ? ' bg-primary text-secondary'
                : ' bg-background text-primary'
            }`}
          >
            {icon}
          </div>
          <p
            className={`capitalize font-semibold ${
              isActive ? 'text-primary' : 'text-primary/50'
            }`}
          >
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MenuLink;

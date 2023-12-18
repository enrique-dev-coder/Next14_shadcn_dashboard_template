'use client';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { Settings, User, UserRound } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';
// obtener sesion de  el lado del cliente
import { useSession } from 'next-auth/react';

const UserSettings = () => {
  // datos del usuario logeado en este hook
  const { data: userData } = useSession();

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 my-2   bg-primary/5  rounded-full   w-fit">
        <div className=" w-7 h-7  bg-primary rounded-full flex justify-center items-center ">
          <p className=" text-secondary font-bold text-sm">EA</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className=" w-6 h-6 bg-primary rounded-full text-secondary flex justify-center items-center">
              <Settings width={18} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" bg-background mt-1 ml-2 shadow-sm border-[1px] p-2 rounded-md  border-solid border-primary/50">
            <DropdownMenuLabel className="font-medium">
              Mi cuenta
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-1">
              <UserRound width={15} />
              <p className="text-sm font-light">
                {userData?.user?.email || 'email@ejemplo.com'}
              </p>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ModeToggle />
    </div>
  );
};

export default UserSettings;

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { Settings } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';

const UserSettings = () => {
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
          <DropdownMenuContent className="bg-secondary">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ModeToggle />
    </div>
  );
};

export default UserSettings;

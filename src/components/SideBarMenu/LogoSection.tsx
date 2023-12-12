import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Separator } from '../ui/separator';

const LogoSection = () => {
  return (
    <div>
      <div className="flex items-center ">
        <Avatar>
          <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/7/72/Gengar_face.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className=" font-bold text-lg ml-2">App NAME</p>
      </div>
      <Separator className="my-2" />
    </div>
  );
};

export default LogoSection;

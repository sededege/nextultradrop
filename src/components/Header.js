import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-20 h-[10vh]">
      <div className="mx-auto">
        <Image src="/img/logo.png" 
        alt='logo' 
        width={200}
        height={300}
        priority={true}
        className="w-full h-auto"/>
      </div>
    </header>
  );
};

export default Header;

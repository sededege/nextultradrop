import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-20 h-[10vh]">
      <div className="mx-auto">
        <Image src="/img/logo.png" alt='logo' width={200} height={100}/>
      </div>
    
    </header>
  );
};

export default Header;

"use client";

import { GrHomeRounded } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex h-16 w-screen items-center justify-between bg-[#000C04] px-6 py-4">
      <div className="flex items-center gap-2">
        <GrHomeRounded className="h-4 w-4" />
        <p>Sobre</p>
      </div>
    </div>
  );
};

export default Header;

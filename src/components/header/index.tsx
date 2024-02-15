import logo from '@assets/img/LogoBetrayal.png';

import { RiGhost2Line, RiHomeLine } from 'react-icons/ri';
import { TbCards, TbUsers } from 'react-icons/tb';

const Header = () => {
  return (
    <header className="bg-main flex h-[10%] w-full items-center justify-between gap-2 px-8 py-6">
      <img className="h-12" src={logo} alt="" />

      <div className="flex items-center gap-8 text-sm">
        <div className="flex cursor-pointer items-center gap-2 opacity-70 hover:opacity-100">
          <RiHomeLine />
          <p>Sobre</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 opacity-70 hover:opacity-100">
          <TbUsers />
          <p>Personagens</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 opacity-70 hover:opacity-100">
          <TbCards />
          <p>Cartas</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 opacity-70 hover:opacity-100">
          <RiGhost2Line />
          <p>Assombrações</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

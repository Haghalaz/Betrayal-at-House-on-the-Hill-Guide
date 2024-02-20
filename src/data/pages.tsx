import { IconType } from 'react-icons';
import { RiGhost2Line, RiHomeLine } from 'react-icons/ri';
import { TbCards, TbUsers } from 'react-icons/tb';

import Home from '@src/components/pages/home';
import Characters from '@src/components/pages/characters';

export interface PagesProps {
  id: number;
  label: string;
  icon: IconType;
  page: JSX.Element;
}

const pages: PagesProps[] = [
  {
    id: 0,
    label: 'Sobre',
    icon: RiHomeLine,
    page: <Home />,
  },

  {
    id: 1,
    label: 'Personagens',
    icon: TbUsers,
    page: <Characters />,
  },

  {
    id: 2,
    label: 'Cartas',
    icon: TbCards,
    page: <></>,
  },

  {
    id: 3,
    label: 'Assombrações',
    icon: RiGhost2Line,
    page: <></>,
  },
];

export default pages;

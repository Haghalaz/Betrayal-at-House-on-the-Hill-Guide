import { IconType } from 'react-icons';
import { RiGhost2Line, RiHomeLine } from 'react-icons/ri';
import { TbCards, TbUsers } from 'react-icons/tb';

import Home from '@src/components/pages/home';
import Characters from '@src/components/pages/characters';
import Cards from '@src/components/pages/Cards';

import VideoChar from '@assets/video/Char.mp4';
import VideoHouse from '@assets/video/House.mp4';

export interface PagesProps {
  id: number;
  label: string;
  icon: IconType;
  page: JSX.Element;
  background: string;
}

const pagesList: PagesProps[] = [
  {
    id: 0,
    label: 'Sobre',
    icon: RiHomeLine,
    page: <Home />,
    background: VideoHouse,
  },

  {
    id: 1,
    label: 'Personagens',
    icon: TbUsers,
    page: <Characters />,
    background: VideoChar,
  },

  {
    id: 2,
    label: 'Cartas',
    icon: TbCards,
    page: <Cards />,
    background: '',
  },

  {
    id: 3,
    label: 'Assombrações',
    icon: RiGhost2Line,
    page: <></>,
    background: '',
  },
];

export default pagesList;

import logo from '@assets/img/LogoBetrayal.png';
import { PagesProps } from '@src/data/pages';

interface HeaderProps {
  pages: PagesProps[];
  activeIndex: number;
  setIndex: (value: React.SetStateAction<number>) => void;
}

const Header = ({ pages, activeIndex, setIndex }: HeaderProps) => {
  return (
    <header className="flex h-full w-full items-center justify-between gap-2 bg-main px-8 py-6">
      <img className="h-12" src={logo} alt="Betrayal at House on the Hill Logo" />

      <div className="flex items-center gap-8 text-sm">
        {pages.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className={`flex cursor-pointer items-center gap-2 ${id === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
            onClick={() => setIndex(id)}
          >
            <Icon className="h-4 w-4" />
            <p className="hidden md:block">{label}</p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

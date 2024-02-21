import { IconButton } from '@material-tailwind/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface NavigationProps {
  activeIndex: number;
  maxSize: number;

  setIndex: (value: React.SetStateAction<number>) => void;
}

const Navigation = ({ activeIndex, setIndex, maxSize }: NavigationProps) => {
  const handleDown = () => setIndex((prevIndex) => (prevIndex === maxSize - 1 ? maxSize : prevIndex + 1));
  const handleUp = () => setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));

  return (
    <div className="absolute bottom-0 z-0 flex h-[10%] w-full items-center justify-between p-8">
      <IconButton onClick={handleUp} className="rounded-full bg-main" size="lg" disabled={activeIndex === 0} placeholder={undefined}>
        <FaArrowUp />
      </IconButton>

      <IconButton onClick={handleDown} className="rounded-full bg-main" size="lg" disabled={activeIndex === maxSize} placeholder={undefined}>
        <FaArrowDown />
      </IconButton>
    </div>
  );
};

export default Navigation;

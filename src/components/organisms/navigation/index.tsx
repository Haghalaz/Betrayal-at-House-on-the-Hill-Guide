import { IconButton } from '@material-tailwind/react';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface NavigationProps {
  handleUp: (() => void) | undefined;
  handleDown: (() => void) | undefined;
}

const Navigation = ({ handleUp, handleDown }: NavigationProps) => {
  return (
    <div className="absolute bottom-0 z-50 flex h-[10%] w-full items-center justify-between p-8">
      <IconButton onClick={handleUp} className="rounded-full bg-main" size="lg" disabled={false} placeholder={undefined}>
        <FaArrowUp />
      </IconButton>

      <IconButton onClick={handleDown} className="rounded-full bg-main" size="lg" disabled={false} placeholder={undefined}>
        <FaArrowDown />
      </IconButton>
    </div>
  );
};

export default Navigation;

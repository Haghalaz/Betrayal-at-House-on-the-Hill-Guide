import { IconButton } from '@material-tailwind/react';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="absolute bottom-0 z-50 flex w-full items-center justify-between p-8">
      <IconButton className="bg-main rounded-full" size="lg" disabled placeholder={undefined}>
        <FaArrowUp />
      </IconButton>

      <IconButton className="bg-main rounded-full" size="lg" placeholder={undefined}>
        <FaArrowDown />
      </IconButton>
    </div>
  );
};

export default Navigation;

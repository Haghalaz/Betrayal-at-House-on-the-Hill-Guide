import { Avatar } from '@material-tailwind/react';

interface CharacterTitleProps {
  name: string;
  picture: string;
  title: string;
  age: number;
}

const CharacterTitle = ({ name, picture, title, age }: CharacterTitleProps) => {
  return (
    <div className="flex justify-center gap-6">
      <Avatar className="bg-white" size="xl" src={picture} placeholder={undefined} />
      <div className="flex grow flex-col justify-center">
        <h4 className="text-lg font-bold md:text-2xl">{name}</h4>
        <p className="text-xs font-light opacity-90 md:text-sm">{`${title}`}</p>
        <p className="text-xs font-light opacity-90 md:text-sm">{`${age} anos`}</p>
      </div>
    </div>
  );
};

export default CharacterTitle;

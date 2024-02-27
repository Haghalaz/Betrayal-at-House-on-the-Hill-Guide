import { IconType } from 'react-icons';

interface CharacterInfoProp {
  title: string;
  data: string;
  icon: IconType;
}

const CharacterInfo = ({ title, data, icon: Icon }: CharacterInfoProp) => {
  return (
    <div className="flex items-start justify-between gap-6 text-sm">
      <div className="flex items-center gap-2">
        <Icon />
        <p className="text-base font-light">{title}</p>
      </div>

      <p className="text-end text-sm font-normal md:text-base">{data}</p>
    </div>
  );
};

export default CharacterInfo;

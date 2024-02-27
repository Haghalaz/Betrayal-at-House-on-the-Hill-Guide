import { IoSkullOutline } from 'react-icons/io5';

interface CharacterSkillProp {
  skill: string;
  values: number[];
  startIndex: number;
}

const CharacterSkill = ({ skill, values, startIndex }: CharacterSkillProp) => {
  return (
    <div className="flex justify-between">
      <p className="text-sm font-normal md:text-base">{skill}</p>

      <div className="flex items-center gap-2">
        <IoSkullOutline />

        {values.map((value, index) => (
          <p key={index} className={`text-sm md:text-base ${index === startIndex ? 'font-bold text-green-600' : ' font-thin'}`}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CharacterSkill;

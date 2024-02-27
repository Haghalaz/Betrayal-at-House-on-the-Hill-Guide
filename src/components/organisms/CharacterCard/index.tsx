import House from '@assets/img/House.png';
import CharacterInfo from '@src/components/molecules/CharacterInfo';
import CharacterSkill from '@src/components/molecules/CharacterSkill';
import CharacterTitle from '@src/components/molecules/CharacterTitle';
import { Character } from '@src/data/characters';
import { FaTheaterMasks } from 'react-icons/fa';

import { HiOutlineCake } from 'react-icons/hi';
import { IoBody } from 'react-icons/io5';
import { MdOutlineHeight } from 'react-icons/md';
import { PiGenderIntersex } from 'react-icons/pi';
import { RiGhost2Line } from 'react-icons/ri';
import { TbWeight } from 'react-icons/tb';

interface CharacterCardProps {
  data: Character;
}

const CharacterCard = ({ data }: CharacterCardProps) => {
  const { name, picture, color, title, age, birthday, gender, weight, height, specie, hobbies, fears, history, velocity, strength, knowledge, sanity } = data;

  return (
    <div className="grid h-full w-full place-items-center px-6 pb-24 md:pb-24 xl:px-48 ">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <div className="absolute z-50 flex h-full w-full flex-col gap-6 p-6 ">
          <CharacterTitle name={name} picture={picture} title={title} age={age} />

          <div className="grid grow gap-6 overflow-x-auto px-2 lg:grid-cols-2 lg:gap-12 lg:overflow-hidden">
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-2">
                <CharacterInfo title={'Aniversário'} data={birthday} icon={HiOutlineCake} />
                <CharacterInfo title={'Gênero'} data={gender} icon={PiGenderIntersex} />
                <CharacterInfo title={'Peso'} data={weight} icon={TbWeight} />
                <CharacterInfo title={'Altura'} data={height} icon={MdOutlineHeight} />
                <CharacterInfo title={'Espécie'} data={specie} icon={IoBody} />
                <CharacterInfo title={'Hobbies'} data={hobbies} icon={FaTheaterMasks} />
                <CharacterInfo title={'Medo'} data={fears} icon={RiGhost2Line} />
              </div>

              <div className="space-y-2">
                <p className="text-xl font-bold">Características</p>
                <CharacterSkill skill={'Velocidade'} values={velocity.value} startIndex={velocity.startIndex} />
                <CharacterSkill skill={'Força'} values={strength.value} startIndex={strength.startIndex} />
                <CharacterSkill skill={'Conhecimento'} values={knowledge.value} startIndex={knowledge.startIndex} />
                <CharacterSkill skill={'Sanidade'} values={sanity.value} startIndex={sanity.startIndex} />
              </div>
            </div>

            <div className="space-y-2 text-justify md:h-full lg:overflow-auto">
              <p className="text-1xl font-bold">Historia</p>

              <p className="text-base font-light">{history}</p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 z-20 h-full w-full bg-black opacity-80 "></div>
        <div className="absolute top-0 z-10 h-full w-full opacity-100 mix-blend-hue" style={{ backgroundColor: color }}></div>
        <img className="absolute top-0 z-0 h-full w-full object-cover opacity-100 " src={House}></img>
      </div>
    </div>
  );
};

export default CharacterCard;

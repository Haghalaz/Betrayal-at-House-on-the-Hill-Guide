import VideoChar from '@assets/video/Char.mp4';
import House from '@assets/img/House.png';

import { Avatar, Carousel } from '@material-tailwind/react';
import { HiOutlineCake } from 'react-icons/hi';
import { IoSkullOutline } from 'react-icons/io5';

const CharacterCardSkill = () => {
  return (
    <div className="flex justify-between">
      <p className="text-base font-bold">Velocidade</p>

      <div className="flex items-center gap-2">
        <IoSkullOutline />
        <p className="text-base font-light">1</p>
        <p className="text-base font-light">2</p>
        <p className="text-base font-light">3</p>
        <p className="text-base font-light">4</p>
        <p className="text-base font-light">5</p>
        <p className="text-base font-bold">6</p>
        <p className="text-base font-light">7</p>
        <p className="text-base font-light">8</p>
      </div>
    </div>
  );
};

const CharacterCardInfo = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <HiOutlineCake />
        <p className="text-base font-light">Aniversario</p>
      </div>

      <p className="text-base font-normal">12 de Maio</p>
    </div>
  );
};

const CharacterCardName = () => {
  return (
    <div className="flex justify-center gap-6">
      <Avatar className="bg-white" size="xl" placeholder={undefined}></Avatar>
      <div className="flex grow flex-col justify-center">
        <h4 className="text-2xl font-bold">Brandon Jaspers</h4>
        <p className="text-base font-light opacity-90">Explorador - 12 anos</p>
      </div>
    </div>
  );
};

const CharacterCard = () => {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="relative h-[32rem] w-[54rem] overflow-hidden rounded-lg">
        <div className="absolute z-50 flex h-full w-full flex-col gap-6 p-6 ">
          <CharacterCardName />

          <div className="grid grow grid-cols-2 gap-6 overflow-hidden">
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <CharacterCardInfo />
                <CharacterCardInfo />
                <CharacterCardInfo />
                <CharacterCardInfo />
                <CharacterCardInfo />
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-bold">Historia</p>
                <CharacterCardSkill />
                <CharacterCardSkill />
                <CharacterCardSkill />
                <CharacterCardSkill />
              </div>
            </div>

            <div className="h-full space-y-2 overflow-auto">
              <p className="text-2xl font-bold">Historia</p>

              <p className="text-base font-light">
                Brandon adora computadores e acampar. Ele leva seu novo laptop com ele para onde quer que vá. Dessa forma, ele pode programar e acampar ao mesmo
                tempo. Legal. Brandon nunca gostou de brincar com brinquedos comuns, bonecos de ação ou esse tipo de coisa. Na verdade, ele odeia fantoches. Ele
                tinha um fantoche de palhaço quando era pequeno e, em algumas manhãs, quando acordava, descobria que o fantoche havia se aproximado dele. Uma
                vez, ele tinha até uma faca de cozinha na mão. Brandon tem certeza de que seu irmão mais velho, Chris, estava brincando com ele. Mas ele ainda
                odeia marionetes. Brandon às vezes vê a família de Zoe quando eles vão acampar. Mas Zoe geralmente se esconde na barraca com suas bonecas. Que
                nojo. Brandon entrega o jornal para o Professor Longfellow (em sua casa grande e esquisita) e para a família de Missy. O maior medo de Brandon é
                de fantoches, especialmente fantoches de palhaço.
              </p>
            </div>
          </div>
        </div>{' '}
        d<div className="absolute top-0 z-20 h-full w-full bg-black opacity-80 "></div>
        <div className="absolute top-0 z-10 h-full w-full bg-[#643D5F] opacity-100 mix-blend-hue "></div>
        <img className="absolute top-0 z-0 h-full w-full object-cover opacity-100 " src={House}></img>
      </div>
    </div>
  );
};

const Characters = () => {
  return (
    <>
      <div className="absolute top-0 z-50 flex h-[90%] w-full flex-col justify-between p-8">
        <div className="space-y-4 ">
          <h4 className="text-4xl font-bold">Personagens</h4>
          <p className="text-base font-light opacity-90">Informações sobre os exploradores</p>
        </div>

        <Carousel
          className="grow transition-all"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 items-center gap-2">
              {new Array(length).fill('').map((_, i) => (
                <Avatar
                  size={`${activeIndex === i ? 'sm' : 'xs'}`}
                  key={i}
                  className="cursor-pointer bg-white"
                  onClick={() => setActiveIndex(i)}
                  placeholder={undefined}
                />
              ))}
            </div>
          )}
          placeholder={undefined}
        >
          <CharacterCard />

          <CharacterCard />
        </Carousel>
      </div>

      <video className="absolute top-0 z-0 h-full w-full object-cover opacity-20" loop autoPlay>
        <source src={VideoChar} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Characters;

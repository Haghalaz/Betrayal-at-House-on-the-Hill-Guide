import { Avatar, Carousel, IconButton } from '@material-tailwind/react';

import CharacterCard from '@organisms/CharacterCard';
import charactersList from '@src/data/characters';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Characters = () => {
  return (
    <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-between gap-4 p-6">
      <div className="space-y-4 ">
        <h4 className="text-2xl font-bold md:text-4xl">Personagens</h4>
        <p className="text-base font-light opacity-90">Informações sobre os exploradores</p>
      </div>

      <Carousel
        className="grow"
        loop
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-4 top-2/4 z-50 hidden -translate-y-2/4 md:block"
            placeholder={undefined}
          >
            <FaAngleLeft className="h-6 w-6 fill-white" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            size="lg"
            onClick={handleNext}
            className="!absolute !right-4 top-2/4 z-50 hidden -translate-y-2/4 md:block"
            placeholder={undefined}
          >
            <FaAngleRight className="w- h-6 fill-white" />
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex  -translate-x-2/4 items-center gap-2 ">
            {new Array(length).fill('').map((_, i) => (
              <Avatar
                key={i}
                src={charactersList[i].picture}
                className={`cursor-pointer bg-white transition-all duration-300 ease-in ${activeIndex === i ? 'scale-110 opacity-100' : 'hidden scale-[0.8] opacity-70 xl:block'}  ${activeIndex === i - 1 || activeIndex === i + 1 ? 'block  opacity-80' : ''}`}
                onClick={() => setActiveIndex(i)}
                placeholder={undefined}
              />
            ))}
          </div>
        )}
        placeholder={undefined}
      >
        {charactersList.map((characters) => (
          <CharacterCard key={characters.id} data={characters} />
        ))}
      </Carousel>
    </div>
  );
};

export default Characters;

/* import eventCard from '@assets/img/cards/events/@Events.png';
import itemCard from '@assets/img/cards/Items.png';
import omenCard from '@assets/img/cards/Omens.png'; */

import { Button, IconButton, Input } from '@material-tailwind/react';
import eventsCardList from '@src/data/cards/events';
import { ChangeEvent, useEffect, useState } from 'react';

import { animated, useSpring } from '@react-spring/web';
import { BiCamera, BiSearch } from 'react-icons/bi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Tesseract from 'tesseract.js';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const Cards = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [search, setSearch] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const [cardsList, setCardList] = useState(eventsCardList);

  const [{ transform }, api] = useSpring(() => ({ width: 500, transform: `translateX(-${cardIndex * 100}%)` }));

  useEffect(() => {
    api.start({ transform: `translateX(-${Math.max(0, cardIndex * 100)}%)` });
  }, [cardIndex, api]);

  useEffect(() => {
    const arrayWords = search
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter((palavra) => palavra.length >= 4);

    console.log(arrayWords);

    const filteredItems = eventsCardList.filter((item) =>
      arrayWords.some((palavra) => item.titleEn.toLowerCase().includes(palavra.toLowerCase()) || item.titlePt.toLowerCase().includes(palavra.toLowerCase()))
    );

    if (filteredItems.length > 1) {
      setCardList(filteredItems);
      setCardIndex(0);
    }
  }, [search]);

  const handleTakePhoto = async (dataUri: string) => {
    try {
      const processedDataUri = await preprocessImage(dataUri);

      console.log(processedDataUri);

      const {
        data: { text },
      } = await Tesseract.recognize(processedDataUri, 'eng');

      setSearch(text);
      setIsOpen(false);
    } catch (error) {
      console.error('Error recognizing text:', error);
    }
  };

  const preprocessImage = async (dataUri: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject('Failed to get canvas context');
        return;
      }

      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        ctx.filter = `grayscale(100%) contrast(${200}%) saturate(${0}%)`;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Obtém a nova dataUri após o pré-processamento
        const processedDataUri = canvas.toDataURL();
        resolve(processedDataUri);
      };
      img.src = dataUri;
    });
  };

  const setCard = (index: number) => () => setCardIndex(index);
  const prevCard = () => setCardIndex((prev) => (prev === 0 ? cardsList.length - 1 : prev - 1));
  const nextCard = () => setCardIndex((prev) => (prev === cardsList.length - 1 ? 0 : prev + 1));

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value);

  return (
    <>
      <div className="absolute top-0 z-50 flex h-full w-full flex-col justify-between gap-4 p-6">
        <div className="space-y-4 ">
          <h4 className="text-2xl font-bold md:text-4xl">Cartas</h4>
          <p className="text-base font-light opacity-90">Cartas de Eventos, Presságios e Itens</p>
        </div>

        {/*       <div className="flex grow flex-wrap items-center justify-center gap-24">
        <img src={eventCard} className="scale-90 cursor-pointer rounded-lg transition-all hover:scale-110" alt="Event Card back" />

        <img src={itemCard} className="scale-90 cursor-pointer rounded-lg transition-all hover:scale-110" alt="Item Card back" />

        <img src={omenCard} className="scale-90 cursor-pointer rounded-lg transition-all hover:scale-110" alt="Omen Card back" />
      </div> */}

        <div className="flex items-center justify-end gap-6">
          <div>
            <Input label="Nome da Carta" color="white" icon={<BiSearch className="fill-white" />} value={search} onChange={onChange} crossOrigin={undefined} />
          </div>

          <IconButton className="w-24" size="lg" onClick={() => setIsOpen(true)} placeholder={undefined}>
            <BiCamera className="h-5 w-5 fill-white" />
          </IconButton>
        </div>

        <div className="flex grow items-center justify-start gap-6 overflow-hidden py-6">
          <IconButton variant="text" className="w-24" size="lg" onClick={prevCard} placeholder={undefined}>
            <FaAngleLeft className="h-6 w-6 fill-white" />
          </IconButton>

          <div className="relative flex h-full grow overflow-hidden">
            {cardsList.map(({ id, image }, i) => (
              <animated.div key={id} className="h-full min-w-[calc(100%)] place-items-start overflow-hidden md:min-w-[calc(100%/3)]" style={{ transform }}>
                <img
                  className={`h-full w-full cursor-pointer rounded-xl object-contain transition-all ${i === cardIndex ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}
                  onClick={setCard(i)}
                  src={image}
                />
              </animated.div>
            ))}
          </div>

          <IconButton variant="text" className="w-24" size="lg" onClick={nextCard} placeholder={undefined}>
            <FaAngleRight className="h-6 w-6 fill-white" />
          </IconButton>
        </div>
      </div>

      <div className={`absolute z-50 grid h-screen w-screen place-items-center bg-white/30 backdrop-blur-sm ${isOpen ? 'block' : 'hidden'}`}>
        <Camera
          onTakePhoto={(dataUri: string) => {
            handleTakePhoto(dataUri);
          }}
        />

        <Button className="absolute left-0 top-0" onClick={() => setIsOpen(false)} placeholder={undefined}>
          Fechar
        </Button>
      </div>
    </>
  );
};

export default Cards;

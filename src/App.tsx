import Header from './components/organisms/header';
import Navigation from './components/organisms/navigation';

import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

import pages from './data/pages';

function App() {
  const [indexPage, setIndexPage] = useState(0);

  const [{ x, y, transform }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    transform: `translateY(-${indexPage * 100}%)`,
    //config: { mass: 5, tension: 500, friction: 80 },
  }));

  useEffect(() => {
    api.start({ transform: `translateY(-${indexPage * 100}%)` });
  }, [indexPage, api]);

  const setPage = (index: number) => () => {
    setIndexPage(index);
  };

  const handleDown = () => {
    setIndexPage((prevIndex) => (prevIndex === pages.length - 1 ? pages.length - 1 : prevIndex + 1));
  };

  const handleUp = () => {
    setIndexPage((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <div className="relative grid h-screen w-screen grid-rows-10 overflow-hidden bg-secondary text-white transition-all">
      <Header pages={pages} activeIndex={indexPage} setIndex={setPage} />

      <div className="row-span-9 overflow-hidden bg-gray-900">
        {pages.map(({ id, page }) => (
          <animated.div key={id} style={{ x, y, transform }} className="relative h-full w-full bg-main">
            {page}
          </animated.div>
        ))}
      </div>

      <Navigation handleUp={handleUp} handleDown={handleDown} />
    </div>
  );
}

export default App;

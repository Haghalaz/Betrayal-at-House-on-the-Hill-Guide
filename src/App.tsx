import Header from './components/organisms/header';
import Navigation from './components/organisms/navigation';

import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

import pages from './data/pages';

function App() {
  const [indexPage, setIndexPage] = useState(0);
  const [{ transform }, api] = useSpring(() => ({ transform: `translateY(0%)` }));

  useEffect(() => {
    api.start({ transform: `translateY(-${indexPage * 100}%)` });
  }, [indexPage, api]);

  const setPage = (index: number) => () => setIndexPage(index);

  return (
    <div className="relative grid h-screen w-screen grid-rows-10 overflow-hidden bg-secondary text-white transition-all">
      <Header pages={pages} activeIndex={indexPage} setIndex={setPage} />

      <div className="relative row-span-9 overflow-hidden bg-gray-900">
        {pages.map(({ id, page }) => (
          <animated.div key={id} style={{ transform }} className="relative h-full w-full bg-main">
            {page}
          </animated.div>
        ))}

        <Navigation activeIndex={indexPage} setIndex={setIndexPage} maxSize={pages.length - 1} />
      </div>
    </div>
  );
}

export default App;

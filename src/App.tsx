import { useState } from 'react';

import Header from '@organisms/header';
import Navigation from '@organisms/navigation';
import PageTemplate from './components/templates/pageTemplate';

import pagesList from './data/pages';

function App() {
  const [indexPage, setIndexPage] = useState(0);

  return (
    <div className="relative grid h-svh w-svw grid-rows-10 overflow-hidden bg-secondary text-white transition-all">
      <Header pages={pagesList} activeIndex={indexPage} setIndex={setIndexPage} />

      <div className="relative row-span-9 overflow-hidden bg-gray-900">
        {pagesList.map(({ id, page, background }) => (
          <PageTemplate key={id} activeIndex={indexPage} background={background}>
            {page}
          </PageTemplate>
        ))}

        <Navigation activeIndex={indexPage} setIndex={setIndexPage} maxSize={pagesList.length - 1} />
      </div>
    </div>
  );
}

export default App;

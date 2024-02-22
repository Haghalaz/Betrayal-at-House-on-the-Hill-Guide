import { render } from '@testing-library/react';
import PageTemplate from '.';

import pagesList from '@src/data/pages';

describe('PageTemplate Component', () => {
  pagesList.forEach((page, index) => {
    it(`renders correctly for test case ${index + 1}`, () => {
      const { queryByTestId } = render(
        <PageTemplate activeIndex={page.id} background={page.background}>
          {page.page}
        </PageTemplate>
      );

      if (page.background) {
        const backgroundElement = queryByTestId('background-video'); // Assuming you set a data-testid for BackgroundVideo component
        expect(backgroundElement).toBeTruthy();
      }
    });
  });
});

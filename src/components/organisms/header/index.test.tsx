import pagesList from '@src/data/pages';
import { fireEvent, render } from '@testing-library/react';
import Header from './';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { getByAltText, getByText } = render(<Header pages={pagesList} activeIndex={0} setIndex={() => {}} />);

    const logo = getByAltText('Betrayal at House on the Hill Logo');
    expect(logo).toBeTruthy();

    pagesList.forEach((page) => {
      const labelElement = getByText(page.label);
      expect(labelElement).toBeTruthy();
    });
  });

  it('calls setIndex when menu item is clicked', () => {
    const setIndexMock = jest.fn();

    const { getByText } = render(<Header pages={pagesList} activeIndex={0} setIndex={setIndexMock} />);

    pagesList.forEach((page) => {
      fireEvent.click(getByText(page.label));
      expect(setIndexMock).toHaveBeenCalledWith(page.id);
    });
  });
});

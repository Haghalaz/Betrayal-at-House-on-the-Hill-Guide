import { render } from '@testing-library/react';
import BackgroundVideo from '.';

describe('BackgroundVideo component', () => {
  it('renders without crashing', () => {
    const src = 'video.mp4';
    render(<BackgroundVideo src={src} />);
  });

  it('displays the correct video source', () => {
    const src = 'video.mp4';
    const { getByTestId } = render(<BackgroundVideo src={src} />);

    const videoElement = getByTestId('background-video');
    expect(videoElement).toBeTruthy();
    expect(videoElement.getAttribute('src')).toBe(src);
  });
});

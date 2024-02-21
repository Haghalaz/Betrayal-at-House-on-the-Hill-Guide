import { animated, useSpring } from '@react-spring/web';
import BackgroundVideo from '@src/components/atoms/backgroundVideo';
import checkMediaType from '@src/utils/functions/checkMediaType';
import { useEffect } from 'react';

interface PageTemplateProps {
  activeIndex: number;
  background: string;
  children: React.ReactNode;
}

const PageTemplate = ({ activeIndex, background, children }: PageTemplateProps) => {
  const [{ transform }, api] = useSpring(() => ({ transform: `translateY(0%)` }));

  useEffect(() => {
    api.start({ transform: `translateY(-${activeIndex * 100}%)` });
  }, [activeIndex, api]);

  const renderBackground =
    checkMediaType(background) === 'img' ? (
      <BackgroundVideo data-testid="background-video" src={background} />
    ) : checkMediaType(background) === 'video' ? (
      <BackgroundVideo data-testid="background-video" src={background} />
    ) : null;

  return (
    <animated.div style={{ transform }} className="relative h-full w-full bg-main">
      {children}

      {renderBackground}
    </animated.div>
  );
};

export default PageTemplate;

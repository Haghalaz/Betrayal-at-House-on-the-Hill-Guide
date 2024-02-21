interface BackgroundVideoProps {
  src: string;
}

const BackgroundVideo = ({ src }: BackgroundVideoProps) => {
  return (
    <video data-testid="background-video" src={src} className="absolute top-0 h-full w-full object-cover opacity-20" loop autoPlay>
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;

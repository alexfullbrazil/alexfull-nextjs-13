import { YoutubeVideoContainer } from './styles';

interface YoutubeVideoProps {
  url?: string;
}

export function YoutubeVideo({ url }: YoutubeVideoProps) {
  return (
    <YoutubeVideoContainer>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </YoutubeVideoContainer>
  );
}

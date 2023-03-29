import styled from 'styled-components';

export const YoutubeVideoContainer = styled.div`
  position: relative;
  padding-bottom: 50.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-bottom: 1em;
  aspect-ratio: 16/9;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

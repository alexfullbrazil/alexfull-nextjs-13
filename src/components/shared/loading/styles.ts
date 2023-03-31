import styled, { keyframes } from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 10;
  flex-direction: column;
  gap: var(--global-gap);
`;

export const Rotate = keyframes`
    from {
        transform: rotate(0deg) 
    }
    to {
        transform: rotate(360deg) 
    }
`;

export const Spin = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Rotate} 1s linear infinite;
  background: #fff;
  border-radius: 50%;
  border: 1px solid var(--lightGrey);
`;

export const Info = styled.div``;

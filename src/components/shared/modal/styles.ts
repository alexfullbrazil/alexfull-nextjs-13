import styled, { css, keyframes } from 'styled-components';

import { ModalProps } from './index';

export const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  z-index: ${(props) => (props.zIndex ? props.zIndex : 2)};
  display: flex;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: center;
  padding: var(--global-gap);

  ${(props) =>
    props.flat &&
    css`
      & {
        background: white;
      }
    `}
`;

export const ModalContainer = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth + 'px' : 480 + 'px'};
  background: white;
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + 'px' : 0 + 'px'};
  padding: var(--global-gap);
  box-shadow: var(--globalShadow);
  border-radius: var(--globalRadius);

  ${(props) =>
    props.flat &&
    css`
      & {
        padding: 0;

        border-radius: 0;
        box-shadow: none;
      }
    `}
`;

export const CloseButton = styled.div<ModalProps>`
  cursor: pointer;
  margin-bottom: 14px;
  align-self: flex-end;
`;

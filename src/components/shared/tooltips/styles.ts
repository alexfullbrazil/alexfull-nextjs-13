import styled, { css } from 'styled-components';

import { ToolTipsProps } from './index';

export const ToolTipsContent = styled.div<ToolTipsProps>`
  background: ${(props) =>
    props.background ? props.background : 'var(--dark-blue)'};
  color: ${(props) => (props.color ? props.color : 'var(--snow)')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 7px 15px;
  font-size: 13px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '999px'};
  width: ${(props) => (props.contentW ? props.contentW + 'px' : 'fit-content')};
  height: ${(props) =>
    props.contentH ? props.contentH + 'px' : 'fit-content'};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  opacity: ${(props) => (props.opacity ? props.opacity : 0)};
  pointer-events: none;
  font-family: var(--primaryFont);
  font-weight: 700;
  white-space: ${(props) => (props.textWrap ? props.textWrap : 'nowrap')};

  transition: 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:after {
    transition: 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  ${(props) =>
    props.position === 'top' &&
    css`
      & {
        top: 0;
        transform: translate(-50%, -100%);
        margin-top: ${-props.offset + 'px'};
        &:after {
          top: 100%;
          left: 50%;
          margin-top: -10px;
          margin-left: -6px;
          transform: translateY(-50%);
        }
      }
    `}

  ${(props) =>
    props.position === 'bottom' &&
    css`
      & {
        top: 100%;
        transform: translate(-50%, 0);
        margin-top: ${props.offset + 'px'};
        &:after {
          top: 0;
          left: 50%;
          margin-top: -6px;
          margin-left: -6px;
          transform: translateY(-50%);
        }
      }
    `}

    ${(props) =>
    props.position === 'left' &&
    css`
      & {
        left: 0;
        transform: translate(-100%, -50%);
        margin-left: ${-props.offset + 'px'};
        &:after {
          top: 50%;
          right: 0;
          margin-right: -3px;
          margin-top: -7px;
          transform: translateY(-50%);
          border-radius: 0 4px;
        }
      }
    `}

    ${(props) =>
    props.position === 'right' &&
    css`
      & {
        left: 100%;
        right: 0;
        transform: translate(0, -50%);
        margin-left: ${props.offset + 'px'};
        &:after {
          top: 50%;
          left: 0;
          margin-left: -3px;
          margin-top: -7px;
          transform: translateY(-50%);
          border-radius: 0 4px;
        }
      }
    `}

        &:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: ${(props) =>
      props.background ? props.background : 'var(--dark-blue)'};
    transform-origin: center;
    z-index: -1;
    transform: rotate(-45deg);
  }
`;

export const ToolTipsWrapper = styled.div<ToolTipsProps>`
  position: relative;
  width: ${(props) => (props.width ? props.width + 'px' : 'fit-content')};
  height: ${(props) => (props.height ? props.height + 'px' : 'fit-content')};

  &:hover {
    ${ToolTipsContent} {
      opacity: 1;
    }
  }
`;

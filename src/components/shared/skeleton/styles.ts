import styled, { css, keyframes } from 'styled-components';

import { SkeletonGridProps, SkeletonColProps, SkeletonBoxProps } from './index';

export const SkeletonGridWrapper = styled.div<SkeletonGridProps>`
  display: flex;
  width: 100%;
  gap: ${(props) => (props.gap ? props.gap + 'px' : 'var(--global-gap)')};
  height: ${(props) => (props.height ? props.height + 'px' : '')};
`;

export const SkeletonColWrapper = styled.div<SkeletonColProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex: ${(props) => (props.size ? props.size : 1)};
`;

export const SkeletonBoxWrapper = styled.div<SkeletonBoxProps>`
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;

  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  width: ${(props) => (props.width ? props.width + '%' : '100%')};
  height: ${(props) => (props.height ? props.height + 'px' : '10px')};

  margin-top: ${(props) => (props.marginTop ? props.marginTop + 'px' : '')};
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + 'px' : ''};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + 'px' : ''};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + 'px' : '')};

  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius + 'px' : '4px'};

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      width: 100%;
      height: 100%;
      max-width: ${props.size + 'px'};
      max-height: ${props.size + 'px'};
    `}
`;

import { ReactNode } from 'react';

import {
  SkeletonGridWrapper,
  SkeletonColWrapper,
  SkeletonBoxWrapper,
} from './styles';

export interface SkeletonGridProps {
  children?: ReactNode;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  direction?: string;

  gap?: number;
}

export interface SkeletonColProps {
  children?: ReactNode;
  size?: number;
}

export interface SkeletonBoxProps {
  circle?: boolean;
  width?: number;
  height?: number;
  size?: number;
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export function Skeleton({
  children,
  height,
  gap,
  direction,
}: SkeletonGridProps) {
  return (
    <SkeletonGridWrapper height={height} gap={gap} direction={direction}>
      {children}
    </SkeletonGridWrapper>
  );
}

export function Col({ children, size }: SkeletonColProps) {
  return <SkeletonColWrapper size={size}>{children}</SkeletonColWrapper>;
}

export function Box({
  circle,
  width,
  height,
  size,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  borderRadius,
}: SkeletonBoxProps) {
  return (
    <SkeletonBoxWrapper
      circle={circle}
      width={width}
      height={height}
      size={size}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      borderRadius={borderRadius}
    />
  );
}

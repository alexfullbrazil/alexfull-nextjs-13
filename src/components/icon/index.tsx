import React, { ReactNode } from 'react';
import { ReactSVG } from 'react-svg';

import { IconWrapper } from './styles';

export interface IconProps {
  onClick?(arg: any): void;
  file?: string;
  fill?: string;
  stroke?: string;
  color?: string;
  background?: string;
  backgroundHover?: string;
  fileHover?: string;
  cursor?: string;
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  width?: number;
  height?: number;
  size?: number;
  children?: ReactNode;
}

const filePath = '/assets/icons/';

export default function Icon({
  onClick,
  file,
  fill,
  stroke,
  color,
  background,
  backgroundHover,
  fileHover,
  cursor,
  borderRadius,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  width,
  height,
  size,
  children,
}: IconProps) {
  return (
    <IconWrapper
      onClick={onClick}
      aria-label={file}
      cursor={cursor}
      width={width}
      height={height}
      size={size}
      fill={fill}
      stroke={stroke}
      color={color}
      background={background}
      backgroundHover={backgroundHover}
      fileHover={fileHover}
      borderRadius={borderRadius}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      <ReactSVG wrapper="span" src={filePath + file + '.svg'} />
      {children}
    </IconWrapper>
  );
}

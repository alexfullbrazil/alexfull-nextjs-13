import { ReactNode } from 'react';

import { ToolTipsContent, ToolTipsWrapper } from './styles';

export interface ToolTipsProps {
  content: string;
  color?: string;
  textWrap?: string;
  background?: string;
  borderRadius?: string;
  offset?: number | any;
  className?: string;
  textAlign?: string;
  contentW?: number;
  contentH?: number;
  width?: number;
  height?: number;
  opacity?: number;
  zIndex?: number;
  children?: ReactNode;
  position: 'top' | 'right' | 'bottom' | 'left';
}

export default function ToolTips({
  content,
  color,
  textWrap,
  background,
  borderRadius,
  offset,
  opacity,
  className,
  contentW,
  textAlign,
  contentH,
  width,
  height,
  position,
  zIndex,
  children,
}: ToolTipsProps) {
  return (
    <div>
      <ToolTipsWrapper
        position={position}
        zIndex={zIndex}
        height={height}
        width={width}
        content={content}
      >
        {children}
        <ToolTipsContent
          content={content}
          offset={offset}
          background={background}
          color={color}
          textWrap={textWrap}
          borderRadius={borderRadius}
          opacity={opacity}
          className={className}
          contentW={contentW}
          contentH={contentH}
          position={position}
          textAlign={textAlign}
        >
          {content}
        </ToolTipsContent>
      </ToolTipsWrapper>
    </div>
  );
}

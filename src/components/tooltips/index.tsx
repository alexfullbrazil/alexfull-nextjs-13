import { ReactNode } from 'react';

import { ToolTipsContent, ToolTipsWrapper } from './styles';

export interface ToolTipsProps {
  content?: string;
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
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export default function ToolTips({
  content,
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
      >
        {children}
        <ToolTipsContent
          offset={offset}
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

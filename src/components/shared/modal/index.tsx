import Svg from '@/components/shared/svg';
import { ReactNode } from 'react';
import { ModalWrapper, ModalContainer, CloseButton } from './styles';

export interface ModalProps {
  children?: ReactNode;
  zIndex?: number;
  align?: string;
  marginTop?: number;
  maxWidth?: number;
  closeButton?: boolean;
  flat?: boolean;
  onClick?(arg: any): void;
}

export default function Modal({
  children,
  zIndex,
  align,
  marginTop,
  maxWidth,
  closeButton,
  flat,
  onClick,
}: ModalProps) {
  return (
    <>
      <ModalWrapper zIndex={zIndex} align={align} flat={flat}>
        <ModalContainer marginTop={marginTop} maxWidth={maxWidth} flat={flat}>
          {closeButton && (
            <CloseButton onClick={onClick}>
              <Svg
                src="/assets/icons/clear.svg"
                color="var(--dark-blue)"
                size={38}
              />
            </CloseButton>
          )}
          {children}
        </ModalContainer>
      </ModalWrapper>
    </>
  );
}

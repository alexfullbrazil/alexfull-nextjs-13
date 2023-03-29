import Svg from '@/components/shared/svg';
import { LoadingWrapper, Spin, Info } from './styles';

interface LoadingProps {
  info?: string;
}

export default function Loading({ info }: LoadingProps) {
  return (
    <LoadingWrapper>
      <Spin>
        <Svg
          size={32}
          src="/assets/icons/spinner.svg"
          color="var(--darkBlue)"
        />
      </Spin>
      <Info>{info}</Info>
    </LoadingWrapper>
  );
}

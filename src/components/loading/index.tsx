import Icon from '@/components/icon';
import { LoadingWrapper, Spin, Info } from './styles';

interface LoadingProps {
  info?: string;
}

export default function Loading({ info }: LoadingProps) {
  return (
    <LoadingWrapper>
      <Spin>
        <Icon size={32} file="spinner" color="var(--darkBlue)" />
      </Spin>
      <Info>{info}</Info>
    </LoadingWrapper>
  );
}

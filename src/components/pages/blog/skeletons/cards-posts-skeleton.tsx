import { Skeleton, Col, Box } from '@/components/shared/skeleton';

export default function CardsPostsSkeleton() {
  return (
    <Skeleton height={435}>
      <Col>
        <Box width={100} height={200} />
        <Box width={90} height={24} />
        <Box width={75} height={24} />
        <Box marginTop={18} width={95} height={18} />
        <Box width={95} height={18} />
        <Box width={85} height={18} />
        <Box size={42} circle marginTop={28} />
      </Col>
    </Skeleton>
  );
}

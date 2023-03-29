import { Skeleton, Col, Box } from '@/components/shared/skeleton';

export default function FeaturedPostsSkeleton() {
  return (
    <Skeleton height={435}>
      <Col size={1}>
        <Box height={22} width={25} marginTop={12} marginBottom={18} />
        <Box width={95} height={28} />
        <Box width={90} height={28} />
        <Box width={75} height={28} />
        <Box marginTop={28} width={95} height={22} />
        <Box width={95} height={22} />
        <Box width={85} height={22} />
        <Box size={42} circle marginTop={28} />
      </Col>
      <Col size={2}>
        <Box height={435} />
      </Col>
    </Skeleton>
  );
}

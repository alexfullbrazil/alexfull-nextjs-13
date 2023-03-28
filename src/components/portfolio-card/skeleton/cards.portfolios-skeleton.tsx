import { Skeleton, Col, Box } from '@/components/skeleton';

export default function CardsPortfoliosSkeleton() {
  return (
    <Skeleton height={520}>
      <Col>
        <Box width={100} height={360} />
        <Box marginTop={18} width={95} height={18} />
        <Box width={95} height={18} />
        <Box width={85} height={18} />
        <Box width={40} height={32} borderRadius={999} marginTop={18} />
      </Col>
    </Skeleton>
  );
}

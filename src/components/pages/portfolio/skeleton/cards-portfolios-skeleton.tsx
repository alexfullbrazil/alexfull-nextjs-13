import { Skeleton, Col, Box } from '@/components/shared/skeleton';

export default function CardsPortfoliosSkeleton() {
  return (
    <Skeleton>
      <Col>
        <Box height={370} />
      </Col>
    </Skeleton>
  );
}

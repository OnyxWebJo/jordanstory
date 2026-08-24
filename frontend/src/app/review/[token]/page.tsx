import { ReviewFormClient } from '@/components/reviews/ReviewFormClient';
import { INITIAL_COMPLETED_BOOKINGS } from '@/data/reviewRequestsData';

interface ReviewPageProps {
  params: Promise<{ token: string }>;
}

export async function generateStaticParams() {
  return INITIAL_COMPLETED_BOOKINGS.map((req) => ({
    token: req.token,
  }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const resolvedParams = await params;
  return <ReviewFormClient token={resolvedParams.token} />;
}

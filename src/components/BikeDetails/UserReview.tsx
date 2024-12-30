/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rating } from "@smastrom/react-rating";
import { Card, CardContent } from "../ui/card";
import ReviewCard from "./ReviewCard";
import WriteReview from "./WriteReview";
import { useGetAllReviewsForSingleBikeQuery } from "@/redux/api/review/reviewApi";
import useDecodeToken from "@/hooks/useDecodeToken";

const UserReview = ({ bikeId }) => {
  const user: any = useDecodeToken();
  const { data: reviews, isFetching } =
    useGetAllReviewsForSingleBikeQuery(bikeId);
  const averageRating = parseInt(reviews?.data?.averageRating?.toFixed(2));
  console.log(reviews);
  return (
    <Card className="p-5">
      <CardContent className="flex flex-col md:flex-row md:items-center md:justify-around gap-4">
        {!isFetching && reviews?.data?.reviews?.length !== 0 && (
          <div className="">
            <div className="flex flex-col items-center justify-center py-5">
              <h3 className="text-2xl font-semibold">Average</h3>
              <h3 className="text-3xl">{averageRating}/5</h3>
              <Rating
                style={{ maxWidth: 100 }}
                value={averageRating}
                readOnly
              />
            </div>
          </div>
        )}
        <div className=" h-[300px] overflow-y-auto space-y-5">
          {!isFetching && reviews?.data?.reviews?.length ? (
            reviews?.data?.reviews?.map((review) => (
              <ReviewCard key={review?._id} review={review} />
            ))
          ) : (
            <p className="text-red-500 text-center">No Review posted yet!</p>
          )}
        </div>
      </CardContent>
      {user?.userId && <WriteReview bikeId={bikeId} />}
    </Card>
  );
};

export default UserReview;

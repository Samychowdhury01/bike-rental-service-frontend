/* eslint-disable @typescript-eslint/no-explicit-any */
import UserReviewTable from "@/components/dashboard/ReviewTable";
import SectionHeading from "@/components/ui/SectionHeading";
import useDecodeToken from "@/hooks/useDecodeToken";
import {
  useGetAllReviewsQuery,
  useGetAllUserReviewsQuery,
} from "@/redux/api/review/reviewApi";
import { useState } from "react";
import CustomPagination from "@/components/ui/CustomPagination";
import { TQuery } from "@/types/query.types";

const ReviewPage = () => {
  const [query, setQuery] = useState<TQuery>({
    limit: 10,
    page: 1,
  });
  const user: any = useDecodeToken();
  const { data: userReviewData, isFetching: isUserReviewFetching } =
    useGetAllUserReviewsQuery(query);
  const { data: allReviewsData, isFetching: isAllReviewFetching } =
    useGetAllReviewsQuery(query);

  const totalPages =
    user?.role === "admin"
      ? allReviewsData?.meta?.totalPage
      : userReviewData?.meta?.totalPage;

  return (
    <>
      <SectionHeading text="" title="All Reviews" width="w-1/6" />
      <UserReviewTable
        data={user?.role === "admin" ? allReviewsData : userReviewData}
        isFetching={
          user?.role === "admin" ? isAllReviewFetching : isUserReviewFetching
        }
      />
      {/* paginate */}

      {totalPages > 1 && (
        <CustomPagination
          query={query}
          setQuery={setQuery}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default ReviewPage;

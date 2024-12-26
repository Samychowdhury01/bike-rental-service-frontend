import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetSingleBikeQuery } from "@/redux/api/bike/bikeApi";
import Spinner from "../ui/Spinner";
import ReactMarkdown from "react-markdown";
import { Card, CardContent } from "../ui/card";
import UserReview from "./UserReview";

const TabContainer = ({ id }) => {
  
  const { data, isLoading } = useGetSingleBikeQuery(id);
  return (
    <>
      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="description">Details About Bike</TabsTrigger>
          <TabsTrigger value="review">User Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {data?.data?.details ? (
                <Card>
                  <CardContent className="p-2 md:p-5">
                    <ReactMarkdown>{data?.data?.details}</ReactMarkdown>
                  </CardContent>
                </Card>
              ) : (
                <p className="text-red-500 text-center">No Details Found!!</p>
              )}
            </>
          )}
        </TabsContent>
        <TabsContent value="review">
          <UserReview bikeId={id}/>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TabContainer;

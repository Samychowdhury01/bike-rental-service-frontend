import { Rating } from "@smastrom/react-rating";
import { Card, CardContent } from "../ui/card";

const ReviewCard = ({ review }) => {
  return (
    <Card>
      <CardContent>
        <div className="space-y-3 p-3">
          <h4 className="text-sm font-semibold">{review?.userName}</h4>
          <Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly />
          <p className="text-sm">{review?.review}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

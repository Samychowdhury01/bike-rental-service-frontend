"use client";

import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAddReviewMutation } from "@/redux/api/review/reviewApi";
import Swal from "sweetalert2";

const WriteReview = ({ bikeId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [addReview] = useAddReviewMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bikeDetails = { rating, review, bikeId };
    const response = await addReview(bikeDetails);

    if (response?.data?.success) {
      Swal.fire({
        title: "Thank You",
        text: "Review successfully posted!",
        icon: "success",
      });
      setRating(null)
      setReview(null)
    } else {
      Swal.fire({
        title: "Ops!",
        text: "Failed to post review",
        icon: "success",
      });
    }
  };

  return (
    <Card className="w-full mt-10">
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Rating
              value={rating}
              onChange={setRating}
              style={{ maxWidth: 150 }}
              isRequired
              className="mx-auto sm:mx-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              id="review"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={!rating || !review} type="submit">
            Submit Review
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default WriteReview;

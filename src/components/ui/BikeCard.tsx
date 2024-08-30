/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import UpdateBike from "../bike/UpdateBike";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useDeleteBikeMutation } from "@/redux/api/bike/bikeApi";
import { Link, Navigate } from "react-router-dom";

const BikeCard = ({ role, item }: { role: string; item: any }) => {
  const [deleteBike] = useDeleteBikeMutation();
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteBike(id).unwrap();
        if (response.data) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: response.error.data.message || "Failed to delete the bike",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <>
      <Card>
        <CardHeader>
          <div className="md:h-[250px] w-full mb-2">
            <img
              src={item.image}
              alt=""
              className="object-fill h-full w-full rounded-md shadow-md"
            />
          </div>
          <CardTitle>{item.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-semibold mr-1">Description:</span>{" "}
            {item.description}
          </p>
          <p>
            <span className="font-semibold mr-1">Brand:</span>
            {item.brand}
          </p>
          <p>
            <span className="font-semibold mr-1">Model:</span>
            {item.model}
          </p>
          <p>
            <span className="font-semibold mr-1">CC:</span>
            {item.cc}
          </p>
          <p>
            <span className="font-semibold mr-1">Year:</span>
            {item.year}
          </p>
          <p>
            <span className="font-semibold mr-1">Price Per Hour:</span>{" "}
            {item.pricePerHour}TK
          </p>
        </CardContent>
        <CardFooter>
          {role === "admin" ? (
            <div className="flex items-center gap-2">
              <UpdateBike item={item} />
              <Button
                onClick={() => handleDelete(item._id)}
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          ) : (
            <Button>
              <Link to={`/details/${item._id}`}>View Details</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default BikeCard;

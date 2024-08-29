import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const BikeCard = ({
  img,
  name,
  cc,
  description,
  model,
  pricePerHour,
  year,
  brand,
  role,
  id
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="md:h-[250px] w-full mb-[6px]">
            <img
              src={img}
              alt=""
              className="object-fill h-full w-full rounded-md shadow-md"
            />
          </div>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Brand:</span>
            {brand}
          </p>
          <p>
            <span className="font-semibold">Model:</span>
            {model}
          </p>
          <p>
            <span className="font-semibold">CC:</span> {cc}
          </p>
          <p>
            <span className="font-semibold">Year:</span> {year}
          </p>
          <p>
            <span className="font-semibold">Price Per Hour:</span>{" "}
            {pricePerHour}TK
          </p>
        </CardContent>
        <CardFooter>
         
          {role === 'admin'? 
            <div className="flex items-center gap-2">
              <Button variant='outline'>Edit</Button> 
              <Button variant="destructive">Delete</Button>
            </div>
            :
            <Button>View Details</Button>
          }
        </CardFooter>
      </Card>
    </>
  );
};

export default BikeCard;

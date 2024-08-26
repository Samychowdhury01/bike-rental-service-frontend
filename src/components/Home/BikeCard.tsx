import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";


const BikeCard = ({img}) => {
  return (
    <>
      <Card>
        <CardHeader>
           <div className="md:h-[250px] w-full mb-[6px]">
           <img src={img} alt="" className="object-fill h-full w-full rounded-md shadow-md" />
           </div>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>card description goes here</p>
        </CardContent>
        <CardFooter>
          <Button>View Details</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BikeCard;

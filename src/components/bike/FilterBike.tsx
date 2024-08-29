import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const FilterBike = ({ setQuery }: { setQuery: (query: any) => void }) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    const query: any = {};
    if (brand) {
      query.brand = brand;
    }

    if (model) {
      query.model = model;
    }

    if (isAvailable === "available") {
      query.isAvailable = true;
    }
    setQuery(query)
    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
        <CiFilter className="text-lg"/>
          <p>Filter</p>
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Bikes</DialogTitle>
          <DialogDescription className="text-gray-500">
            Filter bike based on brand, model, availability.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Brand
            </Label>
            <Input
              onChange={(e) => setBrand(e.target.value)}
              id="brand"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model" className="text-right">
              Model
            </Label>
            <Input
              onChange={(e) => setModel(e.target.value)}
              id="model"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="availability" className="text-right">
              Availability
            </Label>
            <Select onValueChange={setIsAvailable}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select based on availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Availability</SelectLabel>
                  <SelectItem value="available">Available</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Filter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterBike;

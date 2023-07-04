"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface CarcardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarcardProps) => {
  const {
    city_mpg,
    class: type,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  );
};

export default CarCard;

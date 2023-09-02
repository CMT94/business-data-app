import React from "react";

import SingleUser from "../assets/single.png";
import DoubleUser from "../assets/double.png";
import TripleUser from "../assets/triple.png";

import Card from "./ui/Card";

const services = [
  {
    id: "s1",
    title: "Single user",
    options: ["500GB Storage", "1 Granted User", "Send up to 2GB"],
    price: 149,
    image: SingleUser,
  },
  {
    id: "s2",
    title: "Double user",
    options: ["1TB Storage", "2 Granted Users", "Send up to 4GB"],
    price: 295,
    image: DoubleUser,
  },
  {
    id: "s3",
    title: "Triple user",
    options: ["2TB Storage", "3 Granted Users", "Send up to 8GB"],
    price: 440,
    image: TripleUser,
  },
];

const Services = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, serviceIndex) => (
          <Card
            key={service.id}
            index={serviceIndex}
            image={service.image}
            title={service.title}
            price={service.price}
            options={service.options}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

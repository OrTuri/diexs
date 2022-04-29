"use strict";
// Part 1

// 1+2+3

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda = (carInventory) => {
  for (let car of carInventory) {
    if (car.car_make.toLowerCase() === "honda") {
      return `This is a ${car.car_make} ${car.car_model} from ${car.car_year}`;
    }
  }
};

console.log(getCarHonda(inventory));

// Part 2

const sortInventory = (inventory) => {
  inventory.sort((a, b) => {
    return a.car_year > b.car_year ? 1 : -1;
  });
};
sortInventory(inventory);

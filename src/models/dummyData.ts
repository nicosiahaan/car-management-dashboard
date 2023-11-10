interface CarList {
  id: number;
  type: string;
  brand: string;
  year: number;
}

const cars: CarList[] = [
  {
    id: 1,
    type: "small",
    brand: "Avanza",
    year: 2022,
  },
  {
    id: 2,
    type: "medium",
    brand: "Veloz",
    year: 2022,
  },
  {
    id: 3,
    type: "large",
    brand: "Hyundai",
    year: 2022,
  },
];

module.exports = cars;

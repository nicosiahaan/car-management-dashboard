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
    brand: "Ioniq5",
    year: 2022,
  },
  {
    id: 2,
    type: "medium",
    brand: "Mazda",
    year: 2022,
  },
  {
    id: 3,
    type: "medium",
    brand: "Suzuki",
    year: 2022,
  },
];

module.exports = cars;

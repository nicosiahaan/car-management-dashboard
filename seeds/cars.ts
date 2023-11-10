import { Knex } from "knex";
const CAR_BRANDS = "car_brands";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(CAR_BRANDS).del();

  // Inserts seed entries
  await knex(CAR_BRANDS).insert([
    {
      id: 1,
      type: "small",
      name: "Car1",
      brand: "Ioniq5",
      year: 2022,
      rent_price: 100000,
      img_path: "path/to/image1.jpg",
    },
    {
      id: 2,
      type: "medium",
      name: "Car2",
      brand: "Mazda",
      year: 2021,
      rent_price: 300000,
      img_path: "path/to/image2.jpg",
    },
    {
      id: 3,
      type: "medium",
      name: "Car3",
      brand: "Suzuki",
      year: 2020,
      rent_price: 700000,
      img_path: "path/to/image3.jpg",
    },
  ]);
}

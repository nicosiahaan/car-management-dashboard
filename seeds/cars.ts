import { Knex } from "knex";
const CAR_BRANDS = "car_brands"

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(CAR_BRANDS).del();

    // Inserts seed entries
    await knex(CAR_BRANDS).insert([
        { id_car_brand: 1, name: "TOYOTA" },
        { id_car_brand: 2, name: "MITSUBISHI" },
        { id_car_brand: 3, name: "PROTON" }
    ]);
};

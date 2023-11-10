import { Model, ModelObject } from "objection";

export class CarsData extends Model {
  id!: number;
  type!: string;
  name!: string;
  brand!: string;
  year!: number;
  rent_price!: number;
  img_path!: string;

  static get tableName() {
    return "cars";
  }
}

export type CarsDataModel = ModelObject<CarsData>;

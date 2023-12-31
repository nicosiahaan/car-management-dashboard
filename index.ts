import express, { Express } from "express";
import carRouter from "./src/routes/carRouter";
import knex from "knex";
import { Model } from "objection";
import handleLogger from "./src/middleware/handlerLogger";

const app: Express = express();

const knexInstance = knex({
  client: "pg",
  connection: {
    database: "cars_db",
    user: "postgres",
    password: "mysecretpassword",
  },
});
const PORT: number = 3000;

Model.knex(knexInstance);

app.set("view engine", "ejs");

app.set("views", "./src/views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(handleLogger);

app.use("/v1/cars", carRouter);

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});

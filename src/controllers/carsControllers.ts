import express, { Request, Response } from "express";
import { CarsData } from "../models/carsData";
const Request = require("express").Request;
const Response = require("express").Response;
const { v4: uuidv4 } = require("uuid");
const carListData = require("./../models/dummyData");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dghqmwtd7",
  api_key: "996288564346582",
  api_secret: "a0_sn8f8y3i546a6L_PfZF2bvLo",
});

interface CarList {
  id: number;
  type: string;
  name: string;
  brand: string;
  year: number;
  rent_price: number;
  img_path: string;
}

const get = async (req: Request, res: Response) => {
  try {
    const { brand = "" } = req.query || {};
    const cars = brand
      ? await CarsData.query().where("brand", "like", `%${brand}%`)
      : await CarsData.query();
    res.status(200).json({ cars });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const reqBody: any = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Cannot upload empty file" });
    }

    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    cloudinary.v2.uploader.upload(file, async (err: any, result: any) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const newObjCarWithId: CarList = {
        ...reqBody,
        img_path: result.url,
      };

      const newCar = await CarsData.query().insert(newObjCarWithId);
      res.status(201).json(newCar);
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id;

    const car = await CarsData.query().findById(carId);

    if (car) {
      return res.status(200).json(car);
    } else {
      return res.status(404).json({ message: "Car not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id;
    const deletedCar = await CarsData.query().deleteById(carId);
    if (deletedCar) {
      const cars = await CarsData.query();
      return res
        .status(200)
        .json({ message: "Car successfully deleted", cars });
    } else {
      return res.status(404).json({ message: "Failed to delete" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const reqBody: any = req.body;
    const { id } = req.params;

    if (!req.file) {
      const updatedCar = await CarsData.query().patchAndFetchById(id, reqBody);
      return res.status(200).json(updatedCar);
    }

    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    cloudinary.v2.uploader.upload(file, async (err: any, result: any) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const newObjCarWithId: CarList = {
        ...reqBody,
        img_path: result.url,
      };

      const updatedCar = await CarsData.query().patchAndFetchById(
        id,
        newObjCarWithId
      );
      res.status(200).json(updatedCar);
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { get, getById, post, deleteById, updateById };

import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";

const inserItem = async (item: Car) => {
  const responseItem = await ItemModel.create(item);
  return responseItem;
};

export { inserItem };

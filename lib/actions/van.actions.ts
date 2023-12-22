"use server";

import { CreateVanParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/users.model";
import Van from "../database/models/van.model";

export const createVan = async ({ van, userId, path }: CreateVanParams) => {
  try {
    await connectToDatabase();
    const creator = await User.findById(userId);

    if (!creator) {
      throw new Error("Creator not found");
    }

    console.log({
      creator: userId,
    });

    const newVan = await Van.create({ ...van, creator: userId });

    return JSON.parse(JSON.stringify(newVan));
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

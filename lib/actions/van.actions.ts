"use server";

import {
  CreateVanParams,
  DeleteVanParams,
  GetAllVansParams,
  UpdateVanParams,
} from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/users.model";
import Van from "../database/models/van.model";
import { revalidatePath } from "next/cache";

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

// UPDATE
export async function updateVan({ userId, van, path }: UpdateVanParams) {
  console.log("This is what we are looking for");
  console.log(await Van.findById(van._id));
  try {
    await connectToDatabase();

    const vanToUpdate = await Van.findById(van._id);
    if (!vanToUpdate || vanToUpdate.creator.toHexString() !== userId) {
      throw new Error("Unauthorized or event not found");
    }

    const updatedVan = await Van.findByIdAndUpdate(
      van._id,
      { ...van },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedVan));
  } catch (error) {
    handleError(error);
  }
}

export const getVanById = async (vanId: string) => {
  try {
    await connectToDatabase();

    const van = await Van.findById(vanId);

    if (!van) {
      throw new Error("No Van Found");
    }

    return JSON.parse(JSON.stringify(van));
  } catch (error) {
    handleError(error);
  }
};
const populateVan = (query: any) => {
  return query.populate({
    path: "creator",
    model: User,
    select: "_id firstName lastName",
  });
};

export const getAllVans = async ({
  query,
  limit = 6,
  page,
  vanType,
}: GetAllVansParams) => {
  try {
    await connectToDatabase();

    const conditions = {};

    const vansQuery = Van.find(conditions);

    const vans = await populateVan(vansQuery);
    const vansCount = await Van.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(vans)),
      totalPages: Math.ceil(vansCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

// DELETE
export async function deleteVan({ vanId, path }: DeleteVanParams) {
  try {
    await connectToDatabase();

    const deletedEvent = await Van.findByIdAndDelete(vanId);
    if (deletedEvent) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

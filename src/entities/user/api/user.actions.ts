"use server";

import { connectToDatabase } from "@/src/shared/lib/database";
import { handleError } from "@/src/shared/lib/utils";
import { CreateUserParams, UpdateUserParams } from "@/src/shared/model/types";
import { revalidatePath } from "next/cache";

import Expense from "../../expense/model/expense.model";
import User from "../model/user.model";

export async function createUser (user: CreateUserParams) {
  try {
    await connectToDatabase();
    if (!user.lastName) {
      const newUser = await User.create({ ...user, lastName: "" });

      return JSON.parse(JSON.stringify(newUser));
    }
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById (userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser (clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("User update failed");
    }
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser (clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Unlink relationships
    await Promise.all([
      // Update the 'expenses' collection to remove references to the user
      Expense.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organizer: userToDelete._id } }
      )
    ]);

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);

    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

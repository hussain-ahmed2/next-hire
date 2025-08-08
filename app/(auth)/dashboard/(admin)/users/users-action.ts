"use server";

import User from "@/models/User";
import { IUser } from "@/types/user";

export async function getAllUsers() {
	try {
		const users: IUser[] = await User.find({});
		return users;
	} catch (error) {
		console.error("Error fetching users:", error);
		return [];
	}
}

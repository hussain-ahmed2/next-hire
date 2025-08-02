"use server";

import connectDB from "@/lib/db";
import { validateToken } from "@/lib/jwt";
import User, { UserDocument } from "@/models/User";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export async function getUser(): Promise<IUser | null> {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get("token")?.value || null;

		if (!token) return null;

		const { id } = validateToken(token) as { id: string };
		if (!id) return null;

		await connectDB();

		const user: UserDocument = await User.findById(id).select("-password");
		if (!user) return null;

		return {
			name: user.name,
			email: user.email,
			password: user.password,
			avatar: user.avatar,
			role: user.role,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			slug: user.slug,
			bio: user.bio,
			_id: user._id.toString(),
		};
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function logout() {
	try {
		const cookieStore = await cookies();
		cookieStore.delete("token");

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}

"use server";

import connectDB from "@/lib/db";
import { validateToken } from "@/lib/jwt";
import { EditProfileSchema, editProfileSchema, getErrors } from "@/lib/validation-schema";
import User, { UserDocument } from "@/models/User";
import { IUser } from "@/types/user";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function getUser(): Promise<IUser | null> {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get("token")?.value || null;

		if (!token) return null;

		const { id } = validateToken(token) as { id: string };
		if (!id) return null;

		await connectDB();

		const user: UserDocument | null = await User.findById(id);
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

type EditProfileErrors = {
	name?: string;
	email?: string;
	bio?: string;
	oldPassword?: string;
	newPassword?: string;
	avatar?: string;
};

export type EditProfileState = {
	success: boolean;
	errors?: EditProfileErrors;
	form?: EditProfileSchema;
};

export async function updateUser(prevState: EditProfileState, formData: FormData) {
	try {
		const credentials = Object.fromEntries(formData) as EditProfileState["form"];
		const { success, data, error } = await editProfileSchema.safeParseAsync(credentials);

		if (!success) {
			return { ...prevState, success: false, errors: getErrors(error), form: credentials };
		}

		await connectDB();

		const user = await getUser();

		if (!user) {
			return { ...prevState, success: false, errors: { email: "User not found" }, form: data };
		}

		if (data?.oldPassword && !(await bcrypt.compare(data.oldPassword, user.password))) {
			return { ...prevState, success: false, errors: { oldPassword: "Incorrect password" }, form: data };
		}

		const updatedData = { ...data, password: data?.newPassword ? await bcrypt.hash(data.newPassword, await bcrypt.genSalt(10)) : undefined };

		const updatedUser = await User.findOneAndUpdate({ _id: user._id }, updatedData, { new: true, upsert: true });

		if (!updatedUser) {
			return { ...prevState, success: false, errors: { email: "Failed to update user" }, form: data };
		}

		return { ...prevState, success: true, form: data };
	} catch (error) {
		console.error(error);
		return { ...prevState, success: false };
	}
}

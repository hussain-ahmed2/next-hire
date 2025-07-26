"use server";

import connectDB from "@/lib/db";
import { getErrors, LoginSchema, loginSchema } from "@/lib/validation-schema";
import User, { UserDocument } from "@/models/User";
import { cookies } from "next/headers";

type Errors = {
	email?: string;
	password?: string;
};

export type LoginState = {
	errors: Errors;
	form: LoginSchema;
	success: boolean;
};

export async function login(prevState: LoginState, formData: FormData) {
	try {
		const credentials = Object.fromEntries(formData) as LoginState["form"];
		const { success, data, error } = await loginSchema.safeParseAsync(credentials);

		if (!success) {
			return { ...prevState, errors: getErrors(error), form: credentials, success: false };
		}

		await connectDB();

		const user: UserDocument | null = await User.findOne({ email: data.email });

		if (!user) {
			return { ...prevState, errors: { email: "User not found" }, form: data, success: false };
		}

		const isMatch = await user.comparePassword(data.password);

		if (!isMatch) {
			return { ...prevState, errors: { password: "Incorrect password" }, form: data, success: false };
		}

		const token = user.generateToken();

		if (!token) {
			return { ...prevState, errors: { email: "Failed to generate token" }, form: data, success: false };
		}

		const cookieStore = await cookies();

		cookieStore.set("token", token);

		if (!cookieStore) {
			return { ...prevState, errors: { email: "Failed to set cookie" }, form: data, success: false };
		}

		return { ...prevState, errors: {}, form: data, success: true };
	} catch (error) {
		console.error(error);
		return { ...prevState, success: false };
	}
}

"use server";

import connectDB from "@/lib/db";
import { getErrors, RegisterSchema, registerSchema } from "@/lib/validation-schema";
import User, { UserDocument } from "@/models/User";
import { cookies } from "next/headers";

type Errors = {
	name?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
};

export type RegisterState = {
	errors: Errors;
	form: RegisterSchema;
	success: boolean;
};

export async function register(prevState: RegisterState, formData: FormData) {
	try {
		const credentials = Object.fromEntries(formData) as RegisterState["form"];
		const { success, data, error } = await registerSchema.safeParseAsync(credentials);

		if (!success) {
			return { ...prevState, success: false, errors: getErrors(error), form: credentials };
		}

		await connectDB();

		const userExists = await User.findOne({ email: data.email });
		if (userExists) {
			return {
				...prevState,
				success: false,
				errors: { email: "User already exists" },
				form: data,
			};
		}

		const user: UserDocument = new User(data);
		await user.save();

		if (!user) {
			return {
				...prevState,
				success: false,
				errors: { email: "Failed to create user" },
				form: data,
			};
		}

		const token = user.generateToken();

		if (!token) {
			return {
				...prevState,
				success: false,
				errors: { email: "Failed to generate token" },
				form: data,
			};
		}

		const cookieStore = await cookies();
		cookieStore.set("token", token);

		if (!cookieStore) {
			return {
				...prevState,
				success: false,
				errors: { email: "Failed to set cookie" },
				form: data,
			};
		}

		return { ...prevState, success: true, errors: {}, form: data };
	} catch (error) {
		console.error(error);
		return { ...prevState, success: false };
	}
}

import { errorResponse, successResponse } from "@/lib/route-response";
import { getErrors, registerSchema } from "@/lib/validation-schema";
import User, { UserDocument } from "@/models/User";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
	try {
		const credentials = await request.json();

		const { success, data, error } = await registerSchema.safeParseAsync(credentials);
		if (!success) {
			return errorResponse(400, error.message, { errors: getErrors(error) });
		}

		const userExists = await User.findOne({ email: data.email });
		if (userExists) {
			return errorResponse(400, "User already exists", { errors: { email: "User already exists" } });
		}

		const user: UserDocument = await User.create({
			name: data.name,
			email: data.email,
			password: data.password,
		});

		if (!user) {
			return errorResponse(500, "Failed to create user");
		}

		const token = user.generateToken();

		if (!token) {
			return errorResponse(500, "Failed to generate token");
		}

		const cookieStore = await cookies();
		cookieStore.set("token", token);

		return successResponse(201, "User created successfully", { user, token });
	} catch (error) {
		console.error(error);
		return errorResponse(500, "Internal Server Error");
	}
};

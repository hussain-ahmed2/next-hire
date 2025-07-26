import { Role } from "@/types/user";
import z from "zod/v3";

const userSchema = z.object({
	name: z.string().trim().min(3, { message: "Name must be at least 3 characters." }).max(50, { message: "Name must be at most 50 characters." }),
	email: z.string().trim().email({ message: "Invalid email address." }),
	password: z.string().trim().min(6, { message: "Password must be at least 6 characters." }).max(50, { message: "Password must be at most 50 characters." }),
	avatar: z.string().trim().optional().default(""),
	role: z.enum([Role.Admin, Role.Employer, Role.Candidate]).optional().default(Role.Candidate),
});

export const registerSchema = userSchema
	.omit({ role: true, avatar: true })
	.extend({
		confirmPassword: z.string().trim().min(6, { message: "Password must be at least 6 characters." }).max(50, { message: "Password must be at most 50 characters." }),
	})
	.refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match.", path: ["confirmPassword"] });
export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = userSchema.pick({ email: true, password: true });
export type LoginSchema = z.infer<typeof loginSchema>;

export const getErrors = (error: z.ZodError) => {
	const errors = error.formErrors.fieldErrors;
	const result = {} as Record<string, string>;

	for (const key in errors) {
		if (Array.isArray(errors[key])) {
			result[key] = errors[key][0];
		}
	}

	return result;
};

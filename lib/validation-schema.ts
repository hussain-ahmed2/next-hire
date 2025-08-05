import { Role } from "@/types/user";
import z from "zod/v3";

const userSchema = z.object({
	name: z.string().trim().min(3, { message: "Name must be at least 3 characters." }).max(50, { message: "Name must be at most 50 characters." }),
	email: z.string().trim().email({ message: "Invalid email address." }),
	password: z.string().trim().min(6, { message: "Password must be at least 6 characters." }).max(50, { message: "Password must be at most 50 characters." }),
	avatar: z.string().trim().optional().default(""),
	bio: z.string().trim().optional().default(""),
	role: z.enum([Role.Admin, Role.Employer, Role.Candidate]).optional().default(Role.Candidate),
});

export const registerSchema = userSchema
	.omit({ role: true, avatar: true, bio: true })
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

export const editProfileSchema = userSchema
	.pick({
		name: true,
		email: true,
		avatar: true,
		bio: true,
	})
	.extend({
		oldPassword: z.string().trim().optional(),
		newPassword: z.string().trim().optional(),
	})
	.superRefine((data, ctx) => {
		const { oldPassword, newPassword } = data;

		// If oldPassword is provided, newPassword is required
		if (oldPassword) {
			if (!newPassword) {
				ctx.addIssue({
					path: ["newPassword"],
					code: z.ZodIssueCode.custom,
					message: "New password is required when old password is provided.",
				});
			} else {
				// If newPassword is too short
				if (newPassword.length < 6) {
					ctx.addIssue({
						path: ["newPassword"],
						code: z.ZodIssueCode.too_small,
						minimum: 6,
						type: "string",
						inclusive: true,
						message: "New password must be at least 6 characters long.",
					});
				}

				// If oldPassword and newPassword are the same
				if (newPassword === oldPassword) {
					ctx.addIssue({
						path: ["newPassword"],
						code: z.ZodIssueCode.custom,
						message: "New password must be different from old password.",
					});
				}
			}
		}
	});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;

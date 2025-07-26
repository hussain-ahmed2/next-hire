"use client";

import InputField from "@/components/input-field";
import { register, RegisterState } from "./register-action";
import { useActionState } from "react";
import { redirect } from "next/navigation";

const initialState: RegisterState = {
	errors: {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	},
	form: {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	},
	success: false,
};

export default function RegisterForm() {
	const [state, fromAction, isPending] = useActionState(async (prevState: RegisterState, formData: FormData) => {
		const response = await register(prevState, formData);
		if (response.success) redirect("/dashboard");
		return response;
	}, initialState);

	return (
		<form className="flex flex-col space-y-2" action={fromAction}>
			<InputField name="name" label="Name" defaultValue={state.form.name} error={state.errors.name} placeholder="Enter your full name" />
			<InputField name="email" label="Email" type="email" defaultValue={state.form.email} error={state.errors.email} placeholder="Enter your email" />
			<InputField name="password" label="Password" type="password" defaultValue={state.form.password} error={state.errors.password} placeholder="Enter your password" />
			<InputField
				name="confirmPassword"
				label="Confirm Password"
				type="password"
				defaultValue={state.form.confirmPassword}
				error={state.errors.confirmPassword}
				placeholder="Confirm your password"
			/>

			<button className="btn-submit disabled:bg-purple-500/50 disabled:cursor-progress" type="submit" disabled={isPending}>
				{isPending ? "Registering..." : "Register"}
			</button>
		</form>
	);
}

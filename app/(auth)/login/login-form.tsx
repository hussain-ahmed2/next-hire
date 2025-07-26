"use client";
import InputField from "@/components/input-field";
import { useActionState } from "react";
import { login, LoginState } from "./login-action";
import { redirect } from "next/navigation";

const initialState = {
	errors: {
		email: "",
		password: "",
	},
	form: {
		email: "",
		password: "",
	},
	success: false,
};

export default function LoginForm() {
	const [state, fromAction, isPending] = useActionState(async (prevState: LoginState, formData: FormData) => {
		const response = await login(prevState, formData);
		if (response.success) redirect("/dashboard");
		return response;
	}, initialState);

	return (
		<form className="flex flex-col space-y-2" action={fromAction}>
			<InputField name="email" label="Email" type="email" defaultValue={state.form.email} error={state.errors.email} placeholder="Enter your email" />
			<InputField name="password" label="Password" type="password" defaultValue={state.form.password} error={state.errors.password} placeholder="Enter your password" />
			<button className="btn-submit disabled:bg-purple-500/50 disabled:cursor-progress" type="submit" disabled={isPending}>
				{isPending ? "Logging in..." : "Login"}
			</button>
		</form>
	);
}

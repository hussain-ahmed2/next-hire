import Link from "next/link";
import RegisterForm from "./register-form";

export default function RegisterPage() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="max-w-3xl w-full mx-auto bg-white p-5 sm:p-8 lg:p-10 rounded-md shadow">
				<h1 className="text-3xl font-black mb-4 text-center text-purple-500">Register</h1>
				<p className="text-center mb-4 font-medium text-neutral-600">Create a new account</p>
				<RegisterForm />
				<p className="mt-2 text-center">
					Already have an account?&nbsp;
					<Link href="/login" className="text-purple-500 underline">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

import LoginForm from "./login-form";
import HoverPrefetchLink from "@/components/ui/hover-prefetch-link";

export default function LoginPage() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<div className="max-w-3xl w-full mx-auto bg-white p-5 sm:p-8 lg:p-10 rounded-md shadow">
				<h1 className="text-3xl font-black mb-4 text-center text-purple-500">Login</h1>
				<p className="text-center mb-4 font-medium text-neutral-600">Log in to your account</p>
				<LoginForm />
				<p className="mt-2 text-center">
					Don&rsquo;t have an account?&nbsp;
					<HoverPrefetchLink href="/register" className="text-purple-500 underline">
						Register
					</HoverPrefetchLink>
				</p>
			</div>
		</div>
	);
}
